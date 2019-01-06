class Ball {
    constructor(x, y, paddle, context) {
        this.x = x;
        this.y = y;
        this.paddle = paddle;
        this.context = context;

        this.previousX = x;
        this.previousY = y;
        this.radius = 4;
        this.widthHeight = 2 * this.radius;
        this.moveX = 10;
        this.moveY = 10;

        this.hitbox = new HitBox(this.x, this.x, this.widthHeight, this.widthHeight);
        this.image = new ImageCircle(this.radius, this.COLOR, this.context);
    }

    move() {
        this.previousX = this.x;
        this.previousY = this.y;

        this.x += this.moveX;
        this.y += this.moveY;
        this.hitbox.setPosition(this.x, this.y);

        // Bounce off wall
        if (this.x <= 0 || this.x + this.widthHeight >= 480) {
            this.moveX *= -1;
        }
        if (this.y <= 0 || this.y + this.widthHeight >= 600) {
            this.moveY *= -1;
        }

        // Bounce off paddle
        if (this.collision(this.paddle)) {
            this.moveY *= -1;
        }
    }

    clear() {
        // const x = this.previousX - this.radius;
        // const y = this.previousY - this.radius;
        // const span = 2 * this.radius;
        // this.context.clearRect(x, y, span, span);

        this.image.clear(this.previousX, this.previousY);
    }

    draw() {
        // this.context.beginPath();
        // this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        // this.context.fillStyle = 'ghostwhite';
        // this.context.linewidth = 0;
        // // this.context.strokeStyle = 'black'
        // this.context.fill();
        // this.context.stroke();

        this.image.draw(this.x, this.y);
    }

    collision(paddle) {
        return this.hitbox.collision(paddle.hitbox);
    }
}