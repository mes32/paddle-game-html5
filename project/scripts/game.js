function startGame(canvas) {
    const UPDATE_INTERVAL = 40;
    const context = canvas.getContext('2d');

    let x = 10;
    let y = 500;
    let ball = new Ball(x, y, context);

    setInterval(updateGame, UPDATE_INTERVAL);
    function updateGame() {
        ball.move();
        ball.clear();
        ball.draw();
    }
}