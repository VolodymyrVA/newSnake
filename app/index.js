import Snake from './Snake'
import Canvas from './Canvas'
import Paint from './Paint'

let snake = new Snake();
let paint = new Paint();
let canvas = new Canvas();

let w = canvas.w;
let h = canvas.h;
let snakeSize = snake.snakeSize;
let direction;
let score;
let tail;
let game;



function init() {
    direction = 'right';
    snake.createSnake();
    snake.createFood();
    score = 0;
    if(typeof game !== "undefined"){
        clearInterval(game);
    }
    game = setInterval(paintContent, 60);

}
init();


function paintContent () {
    paint.paint(0, 0, w, h, "orange", "black");

    let cX = snake.snakeBody[0].x;
    let cY = snake.snakeBody[0].y;

    if (direction == 'top') {
        cY--;
    } else if (direction == 'down') {
        cY++
    } else if (direction == 'right') {
        cX++
    } else if (direction == 'left') {
        cX--
    }

    if(cX == -1 || cX == w/snakeSize || cY == -1 || cY == w/snakeSize || snake.snakeCrush(cX, cY, snake.snakeBody)){
        init();
        return
    }

    if (snake.food.x == cX && snake.food.y == cY) {
        tail = {x: snake.food.x, y: snake.food.y};
        score++;
        snake.createFood();
    } else {
        tail = snake.snakeBody.pop();
        tail.x = cX;
        tail.y = cY;
    }

    snake.snakeBody.unshift(tail);


    paint.paintSnake(snake.snakeBody, snakeSize, snake.snakeColor.body, snake.snakeColor.border);
    paint.paintCell(snake.food.x, snake.food.y, snakeSize, snake.snakeFoodColor.body, snake.snakeFoodColor.border);
    paint.paintScore(score, "Impact");
}


document.addEventListener('keydown',function (e) {
    let key = e.which;
    if (key == '38' && direction != 'down') {
        direction = 'top'
    } else if (key == '40' && direction != 'top') {
        direction = 'down'
    } else if (key == '39' && direction != 'left') {
        direction = 'right'
    } else if (key == '37' && direction != 'right') {
        direction = 'left'
    }

});









