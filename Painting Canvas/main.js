//declaring variables
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const menu = document.querySelector(".menu");
const btnClear = document.querySelector("#clear");
const form = document.querySelector("#clr");
const formShapes = document.querySelector("#shapesForm");
const colorPicker = document.querySelector("#colorPicker");
const brushSize = document.querySelector("#brushSize");
const info = document.querySelector(".info");


let paint = false;   
canvas.height = window.innerHeight/2;
canvas.width = window.innerWidth/2;

info.innerHTML = "Canvas Width: " + canvas.width + " " +  
                 "Canvas Height: " + canvas.height;

const changeColor = () => ctx.strokeStyle = colorPicker.value;

/*function rect(e) {
    paint = true;

    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.rect(xStart, yStart, xFin, yFin);
    ctx.stroke();
  
}*/

function startPos(e) {
    paint = true;
    changeColor();
    draw(e);
}

function finishPos() {
    paint = false;
    ctx.beginPath();
}

function draw(e) {
    if(!paint) return;
    ctx.lineWidth = brushSize.value;
    ctx.lineCap = "round";
        
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

//event listeners
canvas.addEventListener("mousedown", startPos);
canvas.addEventListener("mouseup", finishPos);
canvas.addEventListener("mousemove", draw);
btnClear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});