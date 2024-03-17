import GameBoard from "../GameBoard.js";
import {expect, describe, test, beforeEach, beforeAll} from "vitest";
import Cell from "../Cell.js";
import Block from "../Block.js";

let board
let cell;

describe("GameBoard", () => {
	beforeAll(() => {
		const root = document.createElement("div")
		board = new GameBoard(root)
	})
	beforeEach(() => {
		cell = new Cell(board.element)
	})
	test("initialize cell", () => {
		expect(cell.element.classList.contains('cell')).toBe(true)
		expect(cell.isEmpty()).toBe(true)
	})
	test("isEmpty", () => {
		const block = new Block(board.element)
		expect(cell.isEmpty()).toBe(true)
		cell.linkBlock(block)
		expect(cell.isEmpty()).toBe(false)
	})
})