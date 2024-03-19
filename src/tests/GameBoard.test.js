import GameBoard from "../GameBoard.js";
import {expect, describe, test, beforeAll} from "vitest";
import Block from "../Block.js";

let board;

describe("GameBoard", () => {
	beforeAll(() => {
		const root = document.createElement("div")
		board = new GameBoard(root)
	})
	test("initialize board", () => {
		expect(board.element.classList.contains('board')).toBe(true)
		expect(board.cells).length(16)
		expect(board.blocks).length(1)
	})
	test("get empty cell", () => {
		const cell = board.getRandomEmptyCell()
		expect(cell.isEmpty()).toBe(true)
	})
	test("add block", () => {
		board.addBlock()
		expect(board.blocks.length > 0).toBe(true)
		expect(board.cells.filter((cell) => cell.isEmpty())).length(15)
	})
})