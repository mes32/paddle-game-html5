class Paddle extends GameEntity{
    constructor(x, y, context) {
        super(x, y, context);
        this.hitbox = new HitBox(x, y, Paddle.WIDTH, Paddle.HEIGHT);
        this.image = new ImageRectangle(Paddle.WIDTH, Paddle.HEIGHT, Paddle.COLOR, context);

        this.controller = new PaddleController(this);
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
        } else if (this.x + Paddle.WIDTH > 480) {
            this.x = 480 - Paddle.WIDTH;
            this.moveX = 0;
        }

        // Update hitbox
        this.hitbox.setPosition(this.x, this.y);
    }
}