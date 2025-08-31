---
sidebar_position: 5
---

import InteractiveExercise from '@site/src/components/InteractiveExercise';

# Interactive Exercises

Ready to test your Veil skills? Try these hands-on exercises where you write real code and get instant feedback!

## Exercise 1: Hello, World!

Your first programming challenge! Write a Veil program that prints "Hello, World!" to the screen.

<InteractiveExercise
  title="Hello, World!"
  description="Write a program that prints 'Hello, World!' to the console. This is the traditional first program every programmer writes!"
  startingCode={`fn main() {
    // Write your code here
    
}`}
  testCases={[
    {
      expectedOutput: ["Hello, World!"],
      description: "Program should print 'Hello, World!'"
    },
    {
      expectedOutput: ["Hello, World!"],
      description: "Program should have a main function"
    }
  ]}
  hints={[
    "You need to use the println() function to print text",
    "Don't forget the quotes around your text: \"Hello, World!\"",
    "Make sure your code is inside the main() function"
  ]}
/>

## Exercise 2: Personal Greeting

Now let's make it more personal! Create a program that prints a greeting with your name.

<InteractiveExercise
  title="Personal Greeting"
  description="Write a program that stores your name in a variable and prints a personalized greeting."
  startingCode={`fn main() {
    // Create a variable with your name
    
    // Print a greeting using your name
    
}`}
  testCases={[
    {
      expectedOutput: ["Hello, my name is Alex!"],
      description: "Should use a variable to store a name"
    },
    {
      expectedOutput: ["Hello, my name is Alex!"],
      description: "Should use string interpolation with backticks"
    }
  ]}
  hints={[
    "Create a variable with: let name = \"YourName\";",
    "Use backticks and {} for string interpolation: `Hello, my name is {name}!`",
    "Remember to use println() to print the result"
  ]}
/>

## Exercise 3: Simple Math

Let's do some calculations! Write a program that adds two numbers and shows the result.

<InteractiveExercise
  title="Simple Addition"
  description="Create a program that adds two numbers together and displays the result."
  startingCode={`fn main() {
    // Create two number variables
    
    // Add them together
    
    // Print the result
    
}`}
  testCases={[
    {
      expectedOutput: ["5 + 3 = 8"],
      description: "Should add two numbers and show the calculation"
    },
    {
      expectedOutput: ["5 + 3 = 8"],
      description: "Should use variables to store the numbers"
    }
  ]}
  hints={[
    "Create variables: let a = 5; let b = 3;",
    "Add them: let result = a + b;",
    "Print with: println(`{a} + {b} = {result}`);"
  ]}
/>

## Exercise 4: Temperature Converter

Time for something more practical! Write a function that converts Celsius to Fahrenheit.

<InteractiveExercise
  title="Temperature Converter"
  description="Create a function that converts temperature from Celsius to Fahrenheit, then use it to convert 25°C."
  startingCode={`fn celsius_to_fahrenheit(celsius: f64) -> f64 {
    // Write the conversion formula here
    
}

fn main() {
    // Convert 25 degrees Celsius
    
    // Print the result
    
}`}
  testCases={[
    {
      expectedOutput: ["25°C = 77°F"],
      description: "Should convert 25°C to 77°F"
    },
    {
      expectedOutput: ["25°C = 77°F"],
      description: "Should use the celsius_to_fahrenheit function"
    }
  ]}
  hints={[
    "The formula is: (celsius * 9.0 / 5.0) + 32.0",
    "Return the result with: return formula_result;",
    "Call the function: let fahrenheit = celsius_to_fahrenheit(25.0);"
  ]}
/>

## Exercise 5: Counting Loop

Let's practice loops! Write a program that counts from 1 to 5.

<InteractiveExercise
  title="Counting Loop"
  description="Use a while loop to count from 1 to 5, printing each number."
  startingCode={`fn main() {
    // Create a counter variable
    
    // Write a while loop that counts from 1 to 5
    
}`}
  testCases={[
    {
      expectedOutput: ["Count: 1", "Count: 2", "Count: 3", "Count: 4", "Count: 5"],
      description: "Should print numbers 1 through 5"
    },
    {
      expectedOutput: ["Count: 1", "Count: 2", "Count: 3", "Count: 4", "Count: 5"],
      description: "Should use a while loop"
    }
  ]}
  hints={[
    "Start with: let count = 1;",
    "Use: while count <= 5 { ... }",
    "Don't forget to increment: count = count + 1;"
  ]}
/>

## Exercise 6: Age Checker

Let's practice if/else statements! Write a program that checks if someone can vote.

<InteractiveExercise
  title="Voting Age Checker"
  description="Write a program that checks if a person with age 20 is old enough to vote (18 or older)."
  startingCode={`fn main() {
    let age = 20;
    
    // Check if age is 18 or older
    
}`}
  testCases={[
    {
      expectedOutput: ["You can vote!"],
      description: "Should check if age 20 can vote"
    },
    {
      expectedOutput: ["You can vote!"],
      description: "Should use if/else statement"
    }
  ]}
  hints={[
    "Use: if age >= 18 { ... }",
    "Print different messages for can vote vs. cannot vote",
    "Remember to use else for the alternative case"
  ]}
/>

## Tips for Success

### 🎯 How to Use These Exercises

1. **Read the description carefully** - understand what you need to build
2. **Start with the hints** if you're stuck - they guide you step by step
3. **Test your code frequently** - click "Check Solution" to see if it works
4. **Don't worry about mistakes** - they're part of learning!

### 🚀 After You Complete All Exercises

- Try modifying the exercises to do something different
- Combine concepts from multiple exercises
- Create your own challenges
- Share your solutions with others

### 🤔 If You Get Stuck

- Use the hints - they're there to help!
- Check your syntax carefully (quotes, semicolons, brackets)
- Make sure your variable names match
- Remember that Veil is case-sensitive

Happy coding! Each exercise builds on the previous ones, so take your time and enjoy the process of learning. �
