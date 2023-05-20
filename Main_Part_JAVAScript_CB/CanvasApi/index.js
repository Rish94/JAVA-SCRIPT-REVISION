const canvas = document.getElementById("canvas");
const pen = canvas.getContext('2d');

pen.fillStyle = 'red';

// pen.fillRect(50,50,90,90);


let init_x = 50;
let init_y = 50;


//this is going to initialize the game
function init(){
    pen.fillRect(init_x,init_y,50,50);

}

//this is going to update the properties
function update(){
    
    init_x +=50;

}

//Draw some thing on to the canvas

function draw(){
    pen.clearRect(0,0,1200,735);
    pen.fillRect(init_x,init_y,50,50);
}

//game Loop
function gameLoop(){
    console.log("game Loop")
    update();
    draw();
}

init();
const id = setInterval(gameLoop,250); //slow fast using this interwal

