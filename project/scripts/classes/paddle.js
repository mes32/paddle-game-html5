class Paddle {
    constructor(x, y, context) {
        this.x = x;
        this.y = y;
        this.context = context;

        this.previousX = x;
        this.previousY = y;
        this.height = 4;
        this.width = 80;

        const rectX = this.x - Math.round(this.width / 2.0);
        this.hitbox = new Rect(rectX, this.y, this.width, this.height);
        // this.image = new ImageRectangle();

        this.speed = 10;
        this.moveX = 0;
        this.moveY = 0;
        this.movingRight = false;
        this.movingLeft = false;
        this.queuedRight = false;
        this.queuedLeft = false;
    }

    move() {
        this.previousX = this.x;
        this.previousY = this.y;
        this.x += this.moveX;
        this.y += this.moveY;

        this.hitbox.move(this.moveX, this.moveY);

        // Stop at edges
        if (this.x - Math.round(this.width / 2.0) <= 0) {
            this.moveX = 0;
            this.x = Math.round(this.width / 2.0);
        } else if (this.x + Math.round(this.width / 2.0) >= 480) {
            this.moveX = 0;
            this.x = 480 - Math.round(this.width / 2.0);
        }
    }

    clear() {
        // const x = this.previousX - ((this.width + this.height) / 2.0);
        // const y = this.previousY - (this.height / 2.0);
        // this.context.clearRect(x, y, this.height, this.width + (2 * this.height));

        const x = Math.round(this.previousX - this.width / 2.0);
        const y = this.previousY;
        this.context.clearRect(x, y, this.width, this.height);
    }

    draw() {
        // const x = this.x - this.width / 2.0;
        // const y = this.y - this.height / 2.0;
        // this.context.fillStyle = 'ghostwhite';

        // // Left-end bezel circle
        // this.context.beginPath();
        // this.context.arc(x, this.y, this.height / 2.0, 0, 2 * Math.PI, false);
        // this.context.fill();
        // this.context.stroke();

        // // Right-end bezel circle
        // this.context.beginPath();
        // this.context.arc(this.x + this.width / 2.0, this.y, this.height / 2.0, 0, 2 * Math.PI, false);
        // this.context.fill();
        // this.context.stroke();

        // // Rectangle
        // this.context.fillRect(x, y, this.width, this.height);

        // Simple rectangle for now
        // Note: const x declaration above has a bug
        const x = Math.round(this.x - this.width / 2.0);
        const y = this.y;
        this.context.fillStyle = 'ghostwhite';
        this.context.fillRect(x, y, this.width, this.height);
    }

    pressedRight() {
        if (!this.movingLeft) {
            this.movingRight = true;
            this.moveX = this.speed;
        } else {
            this.queuedRight = true;
        }
    }

    pressedLeft() {
        if (!this.movingRight) {
            this.movingLeft = true;
            this.moveX = -this.speed;
        } else {
            this.queuedLeft = true;
        }
    }

    pressedSpace() {
        console.log('paddle pressed SPACE');
    }

    releasedLeft() {
        if (this.movingLeft) {
            if (this.queuedRight) {
                this.movingRight = true;
                this.queuedRight = false;
                this.moveX = this.speed;
            } else {
                this.moveX = 0;
            }
        }
        this.movingLeft = false;
        this.queuedLeft = false;
    }

    releasedRight() {
        if (this.movingRight) {
            if (this.queuedLeft) {
                this.movingLeft = true;
                this.queuedLeft = false;
                this.moveX = -this.speed;
            } else {
                this.moveX = 0;
            }
        }
        this.movingRight = false;
        this.queuedRight = false;
    }
}