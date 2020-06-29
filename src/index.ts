/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Command } from "commander";
import { getModelPreview } from "./preview";
import * as terminalImage from "terminal-image";

// const terminalImage = require("terminal-image");

console.log("-- 1");
(async () => {
  console.log("-- 2");
  console.log(await terminalImage.file("/Users/karreiro/Projects/dmn-cli/docs/diagram-dmn.png"));
})();
console.log("-- 3");

const program = new Command();

program.name("dmn-cli");
program.description("DMN command line tool");
program.version("dmn-cli: 0.1.0", "-v, --version");

program
  .command("preview <path>")
  .description("shows an image of the DMN model")
  .action((path) => {
    getModelPreview(path);
  });

program
  .command("inspect <path>")
  .description("inspect elements into the DMN model")
  .action((path) => {
    console.log("inspect", path);
  });

program.parse(process.argv);