# Translate field to Sanity

This tool (**heavily** borrowing from [markdown-to-sanity](https://github.com/kmelve/markdown-to-sanity) by [kmelve](https://github.com/kmelve)) takes in an existing ndjson import file containing body text that needs translating from HTML or Markdown into portable-text (the block text type in Sanity.io).
It will output an ndjson file with the required formatting for import.

## Installation

As a global CLI tool:

```sh
npm i -g translate-field-to-sanity

# or

yarn global add translate-field-to-sanity
```

As a project dependency:

```sh
npm i translate-field-to-sanity

# or

yarn add translate-field-to-sanity
```

## Usage

As CLI:

```sh
> translate-field-to-sanity # follow the instructions
```

The CLI will write a `ndjson`-file you can use with `sanity dataset import`. [Learn more about importing data to Sanity](https://www.sanity.io/docs/data-store/importing-data).
