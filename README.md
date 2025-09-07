Question  1 : What is the difference between var, let, and const?

answer   1 : The main differences between var, let, and const are :

          var: Function-scoped, can be redeclared and reassigned, hoisted.

          let: Block-scoped, can be reassigned but not redeclared.

           const: Block-scoped, cannot be reassigned or redeclared; value is constant. 



Question   2 : What is the difference between map(), forEach(), and filter()? 

answer     2 : forEach(): It is used to loop through each element of an array and perform an action, like logging or updating something. It does not                return a new array and is mainly used for side effects.

             map(): It creates a new array by applying a function to each element of the original array. Use it when you want to transform or modify                   elements without changing the original array.

             filter(): It creates a new array containing only the elements that pass a certain condition. Use it when you want to select specific                      elements based on a test. 


Question  3: What are arrow functions in ES6?

answer    3: Arrow functions in ES6 are a shorter syntax for writing functions.

            example : (a, b) => a + b 

 Question 4 :  How does destructuring assignment work in ES6? 

 answer   4 : Destructuring assignment in ES6 allows you to unpack values from arrays or objects into separate variables in a concise way.

            example array : 
                      const numbers = [1, 2, 3]
                          const [a, b] = numbers; output: a = 1, b = 2 

              example object : 
                       const person = { name: "Fuad", age: 25 };
                            const { name, age } = person; output: name = "Fuad", age = 25


Question  5  :  Explain template literals in ES6. How are they different from string concatenation?

answer    5  : Template literals in ES6 are a way to create strings using backticks ` instead of quotes. They allow embedded expressions and multi-line strings easily. 

                     example : const name = "Fuad";
                              const greeting = `Hello, ${name}!`; output : Hello, Fuad!


 :
           
