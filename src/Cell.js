export default class Cell {
	constructor(gridElement, x, y) {
		this.x = x
		this.y = y
		this.linkedBlock = null

		this.element = document.createElement("div")
		this.element.classList.add('cell')
		gridElement.append(this.element)
	}

	isEmpty() {
		return this.linkedBlock === null
	}

	linkBlock(block) {
		this.linkedBlock = block
		this.linkedBlock.setPosition(this.x, this.y)
	}
}