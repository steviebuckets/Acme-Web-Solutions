var steve;
function preload() {
	steve = loadJSON("candidate.json");
}

// function draw(){
// 	background(0);
// 	text(candidate.name);
// }

// alert("hello welcome to my page");

// var candidate ={
// 	"name": "steve martin",
// 	"email": "steviebuckets33@gmail.com",
// }


// function display(){
// 	text(steve.name);
// }

var output = document.getElementById('output');
output.innerHTML = steve.name + "<br>" + steve.email;
