var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var ToDos = JSON.parse(localStorage.getItem("list_ToDos")) || [];

function renderToDos(){
	listElement.innerHTML =  "";

	for(ToDo of ToDos){
		var ToDoElement = document.createElement("li");
		var ToDoText = document.createTextNode(ToDo);

		var linkElement = document.createElement("a");
		linkElement.setAttribute("href","#");

		var pos = ToDos.lastIndexOf(ToDo);
		linkElement.setAttribute("onclick", "deleteToDo("+pos+")");

		var linkText = document.createTextNode("Excuir");

		linkElement.appendChild(linkText);

		ToDoElement.appendChild(ToDoText);
		ToDoElement.appendChild(linkElement);

		listElement.appendChild(ToDoElement);
			}
}

renderToDos();

function addToDo(){
	var ToDoText = inputElement.value;

	ToDos.push(ToDoText);
	inputElement.value = "";
	renderToDos();
	saveToStorage();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos){
	ToDos.splice(pos , 1);

	renderToDos();
	saveToStorage();
}

function saveToStorage(){
	localStorage.setItem("list_ToDos", JSON.stringify(ToDos));
}