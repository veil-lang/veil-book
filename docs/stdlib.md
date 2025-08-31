---
sidebar_position: 30
---

# Standard Library

Veil's standard library (`std`) ships with a few focused modules.

## std/io

Printing and simple input.

Exports:

- `print(s: string)`
- `println(s: string)`
- `read_line() -> string`

Example:

```veil
import std/io;

fn main() {
    println("What is your name?");
    let name = read_line();
    println(`Hello {name}`);
}
```

## std/core

Core helpers and methods for built-in types.

Exports:

- `panic(msg: string) -> void`
- methods: `string.length()`, `T[].length()`, `append(item)` for arrays of `string`, `i32`, `bool`

## std/math

Math utilities and randomization.

Exports:

- `abs(n: i32) -> i32`
- `min(a: i32, b: i32) -> i32`
- `max(a: i32, b: i32) -> i32`
- `clamp(x: i32, min_val: i32, max_val: i32) -> i32`
- `random() -> i32` (seeded on first use)

## std/process

Shell out to the host OS.

Types:

- `struct Command { program: string, args: string[] }`

Methods:

- `Command::constructor(program: string) -> Command`
- `arg(self, arg: string) -> Command`
- `args(self, new_args: string[]) -> Command`
- `spawn(self) -> i32`

Example:

```veil
import std/process;

fn main() {
    let status = Command::constructor("echo")
        .arg("hello")
        .spawn();
}
```

## std/testing

Assertions for tests.

Exports:

- `assert(cond: bool, msg: string) -> void`
- `assert_eq<T>(a: T, b: T) -> void`
- `assert_ne<T>(a: T, b: T) -> void`


