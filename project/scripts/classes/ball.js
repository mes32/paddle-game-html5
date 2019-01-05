class Ball {
    constructor(x, y, paddle, context) {
        this.x = x;
        this.y = y;
        this.paddle = paddle;
        this.context = context;

        this.previousX = x;
        this.previousY = y;
        this.radius = 4;
        this.moveX = 10;
        this.moveY = 10;

        const rectX = Math.round(this.x - this.radius);
        const rectY = Math.round(this.y - this.radius);
        const rectSpan = 2 * this.radius;
        this.hitbox = new HitBox(rectX, rectY, rectSpan, rectSpan);
    }

    move() {
        this.previousX = this.x;
        this.previousY = this.y;
        this.x += this.moveX;
        this.y += this.moveY;

        this.hitbox.move(this.moveX, this.moveY);

        // Bounce off wall
        if (this.x - this.radius <= 0 || this.x + this.radius >= 480) {
            this.moveX *= -1;
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= 600) {
            this.moveY *= -1;
        }

        // Bounce off paddle
        if (this.collision(this.paddle)) {
            this.moveY *= -1;
        }
    }

    clear() {
        const x = this.previousX - this.radius;
        const y = this.previousY - this.radius;
        const span = 2 * this.radius;
        this.context.clearRect(x, y, span, span);
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = 'ghostwhite';
        this.context.linewidth = 0;
        // this.context.strokeStyle = 'black'
        this.context.fill();
        this.context.stroke();
    }

    collision(paddle) {
        return this.hitbox.collision(paddle.hitbox);
    }
}