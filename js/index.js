
const toDoList = document.getElementById("toDoList");


function checkboxChange() {
    const checkbox = event.target;
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.className = "done";
    } else {
        li.className = "";
    }
};

function createToDoForm() {
    event.preventDefault();
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = checkboxChange;
    const label = document.createElement("label");
    let toDoTitle = document.getElementById("toDoTitle");
    const toDoTitleValue = toDoTitle.value;
    if (toDoTitleValue === '') {
        document.getElementById("alert").innerHTML = "Please enter a valid To-Do item.";
        return;
    }
    label.innerHTML = toDoTitleValue;
    document.getElementById("toDoTitle").value = "";
    li.appendChild(checkbox);
    li.appendChild(label);
    toDoList.appendChild(li);
};

function filterDone() {
    const lis = toDoList.children;
    for (let li of lis) {
        if (li.className !== "done") {
            li.style.display = "none";
        } else {
            li.style.display = "";
        }
    }
};

function filterNotDone() {
    const lis = toDoList.children;
    for (let li of lis) {
        if (li.className === "done") {
            li.style.display = "none";
        } else {
            li.style.display = "";
        }
    }
};

function showAll() {
    const lis = toDoList.children;
    for (let li of lis) {
        li.style.display = "";
    }
};

function searchForm() {
    const searchValue = document.getElementById("searchValue");
    const searchTerm = searchValue.value.toLowerCase();
    const lis = toDoList.children;
    for (let li of lis) {
        let toDoTitle = li.children[1].innerHTML.toLowerCase();
        if (toDoTitle.indexOf(searchTerm) > -1) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    }
}
