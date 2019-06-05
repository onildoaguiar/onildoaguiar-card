#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

const logger = console;

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
};

const data = {
  name: chalk.white('Onildo Aguiar /'),
  handle: chalk.blueBright('Drizzle Land Studios'),
  work: chalk.white('Full Stack Developer'),
  twitter: chalk.blueBright('https://twitter.com/onildoaguiar'),
  github: chalk.blueBright('https://github.com/onildoaguiar'),
  npm: chalk.blueBright('https://www.npmjs.com/~onildoaguiar'),
  linkedin: chalk.blueBright('https://linkedin.com/in/onildoaguiar'),
  web: chalk.blueBright('https://onildoaguiar.com'),
  npx: chalk.white('npx onildoaguiar-card'),
  labelWork: chalk.white('      Work:'),
  labelTwitter: chalk.white('   Twitter:'),
  labelGitHub: chalk.white('    GitHub:'),
  labelNpm: chalk.white('       NPM:'),
  labelLinkedIn: chalk.white('  LinkedIn:'),
  labelWeb: chalk.white('       Web:'),
  labelCard: chalk.white('      Card:'),
};

const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const npming = `${data.labelNpm}  ${data.npm}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output = heading
  + newline
  + newline
  + working
  + newline
  + twittering
  + newline
  + githubing
  + newline
  + npming
  + newline
  + linkedining
  + newline
  + webing
  + newline
  + newline
  + carding;

const cardMessage = chalk.yellow(boxen(output, options));
logger.log(cardMessage);