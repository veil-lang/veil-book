---
sidebar_position: 20
---

# Language Reference

This is a concise reference to Veil syntax and core semantics.

## Program entry

```veil
fn main() {
    println("Hello");
}
```

## Imports

```veil
import std/io;
import std/core;
```

`std/prelude` re-exports `std/io` and `std/core` for convenience.

## Functions

```veil
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

## Variables and types

Primitive types include `i32`, `bool`, `string`, pointers (`*u8`), and arrays like `i32[]`.

```veil
let age = 20;
let name = "Alex";
let data: i32[] = [];
```

## Control flow

```veil
if age >= 18 { println("ok"); } else { println("no"); }

while age > 0 { age = age - 1; }
```

## Strings and interpolation

```veil
let s = `Hello {name}`; // use backticks for interpolation
println(s);
```

## Methods on built-ins

From `std/core`:

- `string.length() -> i32`
- `T[].length() -> i32` for `string[]`, `i32[]`, `bool[]`
- `append(item)` for arrays of `string`, `i32`, `bool`

```veil
import std/core;

let xs: i32[] = [];
let ys = xs.append(42);
println(ys.length());
```

## Foreign functions

Call C functions via `foreign` declarations:

```veil
#[header="stdlib.h"]
foreign fn exit(code: i32) -> void;
```

Attributes:

- `#[header="..."]` include C header
- `#[no_emit_decl="true"]` prevent emitting C declaration

## Errors and panics

`std/core` exposes `panic(msg: string) -> void`.

```veil
import std/core;
panic("unreachable");
```

## Standard library overview

See the dedicated Stdlib pages for `std/io`, `std/core`, `std/math`, `std/process`, `std/testing`.


