"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cac = require("cac");
var cli = cac();
cli
    .command('<dir>', 'Generate Hyperapp Play templates on <dir>')
    .option('--typescript', 'Generate TypeScript templates')
    .action(function (dir, options) {
    console.log(dir);
    console.log(options);
});
cli.help();
cli.parse();
