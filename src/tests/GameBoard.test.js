import GameBoard from "../GameBoard.js";
import {expect, describe, test, beforeEach} from "vitest";

let board;

describe("GameBoard", () => {
	beforeEach(() => {
		const root = document.createElement("div")
		board = new GameBoard(root)
	})
	test("initialize board", () => {
		expect(board.element.classList.contains('board')).toBe(true)
		expect(board.cells).length(16)
		expect(board.cells.filter((cell) => cell.isEmpty())).length(15)
	})
	test("get empty cell", () => {
		const cell = board.getRandomEmptyCell()
		expect(cell.isEmpty()).toBe(true)
	})
	test("add block", () => {
		board.addBlock()
		expect(board.cells.filter((cell) => cell.isEmpty())).length(14)
	})
})