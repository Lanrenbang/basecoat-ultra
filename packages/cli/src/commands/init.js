import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

export async function init() {
  const response = await prompts([
    {
      type: "text",
      name: "componentsPath",
      message: "Where would you like to install the components?",
      initial: "src/lib/components/ui"
    }
  ]);

  const config = {
    $schema: "https://basecoatui.com/schema.json",
    paths: {
      components: response.componentsPath
    }
  };

  const configPath = path.join(process.cwd(), "components.json");
  await fs.outputJson(configPath, config, { spaces: 2 });

  console.log(chalk.green("\n✔ Configuration complete."));
  console.log(chalk.cyan(`Config written to ${chalk.bold("components.json")}`));
}
