---
sidebar_position: 3
---

# Your First Program

Let's write your very first Veil program together!

## Hello, World!

This is the traditional first program every programmer writes:

**Step 1:** Create a new file called `hello.ve`

**Step 2:** Type this code:

```veil
fn main() {
    println("Hello, World!");
}
```

**Step 3:** Run it:

```shell
ve hello.ve
```

🎉 **Congratulations!** You just wrote and ran your first Veil program!

## What Just Happened?

Let's break down what you just did:

- `fn main()` - This is where your program starts. Every Veil program needs this function
- `println("Hello, World!")` - This prints text to the screen
- Veil automatically compiled your code to super-fast C code and ran it

## Try Some Variations

Now let's experiment! Try changing the program:

### Print Your Name

```veil
fn main() {
    println("Hello, I'm Alex!");
}
```

### Print Multiple Lines

```veil
fn main() {
    println("Hello, World!");
    println("This is my first Veil program!");
    println("Programming is fun!");
}
```

### Use Variables

```veil
fn main() {
    let name = "Alex";
    println(`Hello, my name is {name}!`);
}
```

**New things here:**
- `let name = "Alex"` creates a variable to store text
- `` `Hello, my name is {name}!` `` uses backticks and `{}` to put the variable inside text

## Make it Interactive

Want to make your program ask for your name? Try this:

```veil
import std/io;

fn main() {
    println("What's your name?");
    let name = read_line();
    println(`Nice to meet you, {name}!`);
}
```

**What's new:**
- `import std/io` gives us access to input/output functions
- `read_line()` waits for you to type something and press Enter

## Common Mistakes (Don't Worry!)

If something goes wrong, here are the most common mistakes:

### Missing Semicolon
```veil
fn main() {
    println("Hello")  // ❌ Missing semicolon
}
```

Should be:
```veil
fn main() {
    println("Hello"); // ✅ Has semicolon
}
```

### Wrong Quotes for Variables
```veil
fn main() {
    let name = "Alex";
    println("Hello, {name}"); // ❌ Wrong quotes
}
```

Should be:
```veil
fn main() {
    let name = "Alex";
    println(`Hello, {name}`); // ✅ Backticks for variables
}
```

### Typos in Function Names
```veil
fn main() {
    printline("Hello"); // ❌ Wrong function name
}
```

Should be:
```veil
fn main() {
    println("Hello"); // ✅ Correct function name
}
```

## What's Next?

Great job! You've written your first Veil program. Now you're ready to learn about:

- **Variables and Data** - Store and work with different types of information
- **Functions** - Create reusable pieces of code
- **Making Decisions** - Use if/else to make your program smart
- **Projects** - Organize bigger programs

Keep experimenting and have fun! 🚀
