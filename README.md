RC - React CLI
=================

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @sebastiansiejek/rc
$ rc COMMAND
running command...
$ rc (--version)
@sebastiansiejek/rc/0.0.1 darwin-x64 node-v14.18.2
$ rc --help [COMMAND]
USAGE
  $ rc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rc component [FILE]`](#rc-component-file)
* [`rc component generate`](#rc-component-generate)
* [`rc hello PERSON`](#rc-hello-person)
* [`rc hello world`](#rc-hello-world)
* [`rc help [COMMAND]`](#rc-help-command)
* [`rc plugins`](#rc-plugins)
* [`rc plugins:inspect PLUGIN...`](#rc-pluginsinspect-plugin)
* [`rc plugins:install PLUGIN...`](#rc-pluginsinstall-plugin)
* [`rc plugins:link PLUGIN`](#rc-pluginslink-plugin)
* [`rc plugins:uninstall PLUGIN...`](#rc-pluginsuninstall-plugin)
* [`rc plugins update`](#rc-plugins-update)

## `rc component [FILE]`

describe the command here

```
USAGE
  $ rc component [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ rc component
```

_See code: [dist/commands/component.ts](https://github.com/sebastiansiejek/rc-cli/blob/v0.0.1/dist/commands/component.ts)_

## `rc component generate`

```
USAGE
  $ rc component generate

EXAMPLES
  $ rc component generate
```

## `rc hello PERSON`

Say hello

```
USAGE
  $ rc hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/sebastiansiejek/rc-cli/blob/v0.0.1/dist/commands/hello/index.ts)_

## `rc hello world`

Say hello world

```
USAGE
  $ rc hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `rc help [COMMAND]`

Display help for rc.

```
USAGE
  $ rc help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for rc.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `rc plugins`

List installed plugins.

```
USAGE
  $ rc plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ rc plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.12/src/commands/plugins/index.ts)_

## `rc plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ rc plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ rc plugins:inspect myplugin
```

## `rc plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ rc plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ rc plugins add

EXAMPLES
  $ rc plugins:install myplugin 

  $ rc plugins:install https://github.com/someuser/someplugin

  $ rc plugins:install someuser/someplugin
```

## `rc plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ rc plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ rc plugins:link myplugin
```

## `rc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rc plugins unlink
  $ rc plugins remove
```

## `rc plugins update`

Update installed plugins.

```
USAGE
  $ rc plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
