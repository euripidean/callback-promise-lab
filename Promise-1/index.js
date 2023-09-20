// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(">>> Success! <<<");
    // resolve(">>> Success2! <<<");
    reject("--- Oops ---");
    reject("--- Oops2 ---");
  }, 2000);
});

p.then((message) => {
  console.log("Promise resolved! 😀");
  console.log(message);
}).catch((err) => {
  console.log("Promise rejected! 😞");
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// First the Promise is rejected (emoji message) and then the timeout is called and you receive the oops message.

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// The same as above, the Promise is rejected (emoji message) and then the timeout is called and you receive the oops message.

// **3)** Does the order matter you call resolve and reject matter? Test this.
// If I call resolve first, I get the the success message from the then and then the success message from the timeout.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// If I call these more than once, only the first one is executed.
