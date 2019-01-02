class Ball {
    constructor(x, y, paddle, context) {
        this.x = x;
        this.y = y;
        this.paddle = paddle;
        this.context = context;

        this.previousX = x;
        this.previousY = y;
        this.radius = 4;
        this.moveX = 10;
        this.moveY = 10;
    }

    move() {
        this.previousX = this.x;
        this.previousY = this.y;
        this.x += this.moveX;
        this.y += this.moveY;

        // Bounce off wall
        if (this.x - this.radius <= 0 || this.x + this.radius >= 480) {
            this.moveX *= -1;
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= 600) {
            this.moveY *= -1;
        }

        // Bounce off paddle
        const ballX = this.x - this.radius;
        const ballY = this.y - this.radius;
        const ballWidthHeight = this.radius * 2;
        const paddleX = this.paddle.x - Math.round(this.paddle.width / 2.0);
        const paddleY = this.paddle.y;
        const paddleWidth = this.paddle.width;
        const paddleHeight = this.paddle.height;

        // Note:
        // ball left-edge < paddle right-edge &&
        // ball right-edge > paddle left-edge &&
        // ball top-edge < paddle bottom-edge &&
        // ball bottom-edge > paddle top-edge
        if (ballX < paddleX + paddleWidth &&
            ballX + ballWidthHeight > paddleX &&
            ballY < paddleY + paddleHeight &&
            ballY + ballWidthHeight > paddleY
        ) {
            this.moveY *= -1;
        }
    }

    clear() {
        const x = this.previousX - this.radius;
        const y = this.previousY - this.radius;
        const span = 2 * this.radius;
        this.context.clearRect(x, y, span, span);
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = 'ghostwhite';
        this.context.linewidth = 0;
        // this.context.strokeStyle = 'black'
        this.context.fill();
        this.context.stroke();
    }
}