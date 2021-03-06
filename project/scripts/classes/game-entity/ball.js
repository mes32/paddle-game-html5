class Ball extends GameEntity {
    constructor(x, y, paddle, bricks, canvas) {
        super(x, y, canvas);
        this.vector = new MovementVector(1, 1, Ball.DEFAULT_SPEED);
        this.paddle = paddle;
        this.bricks = bricks;

        this.hitbox = new HitBox(this.x, this.x, Ball.DIAMETER, Ball.DIAMETER);
        this.image = new ImageCircle(Ball.RADIUS, this.COLOR, this.context);
    }

    static get RADIUS() {
        return 4;
    }

    static get DIAMETER() {
        return 2 * Ball.RADIUS;
    }

    static get DEFAULT_SPEED() {
        return 10;
    }

    update() {
        super.update();

        // Bounce off wall
        // if (this.x <= 0 && this.previousX > 0) {
        //     this.moveX *= -1;
        // } else if (this.x + Ball.DIAMETER >= 480 && this.previousX + Ball.DIAMETER < 480) {
        //     this.moveX *= -1;
        // }
        // if (this.y <= 0 && this.previousY > 0) {
        //     this.moveY *= -1;
        // } else if (this.y + Ball.DIAMETER >= 600 && this.previousY + Ball.DIAMETER < 600) {
        //     this.moveY *= -1;
        // }

        // Bounce off wall
        // Note: This is likely an incomplete way to handle this
        if (this.x <= 0) {
            this.vector.flipHorizontal();
        } else if (this.x + Ball.DIAMETER >= this.canvas.width) {
            this.vector.flipHorizontal();
        }

        if (this.y <= 0) {
            this.vector.flipVertical();
        } else if (this.y + Ball.DIAMETER >= this.canvas.height) {
            this.vector.flipVertical();
        }

        // Bounce off paddle
        if (this.collision(this.paddle)) {
            this.vector.flipVertical();
        }

        // Bounce off a brick
        for (let i = 0; i < this.bricks.length; i++) {
            if (this.collision(this.bricks[i])) {
                this.bricks[i].destroy();
                this.vector.flipVertical();
            }
        }
    }
}