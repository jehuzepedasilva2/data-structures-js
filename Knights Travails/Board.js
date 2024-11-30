export default class Board {

  constructor() {
    this.board = new Array(8);
    for (let i = 0; i < this.board.length; i++) {
      this.board[i] = Array.from(8).fill(' ');
    }
  }

  printBoard() {
    for (let i = 0; i < this.board.length; i++) {
      console.log(this.board[i]);
    }
  }
}