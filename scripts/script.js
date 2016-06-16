var body = document.body;
var word= document.getElementById("word");
var wordBox = document.getElementById("wordBox");
var input_text = document.getElementById("input_text");
var btn_start = document.getElementById("start");
var btn_new = document.getElementById("new");
var settingBox = document.getElementById("settingBox");
var input_wpm = document.getElementById('input_wpm');
var infoBox = document.getElementById("infoBox");

btn_start.addEventListener("click", startReading);
btn_new.addEventListener("click", reset);
//input_wpm.addEventListener("onkeypress",keyPress(event));

var text;
var words;
var data;
var myInterval;
var speed;
var i;
var stat = "waiting";

input_text.value = testContent;

function startReading(){
	text=input_text.value;
	var separators = [' ', '\n'];
	words = text.split(new RegExp(separators.join('|'),'g'));
	data = ["1","2","3"];
	
	speed = 60*1000/input_wpm.value ;

	body.style.backgroundColor = "white";
	body.style.color = "black";
	
	input_text.style.display = "none";
	btn_start.style.display = "none";
	settingBox.style.display = "none";
	infoBox.style.display = "none";
	btn_new.style.display = "inline";

	i=0;
	data.push.apply(data,words);
	showWords();
}

function showWords(){
	stat = "playing"
	
	myInterval =
	setInterval(function()
	{
		if(i<data.length){
			changeWord(i);
			i++;
		}else{
			clearInterval(myInterval);
			stat = "waiting";
		}

	},speed);
}

function reset(){
	clearInterval(myInterval);
	

	body.style.backgroundColor = "rgb(232, 233, 236)";
	//body.style.color = "white";
	
	input_text.style.display = "inline";
	btn_start.style.display = "inline";
	settingBox.style.display = "inline";
	infoBox.style.display = "inline";
	btn_new.style.display = "none";
	word.textContent = "";
	

}

function changeWord(index) {
	word.textContent = data[index];
	wordBox.style.marginLeft=-wordBox.clientWidth/2+"px";
	wordBox.style.marginTop=-wordBox.clientHeight/2+"px";
}

function keyDown(event) {
	var key = event.which || event.keyCode;
	if(btn_new.style.display == "inline"){
		if (key == 32) {  // 32 is the space key
			if(stat=="playing"){
				stat="waiting";
				clearInterval(myInterval);
			}else{
				showWords();
			}
			
		}
		else if (key == 37) {  // 37 is the left arrow key
			if(i>0 && stat=="waiting"){
				i--;
				changeWord(i);
			}

		}
		else if (key == 39) {  // 32 is the right arrow key
			if(i<data.length-1  && stat=="waiting"){
				i++;
				changeWord(i);
			}
		}
		
	}
	

}

