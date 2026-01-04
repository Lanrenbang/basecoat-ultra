/**
 * Basecoat Ultra Build Script
 * 
 * Handles CSS and Theme building.
 * JS bundling is handled by Vite.
 * 
 * Usage:
 *   bun run build.ts          # Build CSS + Themes
 */

import { readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const DIRS = {
  srcCSS: "./src/css",
  srcTheme: "./src/theme",
  dist: "./dist",
  distJS: "./dist/js",
  distCSS: "./dist/css",
  distTheme: "./dist/theme",
};

// Ensure directories exist
async function ensureDirs() {
  await mkdir(DIRS.dist, { recursive: true });
  await mkdir(DIRS.distJS, { recursive: true });
  await mkdir(DIRS.distCSS, { recursive: true });
  await mkdir(DIRS.distTheme, { recursive: true });
}

// Helper: Recursively combine CSS imports
async function combineCss(filePath: string): Promise<string> {
  let content = await Bun.file(filePath).text();
  const importRegex = /@import\s+(?:url\s*\(\s*['"]?|['"])([^'")]+)(?:['"]?\s*\)|['"])\s*;/g;
  const dir = path.dirname(filePath);

  const matches = [...content.matchAll(importRegex)];
  
  for (const match of matches) {
    const fullStatement = match[0];
    const importPath = match[1];
    
    // Skip absolute URLs
    if (importPath.startsWith("http") || importPath.startsWith("//")) continue;

    const fullPath = path.resolve(dir, importPath);
    
    try {
      if (await Bun.file(fullPath).exists()) {
        const importedContent = await combineCss(fullPath);
        content = content.replace(fullStatement, importedContent);
      } else {
        console.warn(`⚠️ Skipped inline: File not found ${fullPath}`);
      }
    } catch (e) {
      console.warn(`⚠️ Failed to resolve import ${importPath} from ${filePath}`, e);
    }
  }
  return content;
}

// CSS Build
async function buildCSS() {
  console.log("🎨 Building CSS...");

  // Task A: basecoat.css (Combined Source, No Tailwind processing)
  try {
    const combined = await combineCss(path.join(DIRS.srcCSS, "basecoat.css"));
    await writeFile(path.join(DIRS.distCSS, "basecoat.css"), combined);
  } catch (e) {
    console.error("❌ Failed to combine basecoat.css", e);
  }

  // Task B: basecoat.cdn.css (Tailwind Processed)
  await runTailwind(
    path.join(DIRS.srcCSS, "basecoat.cdn.css"), 
    path.join(DIRS.distCSS, "basecoat.cdn.css"),
    true
  );

  // Task C: Extensions (datepicker, resizable)
  const extensions = ["datepicker", "resizable"];
  for (const ext of extensions) {
    const srcPath = path.join(DIRS.srcCSS, `${ext}.css`);
    const distPath = path.join(DIRS.distCSS, `${ext}.css`);
    const distMinPath = path.join(DIRS.distCSS, `${ext}.min.css`);

    const content = await combineCss(srcPath);
    await writeFile(distPath, content);

    // Minify
    const cmdMin = ["bunx", "tailwindcss", "-i", distPath, "-o", distMinPath, "--minify"];
    const procMin = Bun.spawn(cmdMin, { stdout: "ignore", stderr: "inherit" });
    await procMin.exited;
  }
}

async function runTailwind(input: string, output: string, minify: boolean) {
  const cmd = ["bunx", "tailwindcss", "-i", input, "-o", output];
  const proc = Bun.spawn(cmd, { stdout: "inherit", stderr: "inherit" });
  await proc.exited;

  if (minify) {
    const minOutput = output.replace(".css", ".min.css");
    const cmdMin = ["bunx", "tailwindcss", "-i", input, "-o", minOutput, "--minify"];
    const procMin = Bun.spawn(cmdMin, { stdout: "ignore", stderr: "inherit" });
    await procMin.exited;
  }
}

// Theme Build
async function buildThemes() {
  console.log("🎭 Building Themes...");
  
  try {
    const themes = (await readdir(DIRS.srcTheme, { withFileTypes: true }))
      .filter(d => d.isDirectory())
      .map(d => d.name);

    for (const theme of themes) {
      const themeIndex = path.join(DIRS.srcTheme, theme, "index.css");
      if (await Bun.file(themeIndex).exists()) {
        const distThemeDir = path.join(DIRS.distTheme, theme);
        await mkdir(distThemeDir, { recursive: true });

        const combined = await combineCss(themeIndex);
        const distThemePath = path.join(distThemeDir, "index.css");
        await writeFile(distThemePath, combined);
        
        // Minify
        const minPath = path.join(distThemeDir, "index.min.css");
        const cmdMin = ["bunx", "tailwindcss", "-i", distThemePath, "-o", minPath, "--minify"];
        const procMin = Bun.spawn(cmdMin, { stdout: "ignore", stderr: "inherit" });
        await procMin.exited;
      }
    }
  } catch (e) {
    console.warn("Theme processing error", e);
  }
}

// Main
(async () => {
  try {
    await ensureDirs();
    await buildCSS();
    await buildThemes();
    console.log("✅ CSS & Theme Build complete.");
  } catch (e) {
    console.error("🔥 Error:", e);
    process.exit(1);
  }
})();
