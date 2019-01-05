class Paddle {
    constructor(x, y, context) {
        const HEIGHT = 4;
        const WIDTH = 80;
        const COLOR = 'ghostwhite';

        this.speed = 10;
        this.context = context;

        const leftX = x - Math.round(WIDTH / 2.0);
        this.hitbox = new HitBox(leftX, y, WIDTH, HEIGHT);
        this.image = new ImageRectangle(leftX, y, WIDTH, HEIGHT, COLOR, context);

        this.moveX = 0;
        this.moveY = 0;
        this.controller = new PaddleController(this);
    }

    move() {
        this.hitbox.move(this.moveX, this.moveY);
        this.image.move(this.moveX, this.moveY);

        // Stop at edges
        // if (this.hitbox.x < 0) {
        //     console.log('over left edge');
        //     this.moveX = 0;
        //     this.movingLeft = false;

        //     this.hitbox.set(0, this.hitbox.y);
        //     this.image.set(0, this.image.y);
        // } else if (this.hitbox.x + this.hitbox.width > 480) {
        //     this.moveX = 0;
        //     this.movingRight = false;

        //     this.hitbox.set(480 - Math.round(this.hitbox.width / 2.0), this.hitbox.y);
        //     this.image.set(480 - Math.round(this.image.width / 2.0), this.image.y);
        // }
    }

    clear() {
        this.image.clearPrevious();
    }

    draw() {
        this.image.draw();
    }
}