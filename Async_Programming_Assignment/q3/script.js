function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let apiFailed = Math.random() < 0.5;

      if (apiFailed) {
        reject(new Error("Bug API request failed."));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.log("Bugs received:");
    console.table(bugs);
  })
  .catch(error => {
    console.log("Unable to fetch bugs:", error.message);
  });
