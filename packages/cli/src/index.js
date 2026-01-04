#!/usr/bin/env node
import { Command } from "commander";
import { init } from "./commands/init.js";
import { add } from "./commands/add.js";

const program = new Command();

program
  .name("basecoat-ultra-svelte")
  .description("CLI for basecoat-ultra-svelte components")
  .version("0.1.0");

program
  .command("init")
  .description("Initialize basecoat-ultra-svelte configuration")
  .action(init);

program
  .command("add")
  .description("Add a component to your project")
  .argument("[components...]", "the components to add")
  .action(add);

program.parse();
