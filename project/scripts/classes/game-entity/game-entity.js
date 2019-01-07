class GameEntity {
    constructor(x, y, context) {
        this.x = x;
        this.y = y;
        this.context = context;

        this.previousX;
        this.previousY;
        this.hitbox;
        this.image;
    }

    static get HEIGHT() {
        return 10;
    }

    static get WIDTH() {
        return 10;
    }

    static get COLOR() {
        return 'fuchsia';
    }

    update() {

    }

    render() {

    }

    move() {
        // Log previous position
        this.previousX = this.x;
        this.previousY = this.y;

        // Update current position
        this.x += this.moveX;
        this.y += this.moveY;

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