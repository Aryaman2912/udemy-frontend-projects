var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var ip = document.querySelector("input");
var breset = document.querySelector("#reset");
var scoreDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var score = 5;

p1.addEventListener("click",function() {
	if(!gameOver){
		p1score++;
		s1.textContent = p1score;
		if(p1score === score){
			s1.classList.add("winner")
			gameOver = true;

		}
	}
});

p2.addEventListener("click",function() {
	if(!gameOver){
		p2score++;
		s2.textContent = p2score;
		if(p2score === score){
			s2.classList.add("winner")
			gameOver = true;
		}
	}
});

breset.addEventListener("click",function(){
	reset();
});

ip.addEventListener("change",function(){
	scoreDisplay.textContent = this.value;
	score = Number(this.value);
	reset();
})

function reset(){
	p1score = 0;
	p2score = 0;
	s1.textContent = p1score;
	s2.textContent = p2score;
	s1.classList.remove("winner")
	s2.classList.remove("winner")
	// ip.value = 0;
	// scoreDisplay.textContent = 5;
	val = 5;
	gameOver = false;
}
