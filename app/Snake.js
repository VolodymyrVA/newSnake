import Canvas from './Canvas'
class Snake extends Canvas{
    constructor(){
        super();
        this.snakeNumberSection = 5;
        this.snakeSize = 10;
        this.snakeColor = {body: "blue", border: "white"};
        this.snakeFoodColor = {body: "green", border: "white"};
        this.snakeBody;
        this.food;

    }


    createSnake() {
        this.snakeBody = [];
        for (let i = this.snakeNumberSection; i--;) {
            this.snakeBody.push({x: i, y: 0})
        }
        return this.snakeBody;
    }

    createFood() {
        this.food = {
            x: Math.round(Math.random() * (this.w - this.snakeSize) / this.snakeSize),
            y: Math.round(Math.random() * (this.h - this.snakeSize) / this.snakeSize)
    };
}

    snakeCrush(x, y, array) {
        for(let i = array.length; i--;){
            if(x == array[i].x && y == array[i].y){
                return true;
            }
        }
        return false;
    }


}
export default Snake