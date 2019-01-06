class ImageRectangle {
    constructor(width, height, color, context) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.context = context;
    }

    clear(x, y) {
        this.context.clearRect(x, y, this.width, this.height);
    }

    draw(x, y) {
        this.context.fillStyle = this.color;
        this.context.fillRect(x, y, this.width, this.height);
    }
}