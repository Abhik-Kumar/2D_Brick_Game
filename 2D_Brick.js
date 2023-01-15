let paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx, paddle_dy;
let ball_x, ball_y, ball_diameter, ball_dx, ball_dy, ball_r;
let brick_w, brick_h, brick_x, brick_y, brick_status;
function setup() {
    createCanvas(400, 400);
    background("black");
    ball_dx = 1;
    ball_dy = 1;
    paddle_dx = 3;
    paddle_dy = 3;
    brick_w = 50;
    brick_h = 15;
    brick_x = 40;
    brick_y = 70;
    brick_status = true;
    paddle_width = 100;
    paddle_height = 20;
    paddle_x = (width / 2) - (paddle_width / 2);
    paddle_y = height - 25;

    rect(paddle_x, paddle_y, paddle_width, paddle_height);
    rect(brick_x, brick_y, brick_w, brick_h);
    ball_diameter = 20;
    ball_r = ball_diameter / 2;
    ball_x = (width / 2) + 70 - (ball_diameter / 2);
    ball_y = (height / 2) - (ball_diameter / 2);
    circle(ball_x, ball_y, ball_diameter);
}

function draw() {
    background("black")

    // if ball touched the bottom
    if (ball_y + ball_r == 400) {
        ball_dx = 0;
        ball_dy = 0;
    }

    // if ball touches vericlee boundaries - bouces back
    if (ball_x + (ball_r) > width || ball_x - (ball_r) < 0) {
        ball_dx = -ball_dx;
    }
    // if
    if (ball_y + (ball_r) > height || ball_y - (ball_r) < 0) {
        ball_dy = -ball_dy;
    }
    ball_x = ball_x + ball_dx;
    ball_y = ball_y + ball_dy;

    // Control Paddle position.
    if (keyIsDown(LEFT_ARROW)) 
        if (paddle_x > 0) {
            {
                paddle_x = paddle_x - paddle_dx;
            }
        }
    if (keyIsDown(RIGHT_ARROW)) 
        if (paddle_x + paddle_width < width) {
            {
                paddle_x = paddle_x + paddle_dx;
            }
        }
    
    // Paddle jump
    if ((ball_x < paddle_x + paddle_width) && (ball_x > paddle_x) && (ball_y + ball_r == paddle_y)) {
        ball_dy = -ball_dy;
    }

    // Draw block
    if (ball_x + ball_r > brick_x && ball_x - ball_r < brick_x + brick_w && (ball_y - ball_r == brick_y + brick_h || ball_y + ball_r == brick_y)) {
        brick_status = false;

        ball_dx = 0;
        ball_dy = 0;
    }

    if (brick_status) {
        rect(brick_x, brick_y, brick_w, brick_h);
    }

    //redrawing the balls and paddle
    circle(ball_x, ball_y, ball_diameter);
    rect(paddle_x, paddle_y, paddle_width, paddle_height);
}