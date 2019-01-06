class PaddleController {
    constructor(paddle) {
        this.paddle = paddle;

        this.movingRight = false;
        this.movingLeft = false;
        this.queuedRight = false;
        this.queuedLeft = false;
    }

    pressedRight() {
        if (!this.movingLeft) {
            this.movingRight = true;
            this.paddle.moveX = this.paddle.SPEED;
        } else {
            this.queuedRight = true;
        }
    }

    pressedLeft() {
        if (!this.movingRight) {
            this.movingLeft = true;
            this.paddle.moveX = -this.paddle.SPEED;
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
                this.paddle.moveX = this.paddle.SPEED;
            } else {
                this.paddle.moveX = 0;
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
                this.paddle.moveX = -this.paddle.SPEED;
            } else {
                this.paddle.moveX = 0;
            }
        }
        this.movingRight = false;
        this.queuedRight = false;
    }
}