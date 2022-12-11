let list = "";
const textField = document.querySelector("#textField");
const sectionTag = document.querySelector("section");
const form = document.getElementById("todoList");

Array.from(form.elements).forEach((element) => {
  list = textField.value;
  let template = `
    <li>
        <p>${list}</p>
    </li>`;
  sectionTag.innerHTML = template;
});

document
  .querySelector("#todoList")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    list = textField.value;
    let template = `
    <li>
        <p>${list}</p>
    </li>`;
    sectionTag.innerHTML = template;
  });

/**document.querySelector("#todoListForm").addEventListener("submit", function(event) {
    console.log("test")
    event.preventDefault();
    
}) **/
