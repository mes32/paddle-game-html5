class Brick {
    constructor(x, y, context) {
        this.HEIGHT = 20;
        this.WIDTH = 40;
        this.COLOR = 'firebrick';

        this.x = x;
        this.y = y;
        this.context = context;

        this.hitbox = new HitBox(x, y, this.WIDTH, this.HEIGHT);
        this.image = new ImageRectangle(this.WIDTH, this.HEIGHT, this.COLOR, context);
    }

    isDestroyed() {
        return false;
    }

    clear() {
        this.image.clear(this.previousX, this.previousY);
    }

    draw() {
        this.image.draw(this.x, this.y);
    }
}