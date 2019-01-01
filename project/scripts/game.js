function startGame(canvas) {
    const UPDATE_INTERVAL = 40;
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const context = canvas.getContext('2d');
    context.fillStyle = 'darkslategrey';
    context.font = '30px Courier New';

    let x = 50;
    let y = 50;
    let moveX = 10;
    let moveY = -10;

    setInterval(updateGame, UPDATE_INTERVAL);
    function updateGame() {
        context.clearRect(x, y - 30, 300, 40);
        x += moveX;
        y += moveY;
        context.fillText('Hello world!', x, y);

        if (x <= 0 || x + 200 >= WIDTH) {
            moveX *= -1;
        }
        if (y - 30 <= 0 || y >= HEIGHT) {
            moveY *= -1;
        }
    }

    // let centerX = canvas.width / 2;
    // let centerY = canvas.height / 2;
    // let radius = 70;

    // context.beginPath();
    // context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    // context.fillStyle = 'green';
    // context.fill();
    // context.lineWidth = 5;
    // context.strokeStyle = '#003300';
    // context.stroke();

}