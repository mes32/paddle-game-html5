class GameEntity {
    constructor(x, y, context) {
        this.HEIGHT = 10;
        this.WIDTH = 10;
        this.COLOR = 'fuchsia';

        this.x = x;
        this.y = y;
        this.context = context;

        this.previousX;
        this.previousY;
        this.hitbox;
        this.image;
    }

    update() {

    }

    render() {

    }

    move() {
        // // Log previous position
        // this.previousX = this.x;
        // this.previousY = this.y;

        // // Update current position
        // this.x += this.moveX;
        // this.y += this.moveY;
        
        // // Stop at edges
        // if (this.x < 0) {
        //     this.x = 0;
        //     this.moveX = 0;
        // } else if (this.x + this.WIDTH > 480) {
        //     this.x = 480 - this.WIDTH;
        //     this.moveX = 0;
        // }

        // // Update hitbox
        // this.hitbox.setPosition(this.x, this.y);
    }

    clear() {
        // this.image.clear(this.previousX, this.previousY);
    }

    draw() {
        // this.image.draw(this.x, this.y);
    }
}