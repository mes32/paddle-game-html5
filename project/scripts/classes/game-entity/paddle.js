class Paddle extends GameEntity{
    constructor(x, y, canvas) {
        super(x, y, canvas);
        this.hitbox = new HitBox(x, y, Paddle.WIDTH, Paddle.HEIGHT);
        this.image = new ImageRectangle(Paddle.WIDTH, Paddle.HEIGHT, Paddle.COLOR, this.context);
    }

    static get HEIGHT() {
        return 4;
    }

    static get WIDTH() {
        return 80;
    }

    static get COLOR() {
        return 'ghostwhite';
    }

    static get SPEED() {
        return 10;
    }

    update() {
        super.update();
        
        // Stop at edges
        if (this.x < 0) {
            this.x = 0;
            this.moveX = 0;
        } else if (this.x + Paddle.WIDTH > this.canvas.width) {
            this.x = this.canvas.width - Paddle.WIDTH;
            this.moveX = 0;
        }

        // Update hitbox
        this.hitbox.setPosition(this.x, this.y);
    }
}