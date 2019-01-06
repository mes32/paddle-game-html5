class ImageRectangle {
    constructor(x, y, width, height, color, context) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.context = context;

        this.previousX = x;
        this.previousY = y;
    }

    set(newX, newY) {
        this.clearPrevious();
        this.previousX = this.x;
        this.previousY = this.y;
        this.x = newX;
        this.y = newY;
    }

    move(deltaX, deltaY) {
        this.previousX = this.x;
        this.previousY = this.y;
        this.x += deltaX;
        this.y += deltaY;
    }

    clearPrevious() {
        const x = this.previousX;
        const y = this.previousY;
        const width = this.width;
        const height = this.height;
        this.context.clearRect(x, y, width, height);
    }

    draw() {
        const x = this.x;
        const y = this.y;
        const width = this.width;
        const height = this.height;
        this.context.fillStyle = this.color;
        this.context.fillRect(x, y, width, height);
    }
}