class Brick extends GameEntity {
    constructor(x, y, canvas) {
        super(x, y, canvas);
        this.previousX = x;
        this.previousY = y;
        this.destroyed = false;
        this.hitbox = new HitBox(x, y, Brick.WIDTH, Brick.HEIGHT);
        this.image = new ImageRectangle(Brick.WIDTH - 1, Brick.HEIGHT - 1, Brick.COLOR, this.context);
    }

    static get HEIGHT() {
        return 20;
    }

    static get WIDTH() {
        return 40;
    }

    static get COLOR() {
        return 'firebrick';
    }

    destroy() {
        this.destroyed = true;
    }

    isDestroyed() {
        return this.destroyed;
    }

    render() {
        if (this.destroyed) {
            super.clear();
        } else {
            super.draw();
        }
    }
}