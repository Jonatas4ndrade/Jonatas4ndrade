let lastTimeFlag = 0; //Required to end recursion at Unwriter
var currentChar = 0;
var txt1= "Can\'t help yourself when it comes to testing?";
var txt2 = "Nor can I. That's how robust systems are made, after all."
var speed = 50;

function typeWriter(text, text2) {
  if (currentChar < text.length) {
    document.querySelector('#testDriven').textContent += text.charAt(currentChar);
    currentChar++;
	//recursive call after.05 secs
    setTimeout(()=> {typeWriter(text,text2)}, speed); 
  } else {
	//Text printed. Starts deleting after 1 second.
    setTimeout(()=> {Unwriter(text, text2)}, 1000);
  }
}
function Unwriter(text, next = "") {
  if (text.length > 0) {
  	text = text.slice(0,-1);
    document.querySelector('#testDriven').textContent += text.charAt(currentChar);
    setTimeout(()=> {Unwriter(text)}, speed);
  } else {
	lastTimeFlag += 1;
    	if (lastTimeFlag == 1){
        currentChar = 0;
        setTimeout(()=> {typeWriter(txt2)}, 750)
        }
  }
}
