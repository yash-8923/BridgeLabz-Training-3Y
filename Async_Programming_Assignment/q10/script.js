function deliveryStep(stepMessage) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 1000;

    setTimeout(() => {
      // Each step has a small chance of failing.
      if (Math.random() < 0.15) {
        reject(new Error(stepMessage + " failed"));
      } else {
        resolve(stepMessage);
      }
    }, delay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // await pauses this async function until the current step settles.
    // The next step starts only after the previous step succeeds.
    await deliveryStep("Step 1: Order taken").then(message => console.log(message));
    await deliveryStep("Step 2: Food prepared").then(message => console.log(message));
    await deliveryStep("Step 3: Package ready").then(message => console.log(message));
    await deliveryStep("Step 4: Out for delivery").then(message => console.log(message));
    await deliveryStep("Delivery completed!").then(message => console.log(message));
  } catch (error) {
    console.log("Pipeline failed!");
    console.log("Reason:", error.message);
  }
}

runPipeline();

// Promises represent work that will finish later.
// await keeps the steps in order without blocking the browser's main thread.
// If any step rejects, control moves to the catch block.
