var square = document.querySelectorAll(".square");
var display = document.querySelector("#cw")
var bgc = document.querySelector(".head");
var ques = document.querySelector("#color");
var retry = document.querySelector("#retry");
var numSquares = 6;
var mode = document.querySelectorAll("#mode");
var color = [];

init();

function init() {
    setSquares(numSquares);
    setMode();
}

function pickRandom(color, numSquares) {
    var i = Math.floor(Math.random() * numSquares);
    //console.log(i)
    return color[i];
}

function assign() {
    var r,g,b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}

function setSquares(numSquares){
    color = []
    for(var i=0; i<numSquares; i++){
        color.push(assign())
    }
    console.log(color)
    for(var i=0; i<square.length; i++){
        if(color[i]){
            square[i].style.display = "block"
            square[i].style.backgroundColor = color[i];
        }
        else{
            square[i].style.display = "none"
        }
    }
    //console.log(color)
    ans = pickRandom(color, numSquares);
    //console.log(ans)
    ques.textContent = ans.toUpperCase();
    //console.log(ans)
    for(var i = 0; i<numSquares; i++){
        //console.log(square[i]);
        square[i].style.backgroundColor = color[i];
        square[i].addEventListener("click", function(){
            var guess = this.style.backgroundColor;
            console.log(guess);
            if(ans === guess){
                display.textContent="Correct Answer!!!"
                for(var j=0; j<numSquares; j++){
                    square[j].style.backgroundColor = ans
                    bgc.style.backgroundColor = ans
                }
                retry.innerHTML = "Play Again?"
            }
            else{
                display.textContent="Try Again!"
                this.style.backgroundColor = document.body.style.backgroundColor;
            }
        })
    }
}

function setMode() {
    for(var i=0; i<mode.length; i++){
        mode[i].addEventListener("click",function(){
            for(var j=0; j<mode.length; j++){
                mode[j].classList.remove("selected");
            }
            this.classList.add("selected");
            this.textContent == "Easy" ? numSquares = 3 : numSquares = 6;
            bgc.style.backgroundColor = "teal";
            setSquares(numSquares);
        })
    } 
}
