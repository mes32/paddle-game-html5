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
        this.destroyed = false;
    }

    destroy() {
        this.destroyed = true;
    }

    isDestroyed() {
        return this.destroyed;
    }

    clear() {
        this.image.clear(this.x, this.y);
    }

    draw() {
        if (!this.destroyed) {
            this.image.draw(this.x, this.y);
        }
    }
}