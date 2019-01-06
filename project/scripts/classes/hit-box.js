class HitBox {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    setPosition(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    collision(otherHitBox) {
        if (this.x < otherHitBox.x + otherHitBox.width &&
            this.x + this.width > otherHitBox.x &&
            this.y < otherHitBox.y + otherHitBox.height &&
            this.y + this.height > otherHitBox.y
        ) {
            return true;
        } else {
            return false;
        }
    }
}