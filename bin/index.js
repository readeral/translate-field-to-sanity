#!/usr/bin/env node

const inquirer = require('inquirer')
const { PathPrompt } = require('inquirer-path')
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))
inquirer.prompt.registerPrompt('path', PathPrompt)

const translateFile = require('../src/translateFile')

async function run () {
  const answers = await inquirer.prompt([
    /* Pass your questions in here */
    {
      type: 'path',
      name: 'inputPath',
      default: process.cwd(),
      message: 'The absolute path to your ndjson file'
    },
    {
      type: 'list',
      name: 'encoding',
      choices: ['html', 'markdown'],
      default: 0,
      message: 'How is your data encoded?'
    },
    {
      type: 'string',
      name: 'key',
      default: 'body',
      message: `Key for the field where data is held`
    },
    {
      type: 'string',
      name: 'filename',
      default: 'production',
      message: `Filename for the import file`
    },
    {
      type: 'path',
      name: 'outputPath',
      default: process.cwd(),
      directoryOnly: true,
      message: `Output path for the import file`
    }
  ])
  const { inputPath, encoding, key, filename, outputPath } = answers
  await translateFile(inputPath, encoding, key, filename, outputPath)
}

run()
