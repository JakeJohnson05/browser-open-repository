#!/usr/bin/env node
'use strict';

require('inquirer-exit-listener');
/** Loading animation when finding the projects */
// const oraSpinner = require('ora')('Finding Projects...');
// const { writeFile } = require('fs');
// const { join } = require('path');
// const inquirer = require('inquirer');
// const { green, bold } = require('chalk');
const {bold} = require('chalk');
// Const logSymbols = require('log-symbols');
// const table = require('text-table');
const yargs = require('yargs/yargs')(process.argv.slice(2));
const {argv} = yargs
	.scriptName('openProject')
	.wrap(Math.min(100, yargs.terminalWidth()))
	.usage('')
	.usage(bold('open-project'))
	.usage('  Easily navigate to your project directories')
	.usage('')
	.usage('Usage:')
	.usage('  $ openProject [options]')
	.usage('Aliases: op')
	.help()
	.alias('h', 'help')
	.epilog('Visit https://github.com/JakeJohnson05/OpenProjectCli for more info');

console.log(argv);
