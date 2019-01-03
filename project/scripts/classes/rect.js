class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    copy() {
        return new Rect(this.x, this.y, this.width, this.height);
    }

    // set(x, y) {
    //     this.x = x;
    //     this.y = y;
    // }

    move(deltaX, deltaY) {
        this.x += deltaX;
        this.y += deltaY;
    }

    collision(rect2) {
        if (this.x < rect2.x + rect2.width &&
            this.x + this.width > rect2.x &&
            this.y < rect2.y + rect2.height &&
            this.y + this.height > rect2.y
        ) {
            return true;
        } else {
            return false;
        }
    }
}