import Canvas from './Canvas'
class Paint extends Canvas {
    constructor() {
        super();
    }

    paint(x, y, w, h, fillStColor, strokeStColor) {
        this.fillStyle(fillStColor);
        this.fillRect(x, y, w, h);
        this.strokeStyle(strokeStColor);
        this.strokeRect(x, y, w, h);
    }

    paintCell(x, y, size, fillStColor, strokeStColor) {
        this.fillStyle(fillStColor);
        this.fillRect(x * size, y * size, size, size);
        this.strokeStyle(strokeStColor);
        this.strokeRect(x * size, y * size, size, size);
    }

    paintScore(score, font) {
        this.font(font);
        this.fillText("Score : " + score, 10, 390);
    }
    paintSnake(arr, size, fillStColor, strokeStColor) {
        for (let i = arr.length; i--;) {
            let c = arr[i];
            this.paintCell(c.x, c.y, size, fillStColor, strokeStColor);
        }
    }
}
export default Paint