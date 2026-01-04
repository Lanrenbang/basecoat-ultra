#!/usr/bin/env bun
/**
 * Upstream Diff Analysis Tool for Basecoat Ultra
 * 
 * Compares packages/ultra with upstream basecoat repository.
 * Generates component-level diffs for both CSS and JS.
 * 
 * Usage:
 *   bun run scripts/upstream-diff.ts [command]
 * 
 * Commands:
 *   analyze   - Full analysis report (default)
 *   css       - CSS component diffs only
 *   js        - JS component diffs only
 *   sync      - Update upstream tracking branch
 *   report    - Generate markdown report
 */

import { readdir, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { $ } from "bun";

// ============================================================================
// Configuration (paths relative to packages/ultra/)
// ============================================================================

const CONFIG = {
  // Source paths (relative to packages/ultra/)
  srcCSS: "./src/css",
  srcJS: "./src/js",
  partsCSS: "./src/css/parts",
  
  // Upstream git refs
  upstreamCSS: "upstream/main:src/css/basecoat.css",
  upstreamJS: "upstream/main:src/js",
  
  // Output directories (relative to packages/ultra/)
  outputDir: "./upstream-analysis",
  patchesDir: "./upstream-analysis/patches",
  reportsDir: "./upstream-analysis/reports",
  tempDir: "./upstream-analysis/.temp",
  
  // Git tracking
  trackingBranch: "upstream/tracking",
  upstreamRemote: "upstream",
  upstreamBranch: "main",
  
  // CSS section marker pattern
  cssSectionPattern: /^\/\* ([A-Za-z0-9 -]+) \*\/$/,
  
  // Components to ignore (ultra-only additions)
  ultraOnlyCSS: ["carousel", "input-otp", "sheet", "toggle-group", "neumorphism"],
  ultraOnlyJS: ["accordion", "carousel", "catppuccin-theme-switcher", "datepicker", 
                "dialog", "input-otp", "lighting", "pagination", "resizable", 
                "sheet", "slider", "toggle"],
  
  // External dependencies (always separate)
  externalDeps: ["datepicker", "resizable"],
};

// ============================================================================
// Types
// ============================================================================

interface ComponentDiff {
  name: string;
  type: "css" | "js";
  status: "modified" | "added" | "deleted" | "unchanged";
  insertions: number;
  deletions: number;
  patch?: string;
  isUltraOnly: boolean;
}

interface UpstreamInfo {
  commit: string;
  tag: string;
  date: string;
}

interface AnalysisReport {
  timestamp: string;
  upstream: UpstreamInfo;
  tracking: { commit: string; date: string };
  cssDiffs: ComponentDiff[];
  jsDiffs: ComponentDiff[];
  summary: {
    totalComponents: number;
    modified: number;
    added: number;
    unchanged: number;
    ultraOnly: number;
  };
}

// ============================================================================
// Utility Functions
// ============================================================================

async function ensureDirs() {
  await mkdir(CONFIG.outputDir, { recursive: true });
  await mkdir(CONFIG.patchesDir, { recursive: true });
  await mkdir(CONFIG.reportsDir, { recursive: true });
  await mkdir(CONFIG.tempDir, { recursive: true });
}

async function cleanTemp() {
  await rm(CONFIG.tempDir, { recursive: true, force: true });
  await mkdir(CONFIG.tempDir, { recursive: true });
}

async function getGitInfo(ref: string): Promise<{ commit: string; date: string }> {
  const commit = (await $`git rev-parse --short ${ref}`.text()).trim();
  const date = (await $`git log -1 --format=%ci ${ref}`.text()).trim();
  return { commit, date };
}

async function getUpstreamTag(): Promise<string> {
  try {
    const tag = (await $`git describe --tags --exact-match upstream/main 2>/dev/null`.text()).trim();
    return tag || "untagged";
  } catch {
    return (await $`git describe --tags --always upstream/main`.text()).trim();
  }
}

// ============================================================================
// CSS Processing
// ============================================================================

/**
 * Split upstream basecoat.css into individual component files
 */
async function splitUpstreamCSS(): Promise<Map<string, string>> {
  const components = new Map<string, string>();
  
  // Get upstream CSS content from git
  const content = await $`git show ${CONFIG.upstreamCSS}`.text();
  const lines = content.split("\n");
  
  let currentComponent: string | null = null;
  let currentContent: string[] = [];
  let baseContent: string[] = [];
  let inBase = true;
  
  for (const line of lines) {
    const match = line.match(CONFIG.cssSectionPattern);
    
    if (match) {
      // Save previous component
      if (currentComponent) {
        components.set(currentComponent, currentContent.join("\n"));
      } else if (inBase && baseContent.length > 0) {
        components.set("base", baseContent.join("\n"));
      }
      
      // Start new component
      inBase = false;
      currentComponent = match[1].toLowerCase().replace(/ /g, "-");
      // Normalize names
      if (currentComponent === "tables") currentComponent = "table";
      if (currentComponent === "toasts") currentComponent = "toast";
      currentContent = [line];
    } else {
      if (inBase) {
        baseContent.push(line);
      } else if (currentComponent) {
        currentContent.push(line);
      }
    }
  }
  
  // Save last component
  if (currentComponent) {
    components.set(currentComponent, currentContent.join("\n"));
  }
  
  return components;
}

/**
 * Read our modular CSS components
 */
async function readUltraCSS(): Promise<Map<string, string>> {
  const components = new Map<string, string>();
  
  // Read base config
  try {
    const configPath = path.join(CONFIG.srcCSS, "config.css");
    const config = await Bun.file(configPath).text();
    components.set("base", config);
  } catch (e) {
    console.warn("Could not read config.css");
  }
  
  // Read component parts
  const partsDir = path.join(CONFIG.partsCSS, "components");
  try {
    const files = await readdir(partsDir);
    for (const file of files) {
      if (file.endsWith(".css")) {
        const name = file.replace(".css", "");
        const content = await Bun.file(path.join(partsDir, file)).text();
        components.set(name, content);
      }
    }
  } catch (e) {
    console.warn("Could not read CSS parts:", e);
  }
  
  return components;
}

/**
 * Generate CSS component diffs
 */
async function generateCSSDiffs(): Promise<ComponentDiff[]> {
  const diffs: ComponentDiff[] = [];
  
  const upstreamComponents = await splitUpstreamCSS();
  const ultraComponents = await readUltraCSS();
  
  // Write temp files for diff
  const upstreamTempDir = path.join(CONFIG.tempDir, "upstream-css");
  const ultraTempDir = path.join(CONFIG.tempDir, "ultra-css");
  await mkdir(upstreamTempDir, { recursive: true });
  await mkdir(ultraTempDir, { recursive: true });
  
  // Write upstream components
  for (const [name, content] of upstreamComponents) {
    await writeFile(path.join(upstreamTempDir, `${name}.css`), content);
  }
  
  // Write ultra components
  for (const [name, content] of ultraComponents) {
    await writeFile(path.join(ultraTempDir, `${name}.css`), content);
  }
  
  // Get all component names
  const allNames = new Set([...upstreamComponents.keys(), ...ultraComponents.keys()]);
  
  for (const name of allNames) {
    const isUltraOnly = CONFIG.ultraOnlyCSS.includes(name) || !upstreamComponents.has(name);
    const upstreamFile = path.join(upstreamTempDir, `${name}.css`);
    const ultraFile = path.join(ultraTempDir, `${name}.css`);
    
    let status: ComponentDiff["status"] = "unchanged";
    let insertions = 0;
    let deletions = 0;
    let patch = "";
    
    if (!upstreamComponents.has(name)) {
      status = "added";
      const content = ultraComponents.get(name) || "";
      insertions = content.split("\n").length;
    } else if (!ultraComponents.has(name)) {
      status = "deleted";
      const content = upstreamComponents.get(name) || "";
      deletions = content.split("\n").length;
    } else {
      // Both exist, generate diff
      try {
        const diffResult = await $`diff -u ${upstreamFile} ${ultraFile}`.nothrow();
        patch = diffResult.stdout.toString();
        
        if (patch) {
          status = "modified";
          // Count insertions/deletions
          for (const line of patch.split("\n")) {
            if (line.startsWith("+") && !line.startsWith("+++")) insertions++;
            if (line.startsWith("-") && !line.startsWith("---")) deletions++;
          }
          
          // Save patch file
          if (!isUltraOnly) {
            await writeFile(
              path.join(CONFIG.patchesDir, `css-${name}.patch`),
              patch
            );
          }
        }
      } catch (e) {
        // diff returns non-zero when files differ
      }
    }
    
    diffs.push({
      name,
      type: "css",
      status,
      insertions,
      deletions,
      patch: status === "modified" ? patch : undefined,
      isUltraOnly,
    });
  }
  
  return diffs.sort((a, b) => a.name.localeCompare(b.name));
}

// ============================================================================
// JS Processing
// ============================================================================

/**
 * Get list of upstream JS files
 */
async function getUpstreamJSFiles(): Promise<string[]> {
  const output = await $`git ls-tree --name-only upstream/main:src/js`.text();
  return output.trim().split("\n").filter(f => f.endsWith(".js"));
}

/**
 * Generate JS component diffs
 */
async function generateJSDiffs(): Promise<ComponentDiff[]> {
  const diffs: ComponentDiff[] = [];
  
  // Get upstream JS files
  const upstreamFiles = await getUpstreamJSFiles();
  const upstreamNames = new Set(upstreamFiles.map(f => f.replace(".js", "")));
  
  // Get ultra JS files
  const ultraFiles = await readdir(CONFIG.srcJS);
  const ultraJSFiles = ultraFiles.filter(f => f.endsWith(".js") && f !== "index.js");
  const ultraNames = new Set(ultraJSFiles.map(f => f.replace(".js", "")));
  
  // Create temp directories
  const upstreamTempDir = path.join(CONFIG.tempDir, "upstream-js");
  const ultraTempDir = path.join(CONFIG.tempDir, "ultra-js");
  await mkdir(upstreamTempDir, { recursive: true });
  await mkdir(ultraTempDir, { recursive: true });
  
  // Write upstream JS files
  for (const file of upstreamFiles) {
    const content = await $`git show upstream/main:src/js/${file}`.text();
    await writeFile(path.join(upstreamTempDir, file), content);
  }
  
  // Copy ultra JS files
  for (const file of ultraJSFiles) {
    const content = await Bun.file(path.join(CONFIG.srcJS, file)).text();
    await writeFile(path.join(ultraTempDir, file), content);
  }
  
  // Get all component names
  const allNames = new Set([...upstreamNames, ...ultraNames]);
  
  for (const name of allNames) {
    const isUltraOnly = CONFIG.ultraOnlyJS.includes(name) || !upstreamNames.has(name);
    const upstreamFile = path.join(upstreamTempDir, `${name}.js`);
    const ultraFile = path.join(ultraTempDir, `${name}.js`);
    
    let status: ComponentDiff["status"] = "unchanged";
    let insertions = 0;
    let deletions = 0;
    let patch = "";
    
    if (!upstreamNames.has(name)) {
      status = "added";
      try {
        const content = await Bun.file(path.join(CONFIG.srcJS, `${name}.js`)).text();
        insertions = content.split("\n").length;
      } catch {}
    } else if (!ultraNames.has(name)) {
      status = "deleted";
      const content = await $`git show upstream/main:src/js/${name}.js`.text();
      deletions = content.split("\n").length;
    } else {
      // Both exist, generate diff
      try {
        const diffResult = await $`diff -u ${upstreamFile} ${ultraFile}`.nothrow();
        patch = diffResult.stdout.toString();
        
        if (patch) {
          status = "modified";
          for (const line of patch.split("\n")) {
            if (line.startsWith("+") && !line.startsWith("+++")) insertions++;
            if (line.startsWith("-") && !line.startsWith("---")) deletions++;
          }
          
          // Save patch file
          if (!isUltraOnly) {
            await writeFile(
              path.join(CONFIG.patchesDir, `js-${name}.patch`),
              patch
            );
          }
        }
      } catch (e) {
        // diff returns non-zero when files differ
      }
    }
    
    diffs.push({
      name,
      type: "js",
      status,
      insertions,
      deletions,
      patch: status === "modified" ? patch : undefined,
      isUltraOnly,
    });
  }
  
  return diffs.sort((a, b) => a.name.localeCompare(b.name));
}

// ============================================================================
// Report Generation
// ============================================================================

async function generateReport(cssDiffs: ComponentDiff[], jsDiffs: ComponentDiff[]): Promise<AnalysisReport> {
  const upstreamInfo = await getGitInfo("upstream/main");
  const trackingInfo = await getGitInfo(CONFIG.trackingBranch);
  const upstreamTag = await getUpstreamTag();
  
  const allDiffs = [...cssDiffs, ...jsDiffs];
  
  const report: AnalysisReport = {
    timestamp: new Date().toISOString(),
    upstream: {
      commit: upstreamInfo.commit,
      tag: upstreamTag,
      date: upstreamInfo.date,
    },
    tracking: trackingInfo,
    cssDiffs,
    jsDiffs,
    summary: {
      totalComponents: allDiffs.length,
      modified: allDiffs.filter(d => d.status === "modified").length,
      added: allDiffs.filter(d => d.status === "added").length,
      unchanged: allDiffs.filter(d => d.status === "unchanged").length,
      ultraOnly: allDiffs.filter(d => d.isUltraOnly).length,
    },
  };
  
  return report;
}

function generateMarkdownReport(report: AnalysisReport): string {
  const lines: string[] = [];
  
  lines.push("# Upstream Diff Analysis Report");
  lines.push("");
  lines.push(`Generated: ${report.timestamp}`);
  lines.push("");
  lines.push("## Upstream Information");
  lines.push("");
  lines.push(`- **Repository**: https://github.com/hunvreus/basecoat`);
  lines.push(`- **Version**: ${report.upstream.tag}`);
  lines.push(`- **Commit**: ${report.upstream.commit}`);
  lines.push(`- **Date**: ${report.upstream.date}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`| Metric | Count |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Total Components | ${report.summary.totalComponents} |`);
  lines.push(`| Modified | ${report.summary.modified} |`);
  lines.push(`| Ultra-only Additions | ${report.summary.added} |`);
  lines.push(`| Unchanged | ${report.summary.unchanged} |`);
  lines.push("");
  
  // CSS Diffs
  lines.push("## CSS Component Diffs");
  lines.push("");
  lines.push("| Component | Status | +/- | Notes |");
  lines.push("|-----------|--------|-----|-------|");
  
  for (const diff of report.cssDiffs) {
    const statusIcon = {
      modified: "🔧",
      added: "✨",
      deleted: "❌",
      unchanged: "✅",
    }[diff.status];
    
    const changes = diff.status === "unchanged" ? "-" : `+${diff.insertions}/-${diff.deletions}`;
    const notes = diff.isUltraOnly ? "Ultra-only" : "";
    
    lines.push(`| ${diff.name} | ${statusIcon} ${diff.status} | ${changes} | ${notes} |`);
  }
  
  lines.push("");
  
  // JS Diffs
  lines.push("## JS Component Diffs");
  lines.push("");
  lines.push("| Component | Status | +/- | Notes |");
  lines.push("|-----------|--------|-----|-------|");
  
  for (const diff of report.jsDiffs) {
    const statusIcon = {
      modified: "🔧",
      added: "✨",
      deleted: "❌",
      unchanged: "✅",
    }[diff.status];
    
    const changes = diff.status === "unchanged" ? "-" : `+${diff.insertions}/-${diff.deletions}`;
    const notes = diff.isUltraOnly ? "Ultra-only" : "";
    
    lines.push(`| ${diff.name} | ${statusIcon} ${diff.status} | ${changes} | ${notes} |`);
  }
  
  lines.push("");
  lines.push("## Patch Files");
  lines.push("");
  lines.push("Individual component patches are available in `upstream-analysis/patches/`:");
  lines.push("");
  
  const modifiedCSS = report.cssDiffs.filter(d => d.status === "modified" && !d.isUltraOnly);
  const modifiedJS = report.jsDiffs.filter(d => d.status === "modified" && !d.isUltraOnly);
  
  if (modifiedCSS.length > 0 || modifiedJS.length > 0) {
    lines.push("```");
    lines.push("patches/");
    for (const diff of modifiedCSS) {
      lines.push(`├── css-${diff.name}.patch`);
    }
    for (const diff of modifiedJS) {
      lines.push(`├── js-${diff.name}.patch`);
    }
    lines.push("```");
  } else {
    lines.push("No patches generated (no modified upstream components).");
  }
  lines.push("");
  
  lines.push("## Usage");
  lines.push("");
  lines.push("```bash");
  lines.push("# From packages/ultra directory:");
  lines.push("bun run upstream:diff    # Full analysis");
  lines.push("bun run upstream:sync    # Update tracking branch");
  lines.push("```");
  lines.push("");
  
  return lines.join("\n");
}

// ============================================================================
// Commands
// ============================================================================

async function cmdAnalyze() {
  console.log("🔍 Analyzing upstream differences...\n");
  
  await ensureDirs();
  await cleanTemp();
  
  // Fetch latest upstream
  console.log("📡 Fetching upstream...");
  await $`git fetch upstream --tags`.quiet();
  
  // Generate diffs
  console.log("📊 Generating CSS diffs...");
  const cssDiffs = await generateCSSDiffs();
  
  console.log("📊 Generating JS diffs...");
  const jsDiffs = await generateJSDiffs();
  
  // Generate report
  console.log("📝 Generating report...");
  const report = await generateReport(cssDiffs, jsDiffs);
  
  // Save JSON report
  const jsonPath = path.join(CONFIG.reportsDir, `analysis-${Date.now()}.json`);
  await writeFile(jsonPath, JSON.stringify(report, null, 2));
  
  // Save latest JSON
  await writeFile(
    path.join(CONFIG.outputDir, "latest-analysis.json"),
    JSON.stringify(report, null, 2)
  );
  
  // Generate and save markdown report
  const markdown = generateMarkdownReport(report);
  await writeFile(path.join(CONFIG.outputDir, "UPSTREAM_DIFF.md"), markdown);
  
  // Clean temp
  await cleanTemp();
  
  // Print summary
  console.log("\n" + "=".repeat(60));
  console.log("           UPSTREAM DIFF ANALYSIS COMPLETE");
  console.log("=".repeat(60));
  console.log(`\n📌 Upstream: ${report.upstream.tag} (${report.upstream.commit})`);
  console.log(`📅 Date: ${report.upstream.date}\n`);
  console.log("📊 Summary:");
  console.log(`   Total Components: ${report.summary.totalComponents}`);
  console.log(`   Modified: ${report.summary.modified}`);
  console.log(`   Ultra-only: ${report.summary.ultraOnly}`);
  console.log(`   Unchanged: ${report.summary.unchanged}`);
  console.log("\n📁 Output:");
  console.log(`   Report: ${CONFIG.outputDir}/UPSTREAM_DIFF.md`);
  console.log(`   Patches: ${CONFIG.patchesDir}/`);
  console.log("");
}

async function cmdSync() {
  console.log("🔄 Syncing upstream tracking branch...\n");
  
  await $`git fetch upstream --tags`;
  
  const beforeInfo = await getGitInfo(CONFIG.trackingBranch);
  
  // Update tracking branch
  await $`git branch -f ${CONFIG.trackingBranch} upstream/main`;
  
  const afterInfo = await getGitInfo(CONFIG.trackingBranch);
  const tag = await getUpstreamTag();
  
  console.log(`\n✅ Updated ${CONFIG.trackingBranch}`);
  console.log(`   Before: ${beforeInfo.commit}`);
  console.log(`   After:  ${afterInfo.commit} (${tag})`);
  
  // Check for new commits
  const newCommits = await $`git rev-list --count ${beforeInfo.commit}..${afterInfo.commit}`.text();
  const count = parseInt(newCommits.trim());
  
  if (count > 0) {
    console.log(`\n📦 ${count} new commit(s) from upstream`);
    console.log("\nRun 'bun run upstream:diff' to see changes.");
  } else {
    console.log("\n✨ Already up to date!");
  }
}

// ============================================================================
// Main
// ============================================================================

const command = process.argv[2] || "analyze";

(async () => {
  try {
    switch (command) {
      case "analyze":
      case "diff":
        await cmdAnalyze();
        break;
      case "sync":
        await cmdSync();
        break;
      case "css":
        await ensureDirs();
        await cleanTemp();
        const cssDiffs = await generateCSSDiffs();
        console.log(JSON.stringify(cssDiffs, null, 2));
        break;
      case "js":
        await ensureDirs();
        await cleanTemp();
        const jsDiffs = await generateJSDiffs();
        console.log(JSON.stringify(jsDiffs, null, 2));
        break;
      default:
        console.log("Unknown command:", command);
        console.log("Available: analyze, sync, css, js");
        process.exit(1);
    }
  } catch (e) {
    console.error("🔥 Error:", e);
    process.exit(1);
  }
})();
