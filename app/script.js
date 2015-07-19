var body = document.body;
var word= document.getElementById("word");
var wordBox = document.getElementById("wordBox");
var input = document.getElementById("input");
var btn_start = document.getElementById("start");
var btn_new = document.getElementById("new");
var speed_box = document.getElementById("speedBox");
var radios = document.getElementsByName('speed');


btn_start.addEventListener("click", startReading);
btn_new.addEventListener("click", reset);

var text;
var words;
var data;
var myInterval;
var speed;

function startReading(){
	text=input.textContent;
	words = text.split(" ");
	data = ["1","2","3"];
	
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
			speed = radios[i].value;
			console.log(speed);
			break;
		}
	}

	body.style.backgroundColor = "white";
	body.style.color = "black";
	
	input.style.display = "none";
	btn_start.style.display = "none";
	speed_box.style.display = "none";
	btn_new.style.display = "inline";

	showWords();
}

function showWords(){
	var i=0;
	data.push.apply(data,words);

	myInterval =
	setInterval(function()
{
	if(i<data.length){
		word.textContent = data[i];
		wordBox.style.marginLeft=-wordBox.clientWidth/2+"px";
		wordBox.style.marginTop=-wordBox.clientHeight/2+"px";
		i++;
	}else{
		clearInterval(myInterval);
	}

},speed);
}

function reset(){
	clearInterval(myInterval);
	
	body.style.backgroundColor = "black";
	body.style.color = "white";
	
	input.style.display = "inline";
	btn_start.style.display = "inline";
	speed_box.style.display = "inline";
	btn_new.style.display = "none";
	word.textContent = "";
	

}
