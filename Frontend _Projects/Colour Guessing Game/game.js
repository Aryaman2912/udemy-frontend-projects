var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#display");
var body = document.querySelector("body");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColors = document.querySelector("#newColors");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var bottom = document.querySelector(".bottom");

colorDisplay.textContent = pickedColor;
changeColors();

easy.addEventListener("click",function(){
    numSquares = 3;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    bottom.style.display  = "none";
    buttons();
})

hard.addEventListener("click",function(){
    numSquares = 6;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    bottom.style.display = "block";
    buttons();
})

newColors.addEventListener("click",function(){
    numSquares = 6;
    newColors.textContent = "New Colours";
    easy.classList.remove("selected");
    hard.classList.add("selected");
    bottom.style.display = "block";
    buttons();
});

function buttons(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    changeColors();
    h1.style.backgroundColor = "steelblue";
    message.textContent = '';
}

function changeColors(){
    for(var i = 0;i < squares.length;i++){
        //Setting initial color
        squares[i].style.backgroundColor = colors[i];
    
        //Add event listener
        squares[i].addEventListener("click",function(){
            //If wrong answer is picked
            if(this.style.backgroundColor !== pickedColor){
                //Change color of square to background color
                this.style.backgroundColor = body.style.backgroundColor;
                message.textContent = "Try again!";
            }
            //If correct answer is picked
            else if(this.style.backgroundColor === pickedColor){
                message.textContent = "Correct!";
                //Change color of all squares to picked color
                squares.forEach(function(div){
                    div.style.backgroundColor = pickedColor;
                });
                //Change h1 background
                h1.style.backgroundColor = pickedColor;
                newColors.textContent = "Play Again?"
            }
        });
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //arr holds the colors
    var arr = [];
    //generating random colors and pushing to arr
    for(var i = 0; i < num; i++){
        arr.push(randomColors());
    }
    //the array is returned to the colors array
    return arr;
} 

function randomColors(){
    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)

    var col = "rgb(" + r + ", " + g + ", " + b + ")";
    
    return col;
}

