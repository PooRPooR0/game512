import Cell from "./Cell.js";
import Block from "./Block.js";

export default class GameBoard {
	constructor(boardElement) {
		this.element = boardElement;
		this.element.classList.add('board')
		this.cells = []
		this.bindedHandler = this.handleKeyDown.bind(this)

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				this.cells.push(new Cell(this.element, j, i))
			}
		}

		this.addBlock()

		document.addEventListener('keydown', this.bindedHandler)
	}

	handleKeyDown(event) {
		document.removeEventListener('keydown', this.bindedHandler)
		setTimeout(() => {
			document.addEventListener('keydown', this.bindedHandler)
		}, 40)
		if (event.key === 'ArrowRight') {
			this.moveRight()
		}
		if (event.key === 'ArrowLeft') {
			this.moveLeft()
		}
		if (event.key === 'ArrowUp') {
			this.moveTop()
		}
		if (event.key === 'ArrowDown') {
			this.moveBottom()
		}
	}

	getRandomEmptyCell() {
		const emptyCells = this.cells.filter(cell => cell.isEmpty())
		if (emptyCells.length === 0) return null
		const randNum = Math.floor(Math.random() * emptyCells.length)
		return emptyCells[randNum]
	}

	addBlock() {
		const randomCell = this.getRandomEmptyCell()
		if (!!randomCell) randomCell.linkBlock(new Block(this.element))
	}

	moveRight() {
		let isStepMoved = false
		let isMoved = false

		do {
			isStepMoved = false

			for(let i = this.cells.length - 1; i >= 0; i--) {
				const currentCell = this.cells[i]
				if (currentCell.isEmpty()) continue;
				if (currentCell.x === 3) continue;

				const currentBlock = currentCell.linkedBlock
				const rightCell = this.cells[i + 1]

				if (rightCell.isEmpty()) {
					rightCell.linkBlock(currentBlock)
					currentCell.disconnectBlock()
					isStepMoved = true
					continue
				}

				if (rightCell.linkedBlock.value === currentBlock.value) {
					rightCell.linkedBlock.delete()
					rightCell.linkBlock(currentBlock)
					currentBlock.setValue(currentBlock.value * 2)
					currentCell.disconnectBlock()
					isStepMoved = true
				}
			}

			if (isStepMoved) isMoved = true
		} while (isStepMoved)

		if (isMoved) this.addBlock()
		this.checkLose()
	}

	moveLeft() {
		let isStepMoved = false
		let isMoved = false

		do {
			isStepMoved = false

			for(let i = 0; i < this.cells.length; i++) {
				const currentCell = this.cells[i]
				if (currentCell.isEmpty()) continue;
				if (currentCell.x === 0) continue;

				const currentBlock = currentCell.linkedBlock
				const leftCell = this.cells[i-1]

				if (leftCell.isEmpty()) {
					leftCell.linkBlock(currentBlock)
					currentCell.disconnectBlock()
					isStepMoved = true
					continue
				}

				if (leftCell.linkedBlock.value === currentBlock.value) {
					leftCell.linkedBlock.delete()
					leftCell.linkBlock(currentBlock)
					currentBlock.setValue(currentBlock.value * 2)
					currentCell.disconnectBlock()
					isStepMoved = true
				}
			}

			if (isStepMoved) isMoved = true
		} while (isStepMoved)

		if (isMoved) this.addBlock()
		this.checkLose()
	}

	moveTop() {
		let isStepMoved = false
		let isMoved = false

		do {
			isStepMoved = false

			for(let i = 0; i < this.cells.length; i++) {
				const currentCell = this.cells[i]
				if (currentCell.isEmpty()) continue;
				if (currentCell.y === 0) continue;

				const currentBlock = currentCell.linkedBlock
				const topCell = this.cells[i-4]

				if (topCell.isEmpty()) {
					topCell.linkBlock(currentBlock)
					currentCell.disconnectBlock()
					isStepMoved = true
					continue
				}

				if (topCell.linkedBlock.value === currentBlock.value) {
					topCell.linkedBlock.delete()
					topCell.linkBlock(currentBlock)
					currentBlock.setValue(currentBlock.value * 2)
					currentCell.disconnectBlock()
					isStepMoved = true
				}
			}

			if (isStepMoved) isMoved = true
		} while (isStepMoved)

		if (isMoved) this.addBlock()
		this.checkLose()
	}

	moveBottom() {
		let isStepMoved = false
		let isMoved = false

		do {
			isStepMoved = false

			for(let i = this.cells.length - 1; i >= 0; i--) {
				const currentCell = this.cells[i]
				if (currentCell.isEmpty()) continue;
				if (currentCell.y === 3) continue;

				const currentBlock = currentCell.linkedBlock
				const bottomCell = this.cells[i+4]

				if (bottomCell.isEmpty()) {
					bottomCell.linkBlock(currentBlock)
					currentCell.disconnectBlock()
					isStepMoved = true
					continue
				}

				if (bottomCell.linkedBlock.value === currentBlock.value) {
					bottomCell.linkedBlock.delete()
					bottomCell.linkBlock(currentBlock)
					currentBlock.setValue(currentBlock.value * 2)
					currentCell.disconnectBlock()
					isStepMoved = true
				}
			}

			if (isStepMoved) isMoved = true
		} while (isStepMoved)

		if (isMoved) this.addBlock()
		this.checkLose()
	}

	checkLose() {
		const cell = this.getRandomEmptyCell()
		if (!!cell) return

		for(let i = 0; i < this.cells.length; i++) {
			const currentCell = this.cells[i]
			const leftCell = this.cells[i - 1]
			const topCell = this.cells[i - 4]
			const rigthCell = this.cells[i+1]
			const botCell = this.cells[i+4]

			if (leftCell && leftCell?.linkedBlock?.value === currentCell.linkedBlock.value) return
			if (topCell && topCell?.linkedBlock?.value === currentCell.linkedBlock.value) return
			if (rigthCell && rigthCell?.linkedBlock?.value === currentCell.linkedBlock.value) return
			if (botCell && botCell?.linkedBlock?.value === currentCell.linkedBlock.value) return
		}

		alert("You Lose! Refresh to play again")
	}
}