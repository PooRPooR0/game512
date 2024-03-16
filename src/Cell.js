export default class Cell {
	constructor(gridElement) {
		this.element = document.createElement("div")
		this.element.classList.add('cell')
		gridElement.append(this.element)
	}
}