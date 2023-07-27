export class Snake {

    snake = [
        {x: 16, y: 15},
    ];

    currentDirection = 'right';
leftBtn=null
rightBtn=null
upBtn=null
downBtn=null
    context = null;
    positionsSize = null;
    positionsCount = null;

    constructor(context, positionsCount, positionsSize) {
        this.leftBtn=document.getElementById('left')
        this.rightBtn=document.getElementById('right')
        this.upBtn=document.getElementById('up')
        this.downBtn=document.getElementById('down')
        this.context = context;
        this.positionsSize = positionsSize;
        this.positionsCount = positionsCount;
this.addButtonHandler()
        this.addKeyboardHandler();
    }
    
    addButtonHandler(){
        this.leftBtn.onclick=()=>{
            if (this.currentDirection!='right'){
                this.currentDirection = 'left';
                console.log(this.currentDirection);
            }
        }
        this.rightBtn.onclick=()=>{
            if (this.currentDirection!='left'){
                this.currentDirection = 'right';
                console.log(this.currentDirection);
            }
        }
        this.upBtn.onclick=()=>{
            if (this.currentDirection!='down'){
                this.currentDirection = 'up';
                console.log(this.currentDirection);
            }
        }
        this.downBtn.onclick=()=>{
            if (this.currentDirection!='up'){
                this.currentDirection = 'down';
                console.log(this.currentDirection);
            }
        }
    }

    addKeyboardHandler() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft' && this.currentDirection != 'right') {
                this.currentDirection = 'left';
            } else if (event.key === 'ArrowRight' && this.currentDirection != 'left') {
                this.currentDirection = 'right';
            } else if (event.key === 'ArrowUp' && this.currentDirection != 'down') {
                this.currentDirection = 'up';
            } else if (event.key === 'ArrowDown' && this.currentDirection != 'up') {
                this.currentDirection = 'down';
            }
        });
    }

    showSnake(foodPosition) {
        let result = {
            gotFood: false,
            collision: false
        };

        for (let i = 0; i < this.snake.length; i++) {
            this.context.fillStyle = ' #003554';
            this.context.beginPath();
            this.context.fillRect(this.snake[i].x * this.positionsSize - this.positionsSize, this.snake[i].y * this.positionsSize - this.positionsSize, this.positionsSize, this.positionsSize);
        }

        let newHeadPosition = {
            x: this.snake[0].x,
            y: this.snake[0].y
        };

        if (foodPosition && foodPosition.x === newHeadPosition.x && foodPosition.y === newHeadPosition.y) {
            result.gotFood = true;
        } else {
            this.snake.pop();
        }


        if (this.currentDirection === 'left') {
            if (newHeadPosition.x === 1) {
                newHeadPosition.x = this.positionsCount;
            } else {
                newHeadPosition.x -= 1;
            }
        } else if (this.currentDirection === 'right') {
            if (newHeadPosition.x === this.positionsCount) {
                newHeadPosition.x = 1;
            } else {
                newHeadPosition.x += 1;
            }

        } else if (this.currentDirection === 'up') {
            if (newHeadPosition.y === 1) {
                newHeadPosition.y = this.positionsCount;
            } else {
                newHeadPosition.y -= 1;
            }

        } else if (this.currentDirection === 'down') {
            if (newHeadPosition.y === this.positionsCount) {
                newHeadPosition.y = 1;
            } else {
                newHeadPosition.y += 1;
            }
        }

        if (!this.checkNewHeadPositionForCollision(newHeadPosition)){
            this.snake.unshift(newHeadPosition);
        }else{
            result.collision=true
        }

        return result;
    }

    checkNewHeadPositionForCollision(newHeadPosition) {
        for (let i = 0; i < this.snake.length; i++) {
            if (newHeadPosition.x === this.snake[i].x && newHeadPosition.y === this.snake[i].y) {
                return true;
            }
        }
        return false;
    }
}