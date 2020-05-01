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
* [`nexmoo hello [FILE]`](#nexmoo-hello-file)
* [`nexmoo help [COMMAND]`](#nexmoo-help-command)
* [`nexmoo number:list [FILE]`](#nexmoo-numberlist-file)
* [`nexmoo setup [FILE]`](#nexmoo-setup-file)

## `nexmoo hello [FILE]`

describe the command here

```
USAGE
  $ nexmoo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ nexmoo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/AlexLakatos/nexmo-oclif-cli/blob/v0.0.1/src/commands/hello.ts)_

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

## `nexmoo number:list [FILE]`

describe the command here

```
USAGE
  $ nexmoo number:list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/number/list.ts](https://github.com/AlexLakatos/nexmo-oclif-cli/blob/v0.0.1/src/commands/number/list.ts)_

## `nexmoo setup [FILE]`

describe the command here

```
USAGE
  $ nexmoo setup [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/setup.ts](https://github.com/AlexLakatos/nexmo-oclif-cli/blob/v0.0.1/src/commands/setup.ts)_
<!-- commandsstop -->