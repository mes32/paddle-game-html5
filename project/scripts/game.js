function startGame(canvas) {
    const HEIGHT = canvas.height;
    const WIDTH = canvas.width;
    const UPDATE_INTERVAL = 40;
    const context = canvas.getContext('2d');

    let x = 10;
    let y = 500;
    let ball = new Ball(x, y, context);
    let paddle = new Paddle(WIDTH / 2.0, HEIGHT - 20, context);

    setInterval(updateGame, UPDATE_INTERVAL);
    function updateGame() {
        paddle.move();
        ball.move();

        paddle.clear();
        ball.clear();

        paddle.draw();
        ball.draw();
    }
}