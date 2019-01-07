function startGame(canvas) {
    const HEIGHT = canvas.height;
    const WIDTH = canvas.width;
    const UPDATE_INTERVAL = 40;
    const context = canvas.getContext('2d');

    let bricks = initBricks(context);
    // let paddle = new Paddle(WIDTH / 2.0, HEIGHT - 20, context);
    let paddle = new Paddle(WIDTH / 2.0, HEIGHT - 40, context);
    let ball = new Ball(240, 500, paddle, bricks, context);

    initEventListeners(paddle.controller);

    renderAll();
    setInterval(iterateGameLoop, UPDATE_INTERVAL);
    function iterateGameLoop() {
        // 1. ProcessInput (implicitly handled by event listeners)
        // 2. Update
        //   - move paddle (prevent from moving outside gameboard)
        //   - calculate ball trajectory (account for bouncing off walls, paddle, bricks)
        //   - update status of bricks hit by ball
        //   - move ball
        // 3. Render
        //   - clear all vector images (for entities that moved or changed)
        //   - draw all vector images (for entites that were previously cleared)

        updateAll();
        renderAll();
    }

    function updateAll() {
        for (let i = 0; i < bricks.length; i++) {
            if (bricks[i].isDestroyed()) {
                bricks.splice(i, 1);
                i--;
            }
        }
        paddle.move();
        ball.move();
    }

    function renderAll() {
        for (let brick of bricks) {
            brick.clear();
            brick.draw();
        }
        paddle.clear();
        paddle.draw();
        ball.clear();
        ball.draw();
    }
}

function initBricks(context) {
    const columnsBricks = 12;
    const rowsBricks = 6;
    let bricks = [];
    for (let i = 0; i < columnsBricks; i++) {
        for (let j = 0; j < rowsBricks; j++) {
            const x = i * 40;
            const y = j * 20;
            bricks.push(new Brick(x, y, context));
        }
    }
    return bricks;
}

function initEventListeners(controller) {
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName === 'ArrowLeft') {
            controller.pressedLeft();
            return;
        } else if (keyName === 'ArrowRight') {
            controller.pressedRight();
            return;
        } else if (keyName === ' ') {
            controller.pressedSpace();
            return;
        }
    });

    document.addEventListener('keyup', (event) => {
        const keyName = event.key;
        if (keyName === 'ArrowLeft') {
            controller.releasedLeft();
            return;
        } else if (keyName === 'ArrowRight') {
            controller.releasedRight();
            return;
        }
    });
}