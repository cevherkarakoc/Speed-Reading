var word=document.getElementById("word");
var wordBox = document.getElementById("wordBox");
var input = document.getElementById("input");
var btn_start = document.getElementById("start");
var btn_new = document.getElementById("new");

btn_start.addEventListener("click", startReading);
btn_new.addEventListener("click", reset);

var text;
var words;
var data=["1","2","3"];
var myInterval;

function startReading(){
	text=input.textContent;
	words = text.split(" ");

	input.style.display = "none";
	btn_start.style.display = "none";
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

},250);
}

function reset(){
	clearInterval(myInterval);
	input.style.display = "inline";
	btn_start.style.display = "inline";
	btn_new.style.display = "none";
	word.textContent = "";

}
