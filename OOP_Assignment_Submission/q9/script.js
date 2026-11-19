class FitnessAnalytics {
  constructor(workoutData) {
    this.workoutData = workoutData;
  }

  checkData() {
    if (this.workoutData.length === 0) {
      throw new Error("Workout dataset is empty.");
    }
  }

  getActiveUsers() {
    this.checkData();
    return this.workoutData.filter(person => person.steps > 7000);
  }

  getAverageCalories() {
    this.checkData();
    let total = this.workoutData.reduce((sum, person) => sum + person.calories, 0);
    return total / this.workoutData.length;
  }

  getUserSummary() {
    this.checkData();
    return this.workoutData.map(person =>
      person.user + " walked " + person.steps + " steps and burned " + person.calories + " calories."
    );
  }
}

let workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

let output = document.getElementById("output");
let analytics = new FitnessAnalytics(workoutData);

output.innerHTML += "<h3>Active users (more than 7000 steps)</h3>";
analytics.getActiveUsers().forEach(person => {
  output.innerHTML += `<p>${person.user} - ${person.steps} steps</p>`;
});

output.innerHTML += `<h3>Average calories: ${analytics.getAverageCalories()}</h3>`;
output.innerHTML += "<h3>User summaries</h3>";
analytics.getUserSummary().forEach(summary => {
  output.innerHTML += `<p>${summary}</p>`;
});

try {
  let emptyAnalytics = new FitnessAnalytics([]);
  emptyAnalytics.getActiveUsers();
} catch (error) {
  output.innerHTML += `<p>Error handled: ${error.message}</p>`;
}
