function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === "string") {
        resolve("hello " + name);
      } else {
        reject("Greet expects a string!");
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof str === "string") {
        resolve(str.toUpperCase());
      } else {
        reject("Argument to uppercaser must be string");
      }
    }, 1000);
  });
}

// Above we have two functions that return promises.
// These are greet and uppercaser.
// Notice below how we chain these promises together. The
// Result of one is then passed to the next.
// When chained all of the promises have to resolve for success.
// If any of the promises reject then you end in the catch block.

// greet("Your name") // Returns a Promise
//   .then((str) => uppercaser(str)) // Upper case the results from greet() Returns a Promise
//   .then((str) => console.log(str)) // Log the results of uppercaser()
//   .catch((err) => console.log(err)); // Catches an error

// Challenges: get greet() to fail by passing a non string value
// What happens?
console.log("Failing version of greet()");
greet(1234)
  .then((str) => uppercaser(str))
  .then((str) => console.log(str))
  .catch((err) => console.log(err));

// There is a little delay as the promises reject and then I receive the error message from greet().

// Challenge: get uppercaser() to fail by passing a non string value
// What happens?
console.log("Failing version of uppercaser()");
uppercaser(1234)
  .then((str) => console.log(str))
  .catch((err) => console.log(err));

// There is a little delay as the promises reject and then I receive the error message from uppercaser().

console.log("Adjusted version of greet with failing uppercaser()");
greet("Your name")
  .then((str) => uppercaser(1234))
  .then((str) => console.log(str))
  .catch((err) => console.log(err));

// In this instance, I don't get the greet error, I only get the uppercaser error.

// Challenge: Notice there is only a single .catch() at the end.
// Explain the behavior?

// The catch only needs to be called the first time a promise rejects, so it will only catch the first error. When greet is successful, it will then call uppercaser, which will fail, and the error message from uppercaser will be displayed.
