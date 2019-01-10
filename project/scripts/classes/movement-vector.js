class MovementVector {
    constructor(x, y, magnitude) {
        const unitVectorCorrection = Math.sqrt(x * x + y * y);
        this.x = x / unitVectorCorrection;
        this.y = y / unitVectorCorrection;
        this.magnitude = magnitude;
    }

    flipVertical() {
        this.y *= -1;
    }

    flipHorizontal() {
        this.x *= -1;
    }

    rotate(degrees) {
        const radians = Math.PI * (degrees / 180.0);
        const rotateX = this.x * Math.cos(radians) - this.y * Math.sin(radians);
        const rotateY = this.x * Math.sin(radians) + this.y * Math.cos(radians);
        this.x = rotateX;
        this.y = rotateY;
    }

    getX() {
        this.x * this.magnitude;
    }

    getY() {
        this.y * this.magnitude;
    }
}