class Canvas {
    constructor(){
        this.can = document.getElementById('canvas');
        this.ctx = this.can.getContext("2d");
        this.w = this.can.width;
        this.h = this.can.height;
    }


    fillStyle(color){
        return this.ctx.fillStyle = color;
    }

    fillRect(x, y, width, height){
        return this.ctx.fillRect(x, y, width, height);
    }

    strokeStyle(color){
        return this.ctx.strokeStyle = color;
    }

    strokeRect(x, y, width, height){
        return this.ctx.strokeRect(x, y, width, height);
    }

    font(font){
        return this.ctx.font = font;
    }

    fillText(text, x, y){
        return this.ctx.fillText(text, x, y);
    }
}


export default Canvas