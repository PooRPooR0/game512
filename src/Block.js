export default class Block {
	constructor(gridElement) {
		this.element = document.createElement("div")
		this.element.classList.add('block')
		this.setValue(Math.random() > 0.5 ? 2 : 4)
		gridElement.append(this.element)
		this.x = null
		this.y = null
	}

	setPosition(x, y) {
		this.x = x
		this.y = y

		this.element.style.setProperty('--x', x)
		this.element.style.setProperty('--y', y)
	}

	setValue(value){
		this.value = value
		this.element.textContent = `${this.value}`
		this.element.style.setProperty('--bright', 100 - Math.log2(+this.value) * 4.5)
		if (+value === 512) alert("Victory! 512")
	}

	delete() {
		this.element.remove()
	}
}