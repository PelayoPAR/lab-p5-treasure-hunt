const game = new Game();

function preload() {
  imgVikingDown = loadImage("/assets/character-down.png");
  imgTreasure = loadImage("/assets/treasure.png");
  imgVikingUp = loadImage("/assets/character-up.png");
  imgVikingRight = loadImage("/assets/character-right.png");
  imgVikingLeft = loadImage("/assets/character-left.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.play();
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    game.player.moveUp();
  } else if (keyIsDown(DOWN_ARROW)) {
    game.player.moveDown();
  }

  if (keyIsDown(LEFT_ARROW)) {
    game.player.moveLeft();
  } else if (keyIsDown(RIGHT_ARROW)) {
    game.player.moveRight();
  }
}
