var body = document.body;
var word= document.getElementById("word");
var wordBox = document.getElementById("wordBox");
var input = document.getElementById("input");
var btn_start = document.getElementById("start");
var btn_new = document.getElementById("new");
var speed_box = document.getElementById("settingBox");
var input_wpm = document.getElementById('input_wpm');


btn_start.addEventListener("click", startReading);
btn_new.addEventListener("click", reset);

var text;
var words;
var data;
var myInterval;
var speed;

function startReading(){
	text=input.textContent;
	var separators = [' ', '\n'];
	words = text.split(new RegExp(separators.join('|'),'g'));
	data = ["1","2","3"];
	
	speed = 60*1000/input_wpm.value ;

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
	
	body.style.backgroundColor = "rgb(232, 233, 236)";
	body.style.color = "white";
	
	input.style.display = "inline";
	btn_start.style.display = "inline";
	speed_box.style.display = "inline";
	btn_new.style.display = "none";
	word.textContent = "";
	

}
