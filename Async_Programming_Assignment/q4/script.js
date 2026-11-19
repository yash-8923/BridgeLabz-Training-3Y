function contactServer(serverName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(serverName + " failed to respond."));
      } else {
        resolve(serverName + " responded.");
      }
    }, delay);
  });
}

// Promise.all waits for both servers. It rejects if either server fails.
Promise.all([
  contactServer("Server A", 2000),
  contactServer("Server B", 3000)
])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(error => console.log("Deployment error:", error.message));

// Promise.race settles as soon as the first server promise settles.
Promise.race([
  contactServer("Server A", 2000),
  contactServer("Server B", 3000)
])
  .then(response => console.log("Fastest response:", response))
  .catch(error => console.log("Fastest response failed:", error.message));
