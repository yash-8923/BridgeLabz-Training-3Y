console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// JavaScript finishes all synchronous code first.
// After the current call stack is empty, it runs queued microtasks.
// The event loop then takes the macrotask (setTimeout) from its queue.
