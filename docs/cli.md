---
sidebar_position: 10
---

# CLI Reference

Veil provides a single executable: `ve`.

## Quick usage

```bash
# Compile and run a file
ve path/to/file.ve

# Or use subcommands
ve run path/to/file.ve
```

## Global flags

- `-o, --output <PATH>`: output binary name (default varies by command)
- `--optimize/--no-optimize`: enable optimizations (default: optimize on)
- `--target-triple <TRIPLE>`: default `x86_64-pc-windows-msvc`
- `-v, --verbose`: verbose logs

When no subcommand is provided, `ve` behaves like `ve build`.

## Commands


### run

Compile and immediately run a source file.

```bash
ve run input.ve -v
```

Options:

- `input`: Veil source file
- `-v, --verbose`: verbose logs

### benchmark

Compile and run a file multiple times to measure performance.

```bash
ve benchmark input.ve --iterations 10 -v
```

Options:

- `input`: Veil source file
- `--iterations <N>`: repetitions (default: 10)
- `-v, --verbose`: verbose logs

Tip: Without a subcommand, `ve input.ve --iterations 10` runs benchmark mode.

### init

Create a new project structure.

```bash
ve init my_project .
```

Arguments:

- `project_name`: name for the project
- `directory`: target directory (default: `.`)

### upgrade

Upgrade the `ve` tool.

```bash
ve upgrade --channel stable --force -v
```

Options:

- `--no-remind`: disable update reminders
- `-f, --force`: force upgrade without confirmation
- `-v, --verbose`: verbose output
- `--channel <stable|canary>`: update channel (default: `stable`)

### test

Type-check, compile and run tests embedded in a file.

```bash
ve test path/to/file.ve --list
ve test path/to/file.ve -v
ve test path/to/file.ve --test-name "my_test"
```

Options:

- `input`: Veil source file
- `--list`: list available tests in file
- `--test-name <NAME>`: run only one test
- `-v, --verbose`: verbose logs

## Build directory and artifacts

`ve build` places intermediates in `./build/` alongside the input file, preserves a `.cache/` folder for incremental builds, and writes the generated C file as `temp.c`. With `-v`, the parsed AST is saved as `parsed_ast.txt`.
