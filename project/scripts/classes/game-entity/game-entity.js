class GameEntity {
    constructor(x, y, canvas) {
        this.x = x;
        this.y = y;
        this.canvas = canvas;

        this.context = canvas.getContext('2d')
        this.previousX;
        this.previousY;
        this.vector = new MovementVector(0, 0, 0);
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
        // Log previous position
        this.previousX = this.x;
        this.previousY = this.y;

        // Update current position
        this.x += this.vector.getX();
        this.y += this.vector.getY();

        // Update hitbox
        this.hitbox.setPosition(this.x, this.y);
    }

    render() {
        this.clear();
        this.draw();
    }

    clear() {
        this.image.clear(this.previousX, this.previousY);
    }

    draw() {
        this.image.draw(this.x, this.y);
    }

    collision(other) {
        return this.hitbox.collision(other.hitbox);
    }
}