---
sidebar_position: 4
---

# Language Basics

Now that you've written your first program, let's learn the building blocks of Veil programming.

## Variables - Storing Information

Variables are like labeled boxes where you can store different types of information:

```veil
fn main() {
    let name = "Alex";              // Store text
    let age = 25;                   // Store a whole number
    let height = 5.8;               // Store a decimal number
    let is_student = true;          // Store true/false
    
    println(`Hi, I'm {name}!`);
    println(`I'm {age} years old`);
    println(`I'm {height} feet tall`);
    println(`Am I a student? {is_student}`);
}
```

### Types of Data

Veil can store different types of information:

| Type | What it stores | Examples |
|------|----------------|----------|
| `string` | Text | `"Hello"`, `"Programming is fun!"` |
| `i32` | Whole numbers | `42`, `-10`, `0` |
| `f64` | Decimal numbers | `3.14`, `-2.5`, `0.0` |
| `bool` | True or false | `true`, `false` |

### Variable Rules

- Variable names can contain letters, numbers, and underscores
- They must start with a letter or underscore
- Use descriptive names: `student_name` is better than `x`

```veil
fn main() {
    let student_name = "Sarah";     // ✅ Good name
    let number_of_books = 5;        // ✅ Good name
    let x = "Bob";                  // ❌ Not descriptive
}
```

## Functions - Making Reusable Code

Functions are like mini-programs that you can use over and over:

```veil
fn say_hello(person_name: string) {
    println(`Hello there, {person_name}!`);
}

fn add_numbers(first: i32, second: i32) -> i32 {
    return first + second;
}

fn main() {
    say_hello("Sarah");
    say_hello("Bob");
    
    let result = add_numbers(10, 20);
    println(`10 + 20 = {result}`);
}
```

### Function Parts

- `fn` - Tells Veil you're making a function
- `say_hello` - The name of your function
- `(person_name: string)` - What the function needs (parameters)
- `-> i32` - What the function gives back (return type)
- `return` - Sends a value back

### Functions Without Return Values

```veil
fn greet_user() {
    println("Welcome to our program!");
    println("We hope you enjoy using Veil!");
}

fn main() {
    greet_user();
}
```

## Making Decisions with if/else

Your programs can make decisions based on different conditions:

```veil
fn main() {
    let temperature = 75;
    
    if temperature > 80 {
        println("It's hot outside!");
    } else if temperature < 60 {
        println("It's cold outside!");
    } else {
        println("Nice weather!");
    }
}
```

### Comparison Operators

| Operator | Meaning |
|----------|---------|
| `==` | Equal to |
| `!=` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

```veil
fn main() {
    let age = 18;
    
    if age >= 18 {
        println("You can vote!");
    } else {
        println("Too young to vote yet");
    }
}
```

## Repeating with while Loops

Sometimes you want to repeat code multiple times:

```veil
fn main() {
    let count = 1;
    
    while count <= 5 {
        println(`Count: {count}`);
        count = count + 1;
    }
    
    println("Done counting!");
}
```

This will print:
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Done counting!
```

### Loop Safety

Always make sure your loop will eventually stop:

```veil
fn main() {
    let number = 10;
    
    while number > 0 {
        println(`Countdown: {number}`);
        number = number - 1;  // This makes sure the loop stops!
    }
    
    println("Blast off! 🚀");
}
```

## Working with Text

Text (strings) are very common in programming:

```veil
import std/core;

fn main() {
    let message = "Programming is awesome!";
    let length = message.length();
    
    println(`Message: {message}`);
    println(`That message has {length} characters`);
}
```

### Combining Text

```veil
fn main() {
    let first_name = "John";
    let last_name = "Smith";
    let full_name = `{first_name} {last_name}`;
    
    println(`Full name: {full_name}`);
}
```

## Practice Exercises

Try building these small programs to practice:

### 1. Age Calculator
```veil
fn main() {
    let birth_year = 2000;
    let current_year = 2024;
    let age = current_year - birth_year;
    
    println(`You are {age} years old`);
}
```

### 2. Temperature Converter
```veil
fn celsius_to_fahrenheit(celsius: f64) -> f64 {
    return celsius * 9.0 / 5.0 + 32.0;
}

fn main() {
    let temp_celsius = 25.0;
    let temp_fahrenheit = celsius_to_fahrenheit(temp_celsius);
    
    println(`{temp_celsius}°C = {temp_fahrenheit}°F`);
}
```

### 3. Simple Counter
```veil
fn main() {
    let target = 10;
    let current = 0;
    
    while current < target {
        current = current + 1;
        println(`Step {current} of {target}`);
    }
    
    println("Finished!");
}
```

## Common Beginner Mistakes

### Forgetting to Change Loop Variables
```veil
fn main() {
    let count = 1;
    while count <= 5 {
        println(`Count: {count}`);
        // ❌ Forgot: count = count + 1;
    }
    // This will run forever!
}
```

### Using Wrong Quote Types
```veil
fn main() {
    let name = "Alex";
    println("Hello, {name}"); // ❌ Should use backticks
    println(`Hello, {name}`); // ✅ Correct
}
```

### Comparing vs Assigning
```veil
fn main() {
    let age = 18;
    if age = 18 {  // ❌ This assigns, not compares
        println("Eighteen!");
    }
    
    if age == 18 { // ✅ This compares
        println("Eighteen!");
    }
}
```

## What's Next?

Great job learning the basics! You now know:
- ✅ How to store information in variables
- ✅ How to create and use functions
- ✅ How to make decisions with if/else
- ✅ How to repeat code with loops
- ✅ How to work with text

Next, you can learn about:
- **Working with Lists** - Store multiple pieces of data
- **Organizing Projects** - Structure bigger programs
- **Using Libraries** - Take advantage of code others have written

Keep practicing with small programs - that's the best way to learn! 🎯
