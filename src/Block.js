export default class Block {
	constructor(gridElement) {
		this.element = document.createElement("div")
		this.element.classList.add('block')
		this.value = Math.random() > 0.5 ? 2 : 4
		this.element.textContent = `${this.value}`
		gridElement.append(this.element)
	}

}