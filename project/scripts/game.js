class Ball {
    constructor(x, y, context) {
        this.x = x;
        this.y = y;
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

        // Bounce
        if (this.x - this.radius <= 0 || this.x + this.radius >= 480) {
            this.moveX *= -1;
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= 600) {
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
        this.context.fill();
        this.context.stroke();
    }
}

function startGame(canvas) {
    const UPDATE_INTERVAL = 40;
    const context = canvas.getContext('2d');

    let x = 50;
    let y = 500;
    let ball = new Ball(x, y, context);

    setInterval(updateGame, UPDATE_INTERVAL);
    function updateGame() {
        ball.move();
        ball.clear();
        ball.draw();
    }
}