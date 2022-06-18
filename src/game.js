class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(1, 1);
    this.treasure.setRandomPosition();
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    let x = 0;
    let y = 0;

    for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }

    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
    }
  }

  play() {
    this.player.drawPlayer();
    this.treasure.drawTreasure();
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  
  drawPlayer() {
    image(
      imgVikingDown,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      this.width,
      this.height
    );
  }

  moveUp() {
    if (this.row > 0) this.row -= 1;
  }
  moveDown() {
    if (this.row < matY) this.row += 1;
  }
  moveLeft() {
    if (this.col > 0) this.col -= 1;
  }
  moveRight() {
    if (this.col < matX) this.col += 1;
  }
}

class Treasure {
  constructor(colT, rowT) {
    this.colT = colT;
    this.rowT = rowT;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
  }

  setRandomPosition() {
    this.colT = Math.floor(Math.random() * matX);
    this.rowT = Math.floor(Math.random() * matY);
  }

  drawTreasure() {
    image(
      imgTreasure,
      this.colT * SQUARE_SIDE,
      this.rowT * SQUARE_SIDE,
      this.width,
      this.height
    );
  }
}
