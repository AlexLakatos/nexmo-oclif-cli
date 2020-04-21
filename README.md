nexmo-oclif-cli
===============

Nexmo CLI PoC using oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nexmo-oclif-cli.svg)](https://npmjs.org/package/nexmo-oclif-cli)
[![Codecov](https://codecov.io/gh/AlexLakatos/nexmo-oclif-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/AlexLakatos/nexmo-oclif-cli)
[![Downloads/week](https://img.shields.io/npm/dw/nexmo-oclif-cli.svg)](https://npmjs.org/package/nexmo-oclif-cli)
[![License](https://img.shields.io/npm/l/nexmo-oclif-cli.svg)](https://github.com/AlexLakatos/nexmo-oclif-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g nexmo-oclif-cli
$ nexmoo COMMAND
running command...
$ nexmoo (-v|--version|version)
nexmo-oclif-cli/0.0.1 darwin-x64 node-v12.15.0
$ nexmoo --help [COMMAND]
USAGE
  $ nexmoo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nexmoo hello`](#nexmoo-hello)
* [`nexmoo help [COMMAND]`](#nexmoo-help-command)

## `nexmoo hello`

Describe the command here

```
USAGE
  $ nexmoo hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/AlexLakatos/nexmo-oclif-cli/blob/v0.0.1/src/commands/hello.js)_

## `nexmoo help [COMMAND]`

display help for nexmoo

```
USAGE
  $ nexmoo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
