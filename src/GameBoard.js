import Cell from "./Cell.js";

export default class GameBoard {
	constructor(boardElement) {
		this.element = boardElement;
		this.element.classList.add('board')
		this.cells = []

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				this.cells.push(new Cell(this.element, i, j))
			}
		}
	}

	getRandomEmptyCell() {
		const emptyCells = this.cells.filter(cell => cell.isEmpty())
		const randNum = Math.floor(Math.random() * emptyCells.length)
		return emptyCells[randNum]
	}
}