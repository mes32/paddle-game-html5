function startGame(canvas) {
    const HEIGHT = canvas.height;
    const WIDTH = canvas.width;
    const UPDATE_INTERVAL = 40;
    const context = canvas.getContext('2d');

    let x = 240;
    let y = 500;
    // let blocks = [];
    let paddle = new Paddle(WIDTH / 2.0, HEIGHT - 20, context);
    let ball = new Ball(x, y, paddle, context);

    initEventListeners(paddle);

    // for (let block of blocks) {
    //     block.draw();
    // }
    paddle.draw();
    ball.draw();

    setInterval(updateGame, UPDATE_INTERVAL);
    function updateGame() {
        paddle.move();
        ball.move();

        paddle.clear();
        ball.clear();

        paddle.draw();
        ball.draw();

        // for (let i = 0; i < blocks.length; i++) {
        //     if (blocks[i].isDestroyed()) {
        //         blocks[i].clear();
        //         blocks.splice(i, 1);
        //         i--;
        //     }
        // }
    }
}

function initEventListeners(paddle) {
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName === 'ArrowLeft') {
            paddle.pressedLeft();
            return;
        } else if (keyName === 'ArrowRight') {
            paddle.pressedRight();
            return;
        } else if (keyName === ' ') {
            paddle.pressedSpace();
            return;
        }
    });

    document.addEventListener('keyup', (event) => {
        const keyName = event.key;
        if (keyName === 'ArrowLeft') {
            paddle.releasedLeft();
            return;
        } else if (keyName === 'ArrowRight') {
            paddle.releasedRight();
            return;
        }
    });
}

function pressedLeft() {
    console.log('pressed LEFT');
}