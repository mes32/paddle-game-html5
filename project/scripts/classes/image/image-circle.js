class ImageCircle extends Image {
    constructor(radius, color, context) {
        super(2 * radius, 2 * radius, color, context);
        this.radius = radius;
    }

    draw(x, y) {
        super.draw(x, y);

        const centerX = x + this.radius;
        const centerY = y + this.radius;

        this.context.beginPath();
        this.context.arc(centerX, centerY, this.radius, 0, 2 * Math.PI, false);
        this.context.linewidth = 0;
        this.context.fill();
        this.context.stroke();
    }
}