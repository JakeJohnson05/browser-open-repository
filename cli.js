#!/usr/bin/env node
'use strict';

const os = require('os');
const path = require('path');
const { execSync } = require('child_process');
const { existsSync } = require('fs');

require('inquirer-exit-listener');
/** Loading animation when finding the projects */
const oraSpinner = require('ora')('Finding repository...');
// const { writeFile } = require('fs');
// const { join } = require('path');
// const inquirer = require('inquirer');
const chalk = require('chalk');
// Const logSymbols = require('log-symbols');
// const table = require('text-table');
const out = require("simple-output");
const yargs = require('yargs/yargs')(getMainArgs());
const { argv } = yargs
	.scriptName('Browser Open Repository')
	.wrap(Math.min(100, yargs.terminalWidth()))
	.usage('')
	.usage(chalk.bold('open-repo'))
	.usage('  Open your projects repository in the browser')
	.usage('')
	.usage('Usage:')
	.usage('  $ open-repo [path] [options]')
	.usage('Aliases: bor')
	.help().alias('h', 'help')
	.version().alias('v', 'version')
	.epilog('Visit https://github.com/JakeJohnson05/browser-open-repository for more info');

const cwd = argv._[0] ? path.resolve(process.cwd(), argv._[0]) : process.cwd();

function error (e, msg) {
	out.error(chalk.red(msg));
	e && out.error(e);
	process.exit(1);
}

function getMainArgs() {
	let i = -1;
	const result = [];
	const mainArgs = process.argv.slice(2);
	while (++i < mainArgs.length) {
		if (mainArgs[i] === '--') break;
		result.push(mainArgs[i]);
	}
	return result;
}

function run() {
	if (!existsSync(path.join(cwd, '.git'))) {
		error(null, 'Not a git repository');
	}
	process.exit(0);
}

out.info(JSON.stringify(argv));

run();
