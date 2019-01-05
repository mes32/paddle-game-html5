class ImageRectangle {
    constructor(x, y, width, height, color, context) {
        this.rect = new HitBox(x, y, width, height);
        this.color = color;
        this.context = context;

        this.previousRect = new HitBox(x, y, width, height);
    }

    set(x, y) {
        this.clearPrevious();
        this.previousRect = this.rect.copy();
        this.x = x;
        this.y = y;
        // this.draw();
    }

    move(deltaX, deltaY) {
        this.previousRect = this.rect.copy();
        this.rect.move(deltaX, deltaY);
    }

    clearPrevious() {
        const x = this.previousRect.x;
        const y = this.previousRect.y;
        const width = this.previousRect.width;
        const height = this.previousRect.height;
        this.context.clearRect(x, y, width, height);
    }

    draw() {
        const x = this.rect.x;
        const y = this.rect.y;
        const width = this.rect.width;
        const height = this.rect.height;
        this.context.fillStyle = this.color;
        this.context.fillRect(x, y, width, height);
    }
}