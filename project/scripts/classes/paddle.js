class Paddle {
    constructor(x, y, context) {
        this.SPEED = 10;
        this.HEIGHT = 4;
        this.WIDTH = 80;
        this.COLOR = 'ghostwhite';

        this.x = x;
        this.y = y;
        this.context = context;

        this.previousX = x;
        this.previousY = y;

        this.hitbox = new HitBox(x, y, this.WIDTH, this.HEIGHT);
        this.image = new ImageRectangle(this.WIDTH, this.HEIGHT, this.COLOR, context);

        this.moveX = 0;
        this.moveY = 0;
        this.controller = new PaddleController(this);
    }

    move() {
        // Log previous position
        this.previousX = this.x;
        this.previousY = this.y;

        // Update current position
        this.x += this.moveX;
        this.y += this.moveY;
        
        // Stop at edges
        if (this.x < 0) {
            this.x = 0;
            this.moveX = 0;
        } else if (this.x + this.WIDTH > 480) {
            this.x = 480 - this.WIDTH;
            this.moveX = 0;
        }

        // Update hitbox
        this.hitbox.setPosition(this.x, this.y);
    }

    clear() {
        this.image.clear(this.previousX, this.previousY);
    }

    draw() {
        this.image.draw(this.x, this.y);
    }
}