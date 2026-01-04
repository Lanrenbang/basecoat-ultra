import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import { execa } from "execa";
import prompts from "prompts";
import { registry } from "../registry.js";

async function getPackageManager() {
  const userAgent = process.env.npm_config_user_agent || "";
  if (userAgent.includes("bun")) return "bun";
  if (userAgent.includes("pnpm")) return "pnpm";
  if (userAgent.includes("yarn")) return "yarn";
  return "npm";
}

export async function add(components) {
  const configPath = path.join(process.cwd(), "components.json");
  if (!await fs.pathExists(configPath)) {
    console.log(chalk.red("Error: components.json not found. Run 'init' first."));
    return;
  }

  const config = await fs.readJson(configPath);
  const targetDir = path.join(process.cwd(), config.paths.components);

  if (!components || components.length === 0) {
    const response = await prompts({
      type: "multiselect",
      name: "selectedComponents",
      message: "Select components to add",
      choices: Object.keys(registry).map(name => ({ title: name, value: name }))
    });
    components = response.selectedComponents;
  }

  if (!components || components.length === 0) return;

  const pkgManager = await getPackageManager();
  
  for (const name of components) {
    const componentData = registry[name];
    if (!componentData) {
      console.log(chalk.yellow(`Warning: Component '${name}' not found in registry.`));
      continue;
    }

    const spinner = ora(`Adding ${name}...`).start();

    // 1. Install dependencies
    if (componentData.deps && componentData.deps.length > 0) {
      spinner.text = `Installing dependencies for ${name}...`;
      try {
        const installCmd = pkgManager === "yarn" ? "add" : "install";
        await execa(pkgManager, [installCmd, ...componentData.deps], { cwd: process.cwd() });
      } catch (error) {
        spinner.fail(`Failed to install dependencies for ${name}`);
        console.error(error);
        continue;
      }
    }

    // 2. Copy component file
    const sourcePath = path.join(
      import.meta.dirname, 
      "../../../svelte/src/lib/components", 
      componentData.fileName
    );

    const targetPath = path.join(targetDir, componentData.fileName);

    try {
      if (await fs.pathExists(sourcePath)) {
        await fs.ensureDir(targetDir);
        await fs.copy(sourcePath, targetPath);
        spinner.succeed(`Added ${name} to ${config.paths.components}`);
      } else {
        spinner.fail(`Source file for ${name} not found at ${sourcePath}`);
      }
    } catch (error) {
      spinner.fail(`Error copying ${name}`);
      console.error(error);
    }
  }

  console.log(chalk.green("\n✔ Done."));
}
