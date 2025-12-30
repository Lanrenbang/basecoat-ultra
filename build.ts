import { readdir, writeFile, unlink, mkdir } from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
const command = args[0] && !args[0].startsWith("--") ? args[0] : "build";

const DIRS = {
  srcJS: "./src/js",
  srcCSS: "./src/css",
  srcTheme: "./src/theme",
  dist: "./dist",
  distJS: "./dist/js", // Vite will handle this, but we define it for reference
  distCSS: "./dist/css",
  distTheme: "./dist/theme",
  upstreamCSS: "./references/basecoat/src/css/basecoat.css",
  upstreamJS: "./references/basecoat/src/js",
  patches: "./patches"
};

// Ensure directories exist
async function ensureDirs() {
  await mkdir(DIRS.dist, { recursive: true });
  // distJS is handled by Vite, but ensuring it exists doesn't hurt
  await mkdir(DIRS.distJS, { recursive: true });
  await mkdir(DIRS.distCSS, { recursive: true });
  await mkdir(DIRS.distTheme, { recursive: true });
  await mkdir(DIRS.patches, { recursive: true });
}

// Helper: Recursively combine CSS imports
async function combineCss(filePath: string): Promise<string> {
  let content = await Bun.file(filePath).text();
  const importRegex = /@import\s+['"](\.\/[^'"]+)['"];/g;
  const dir = path.dirname(filePath);

  const matches = [...content.matchAll(importRegex)];
  
  for (const match of matches) {
    const fullStatement = match[0];
    const importPath = match[1];
    const fullPath = path.resolve(dir, importPath);
    
    try {
      const importedContent = await combineCss(fullPath);
      content = content.replace(fullStatement, importedContent);
    } catch (e) {
      console.warn(`⚠️ Failed to resolve import ${importPath} from ${filePath}`);
    }
  }
  return content;
}

// 1. CSS Build (Run by this script)
async function buildCSS() {
  console.log("🎨 Building CSS...");

  // Task A: basecoat.css (Combined Source, No Tailwind processing)
  try {
    const combined = await combineCss(path.join(DIRS.srcCSS, "basecoat.css"));
    await writeFile(path.join(DIRS.distCSS, "basecoat.css"), combined);
  } catch(e) {
    console.error("❌ Failed to combine basecoat.css", e);
  }

  // Task B: basecoat.cdn.css (Tailwind Processed)
  // Always minify in this build script since it's for production artifacts
  await runTailwind(
    path.join(DIRS.srcCSS, "basecoat.cdn.css"), 
    path.join(DIRS.distCSS, "basecoat.cdn.css"),
    true // minify
  );

  // Task C: Extensions
  const extensions = ["datepicker", "resizable"];
  for (const ext of extensions) {
    const srcPath = path.join(DIRS.srcCSS, `${ext}.css`);
    const distPath = path.join(DIRS.distCSS, `${ext}.css`);
    const distMinPath = path.join(DIRS.distCSS, `${ext}.min.css`);

    // 1. Copy Source (Normal)
    const content = await combineCss(srcPath);
    await writeFile(distPath, content);

    // 2. Minify
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

// 2. Theme Build
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

// --- Diff / Split / Check Commands ---

async function runDiff() {
    console.log("🔍 Running Diff...");
    
    // CSS Diff
    const combinedPath = path.join(DIRS.dist, "basecoat.combined.temp.css");
    try {
        const combined = await combineCss(path.join(DIRS.srcCSS, "basecoat.css"));
        await writeFile(combinedPath, combined);
        
        const proc = Bun.spawn(["diff", "-uN", DIRS.upstreamCSS, combinedPath], {
             stdout: "pipe"
        });
        const output = await new Response(proc.stdout).text();
        
        if (output) {
             console.log("CSS Diff found, writing to patches/basecoat.css.patch");
             await writeFile(path.join(DIRS.patches, "basecoat.css.patch"), output);
        } else {
             console.log("CSS: No differences.");
             await unlink(path.join(DIRS.patches, "basecoat.css.patch")).catch(()=>{});
        }
        await unlink(combinedPath);

        // JS Diff
        const procJS = Bun.spawn(["diff", "-Nru", DIRS.upstreamJS, DIRS.srcJS], {
            stdout: "pipe"
        });
        const outputJS = await new Response(procJS.stdout).text();
        
        if (outputJS) {
            console.log("JS Diff found, writing to patches/basecoat.js.patch");
             await writeFile(path.join(DIRS.patches, "basecoat.js.patch"), outputJS);
        } else {
            console.log("JS: No differences.");
            await unlink(path.join(DIRS.patches, "basecoat.js.patch")).catch(()=>{});
        }
    } catch(e) {
        console.error("Diff failed", e);
    }
}

async function runSplit() {
    console.log("✂️ Running Split...");
    const targetFile = process.argv[3] || path.join(DIRS.distCSS, "basecoat.css");
    const outputDir = path.join(DIRS.dist, "parts_split");
    await mkdir(outputDir, { recursive: true });
    
    const content = await Bun.file(targetFile).text();
    const lines = content.split('\n');
    let currentFile = null;
    let currentContent = [];

    for (const line of lines) {
        const match = line.match(/^\/\* ([a-zA-Z0-9 -]+) \*\/$/);
        if (match) {
            if (currentFile) {
                await writeFile(path.join(outputDir, currentFile), currentContent.join('\n'));
                console.log(`Created ${currentFile}`);
            }
            let name = match[1].toLowerCase().replace(/ /g, "-");
            currentFile = name + ".css";
            currentContent = [line];
        } else {
            if (currentFile) currentContent.push(line);
        }
    }
    if (currentFile) {
        await writeFile(path.join(outputDir, currentFile), currentContent.join('\n'));
        console.log(`Created ${currentFile}`);
    }
    console.log("Split complete.");
}

async function runCheck() {
    console.log("📊 Checking Patches...");
    const patches = await readdir(DIRS.patches);
    for (const p of patches) {
        if (p.endsWith(".patch")) {
            const stats = (await Bun.file(path.join(DIRS.patches, p)).text()).split('\n').length;
            console.log(`${p}: ${stats} lines`);
        }
    }
}


// --- Main ---

(async () => {
  try {
    await ensureDirs();

    if (command === "diff") {
        await runDiff();
    } else if (command === "split") {
        await runSplit();
    } else if (command === "check") {
        await runCheck();
    } else {
        // Default: Build CSS and Themes
        // JS is handled by Vite via npm script
        await buildCSS();
        await buildThemes();
        console.log("✅ CSS & Theme Build complete.");
    }
  } catch (e) {
    console.error("🔥 Error:", e);
    process.exit(1);
  }
})();