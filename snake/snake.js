function Snake() {

    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];


    this.draw = function() {
        ctx.fillStyle = "yellow";

        for (let i=0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x,this.y,scale,scale);
    };

    this.update = function() {

        for(let i=0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total -1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = 290;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = 290;

    }

    this.changeDirection = function(direction) {
        switch(direction) {
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = -scale;
                break;
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;
            case "Left":
                this.xSpeed = -scale;
                this.ySpeed = 0;
                break;
            case "Right":
                this.xSpeed = scale;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = function(fruit) {
        if(this.x === fruit.x && this.y === fruit.y) {
            this.total ++;
            return true;
        }
        return false;
    }

    this.checkCollision = function() {

        for (let i=0; i < this.tail.length; i++) {
            if (this.x === this.tail[i].x && 
                this.y === this.tail[i].y) {
                    this.total = 0;
                    this.tail = [];
                }
        }
    }

}