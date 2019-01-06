class Ball {
    constructor(x, y, paddle, bricks, context) {
        this.x = x;
        this.y = y;
        this.paddle = paddle;
        this.bricks = bricks;
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

        // Bounce off brick
        for (let brick of this.bricks) {
            if (this.collision(brick)) {
                // brick.destroy();
                this.moveY *= -1;
            }
        }
    }

    clear() {
        this.image.clear(this.previousX, this.previousY);
    }

    draw() {
        this.image.draw(this.x, this.y);
    }

    collision(paddle) {
        return this.hitbox.collision(paddle.hitbox);
    }
}