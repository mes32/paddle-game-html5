class Paddle {
    constructor(x, y, context) {
        const HEIGHT = 4;
        const WIDTH = 80;
        const COLOR = 'ghostwhite';

        this.speed = 10;
        this.x = x;
        this.y = y;
        this.context = context;

        this.hitbox = new HitBox(x, y, WIDTH, HEIGHT);
        this.image = new ImageRectangle(x, y, WIDTH, HEIGHT, COLOR, context);

        this.moveX = 0;
        this.moveY = 0;
        this.controller = new PaddleController(this);
    }

    move() {
        this.x += this.moveX;
        this.y += this.moveY;
        this.hitbox.setPosition(this.x, this.y);
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