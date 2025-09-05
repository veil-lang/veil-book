# Types
<hr></hr>

# Integers

| type | signed? | min | max | bits
|------|---------|-----|-----|-----
| i8   | yes     | -128| 127 | 8
| i16  | yes     | -32768| 32767 | 16
| i32  | yes     | -2^31 | 2^31 - 1 | 32
| i64  | yes     | -2^63 | 2^63 - 1 | 64
| i128 | yes     | -2^127 | 2^127 - 1 | 128
| u8   | no      | 0      | 255 | 8
| u16  | no      | 0      | 65535 | 16
| u32  | no      | 0      | 2^32 - 1 | 32
| u64  | no      | 0      | 2^64 - 1 | 64
| u128 | no      | 0      | 2^128 - 1 | 128

# Architecture-Dependent Integers

| type | signed? | size | description
|------|---------|------|------------
| isize | yes    | pointer-sized | 32-bit on 32-bit systems, 64-bit on 64-bit systems
| usize | no     | pointer-sized | 32-bit on 32-bit systems, 64-bit on 64-bit systems

# Floating-Point Types

| type | format | size | precision | range
|------|--------|------|-----------|-------
| f32  | IEEE-754 single | 4 bytes | ~7 decimal digits | ±1.175e-38 to ±3.403e+38
| f64  | IEEE-754 double | 8 bytes | ~15 decimal digits | ±2.225e-308 to ±1.798e+308

# Character and String Types

| type | encoding | size | description
|------|----------|------|------------
| char | UTF-32   | 4 bytes | Unicode scalar value
| str  | UTF-8    | variable | Heap-allocated, growable string

# Special Types

| type | size | description
|------|------|------------
| void | 0 bytes | Zero-sized type for functions that don't return a value
| any | variable | Dynamic type container with runtime type information
| rawptr | pointer-sized | Raw pointer type for unsafe operations and FFI

# Composite Types

| type | description | example
|------|-------------|----------
| `[T; N]` | Fixed-size array (stack-allocated) | `[i32; 5]`
| `[T]` | Dynamic array (heap-allocated) | `[i32]`
| `T?` | Optional type (syntactic sugar for `Option<T>`) | `i32?`
| `*T` | Raw pointer | `*i32`
| `&T` | Borrowed reference (non-owning, non-null) | `&i32`
| `weak T` | Weak reference (breaks reference cycles) | `weak Node`

# Advanced Type Features

| feature | syntax | description
|---------|--------|------------
| Union types | `string \| int` | Can hold either type
| Intersection types | `Loggable & Serializable` | Must implement both traits
| Template strings | `Hello {name}!` | String interpolation with backticks

# Increment/Decrement Operators
**Note**: `++` and `--` operators are supported only on integer types (i8..i64, u8..u64) and require a `var` binding.

```veil
var counter = 0;
const a = ++counter; // counter becomes 1, a is 1
const b = counter++; // b is 1, counter becomes 2
const c = --counter; // counter becomes 0, c is 0
const d = counter--; // d is 0, counter becomes -1
```
