const canvas = document.getElementById("canvas");
const pen = canvas.getContext('2d');

pen.fillStyle = 'yellow';
let cellsize = 67;

const w = 1200;
const h = 735;

let food = null;
let score = 0;



// let gameover = false;


//make initial snkae
const snake = {

    init_len : 5,
    direction : 'right',
    cells:[],

    createSnake: function (){

        // push krrahe he array me index [1,0],[2,0],[3,0],[4,0],[5,0]

        for(let i=0;i<this.init_len;i++){
            this.cells.push({
                x:i,
                y:0
            });

        }
    },

    drawSnake:function(){

        //index ko cell size se multiply krke print krwa rahe he

        for(let cell of this.cells){
            pen.fillRect(cell.x*cellsize,cell.y*cellsize,cellsize-2,cellsize-2);
        }
    },



     
    updateSnake: function(){


        //sbse phela snake ke face ke index (get value)
        const headx = this.cells[this.cells.length-1].x;
        const heady = this.cells[this.cells.length-1].y;

        let nextx;
        let nexty;

        if(headx===food.x && heady===food.y){
            food = getrandomFood();
            score = score + 1;
        }else{
            this.cells.shift();
        }

        if(this.direction==='down'){
            nextx = headx;
            nexty = heady + 1;

            if(nexty*cellsize >= h){
                pen.fillText('Game over',100,50);
                clearInterval(id);
            }

        }else if(this.direction==='up'){
            nextx = headx;
            nexty = heady - 1;

            if(nexty*cellsize < 0){
                pen.fillText('Game over',100,50);
                clearInterval(id);
            }


        }else if(this.direction==='left'){
            nextx = headx -1 ;
            nexty = heady;

            if(nextx*cellsize < 0){
                pen.fillText('Game over',100,50);
                clearInterval(id);
            }


        }else  if(this.direction==='right'){
            nextx = headx + 1;
            nexty = heady;

            if(nextx*cellsize >= w){
                pen.fillText('Game over',100,50);
                clearInterval(id);
            }

        }

        // this.cells.shift(); // remove 0 index cell

        // add new cells att end 
        this.cells.push({
            x:nextx,
            y:nexty
        })


    }



}




//this is going to initialize the game
function init(){
   snake.createSnake();

   food = getrandomFood();

   function keyPressed(e){
    
    if(e.key=== 'ArrowDown'){
        snake.direction = 'down';
    }
    else if(e.key=== 'ArrowLeft'){
        snake.direction = 'left';
    }
    else if(e.key=== 'ArrowUp'){
        snake.direction = 'up';
    }else if(e.key=== 'ArrowRight'){
        snake.direction = 'right';
    }

    console.log(snake.direction);
   }



   document.addEventListener('keydown',keyPressed);

}

// console.log("hbg")

//this is going to update the properties
function update(){

    // if(gameover === true){
        
    // }
    
   snake.updateSnake();

}

//Draw some thing on to the canvas

function draw(){
    
    pen.clearRect(0,0,w,h);
    pen.font = '50px sans-serif'
    pen.fillText(`Score : ${score}`,100,100)
    pen.fillStyle = 'lightblue'
    pen.fillRect(food.x*cellsize,food.y*cellsize,cellsize,cellsize)
    pen.fillStyle = 'yellow';
    snake.drawSnake();
}

//game Loop
function gameLoop(){
    draw();
    update();
    
}


function getrandomFood(){

    const foodx = Math.round(Math.random()*(w-cellsize)/cellsize);
    const foody = Math.round(Math.random()*(h-cellsize)/cellsize);

    food = {
        x:foodx,
        y:foody,
    }

    return food;
}

init();
const id = setInterval(gameLoop,250); //slow fast using this interwal

