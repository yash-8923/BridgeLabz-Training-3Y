// Part 1: Nested callbacks (callback hell demonstration).
function runCallbackPipeline() {
  console.log("Callback pipeline started");

  setTimeout(() => {
    console.log("Design completed");

    setTimeout(() => {
      console.log("Build completed");

      setTimeout(() => {
        console.log("Test completed");

        setTimeout(() => {
          console.log("Deploy completed");

          setTimeout(() => {
            console.log("Celebrate!");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// Part 2: The same pipeline using async/await.
function runStage(stageName) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(stageName + " completed");
      resolve();
    }, 1000);
  });
}

async function runAsyncPipeline() {
  console.log("Async/await pipeline started");
  await runStage("Design");
  await runStage("Build");
  await runStage("Test");
  await runStage("Deploy");
  await runStage("Celebrate");
}

// Run both demonstrations one after another so their output is easy to read.
runCallbackPipeline();

setTimeout(() => {
  console.log("\nStarting async/await version");
  runAsyncPipeline();
}, 5500);

// async/await makes asynchronous steps read from top to bottom.
// It avoids deeply nested callbacks and makes error handling with try/catch easier.
