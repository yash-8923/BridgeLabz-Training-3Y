// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("Script end");

// Synchronous statements run first.
// Promise.then() is a microtask, so it runs after the current script finishes.
// setTimeout() schedules a macrotask, which runs after the microtask queue is clear.
