// Builds a form from an array of field objects
class FormBuilder {
  constructor(fields, container) {
    this.fields = fields;
    this.container = container;
  }

  // Create the HTML for all fields using innerHTML
  render() {
    let html = "<form id='dynamicForm'>";
    this.fields.forEach(function (field, index) {
      html += `<label>${field.label}</label>`;
      html += `<input type="${field.type}" id="field${index}">`;
    });
    html += "<button type='submit'>Submit</button></form>";
    this.container.innerHTML = html;

    // Listen for submit after the form exists
    const form = document.getElementById("dynamicForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = this.getFormData();
      console.log(data);
      document.getElementById("result").textContent = JSON.stringify(data, null, 2);
    });
  }

  // Return all entered values as an object like { Username: "abc" }
  getFormData() {
    const data = {};
    this.fields.forEach(function (field, index) {
      data[field.label] = document.getElementById("field" + index).value;
    });
    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" }
];

const builder = new FormBuilder(fields, document.getElementById("formArea"));
builder.render();
