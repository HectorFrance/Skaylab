var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var ToDos = [
   "Fazer café",
   "Estudar JavaScript",
   "Acessar Comunidade RocketSeat"
];

function renderToDos(){
	for(ToDo of ToDos){
		var ToDoElement = document.createElement("li");
		var ToDoText = document.createTextNode(ToDo);

		ToDoElement.appendChild(ToDoText);
		listElement.appendChild(ToDoElement);
			}
}
renderToDos();