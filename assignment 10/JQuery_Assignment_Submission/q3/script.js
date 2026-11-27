// Q3 - Task Manager (jQuery AJAX + query parameters). Run JSON Server on port 3003.
const API_URL = "http://localhost:3003/tasks";

function loadTasks() {
  const filter = $("#filter").val();
  let params = {};
  if (filter === "completed") {
    params = { completed: true };   // GET /tasks?completed=true
  } else if (filter !== "all") {
    params = { priority: filter };  // GET /tasks?priority=High
  }

  $.ajax({ url: API_URL, method: "GET", data: params, dataType: "json" })
    .done(renderTasks)
    .fail(function () {
      $("#message").text("Error: could not load tasks.");
    });
}

function renderTasks(tasks) {
  const $list = $("#taskList").empty();
  if (tasks.length === 0) {
    $list.append($("<li>").addClass("muted").text("No tasks found."));
    return;
  }
  tasks.forEach(function (task) {
    const $li = $("<li>").addClass("card");
    const $check = $("<input>").attr("type", "checkbox").prop("checked", task.completed);
    const $title = $("<span>").text(task.title).toggleClass("done", task.completed);
    const $prio = $("<span>").addClass("muted").text("(" + task.priority + ")");

    $check.on("change", function () {
      const newValue = $check.prop("checked");
      $("#message").text("");
      $.ajax({
        url: API_URL + "/" + task.id,
        method: "PATCH",
        contentType: "application/json",
        data: JSON.stringify({ completed: newValue })
      }).done(function () {
        task.completed = newValue;
        $title.toggleClass("done", newValue);
        // Reload the list so it matches the selected filter
        loadTasks();
      }).fail(function () {
        $check.prop("checked", !newValue); // revert
        $("#message").text("Error: could not update the task.");
      });
    });

    $li.append($check, $title, $prio);
    $list.append($li);
  });
}

$(function () {
  $("#filter").on("change", loadTasks);
  loadTasks();
});
