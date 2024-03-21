import GameBoard from "../GameBoard.js";
import {expect, describe, test, beforeEach, vi, afterEach} from "vitest";
import Block from "../Block.js";

let board;
let spy;

describe("GameBoard", () => {
	beforeEach(() => {
		spy = vi.spyOn(Math, 'random')
		spy.mockImplementation(() => 0)
		const root = document.createElement("div")
		board = new GameBoard(root)
	})
	afterEach(() => {
		vi.restoreAllMocks()
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

	// move right tests

	// [4, 0, 0, 0] -> [0, 0, 0, 4]
	test("move right base", () => {
		expect(board.cells[0].isEmpty()).toBe(false)
		board.moveRight()
		expect(board.cells[0].isEmpty()).toBe(true)
		expect(board.cells[3].isEmpty()).toBe(false)
	})

	// [4, 4, 0, 0] -> [0, 0, 0, 8]
	test("move right merge", () => {
		expect(board.cells[0].isEmpty()).toBe(false)
		board.addBlock()
		board.moveRight()
		expect(board.cells[0].isEmpty()).toBe(true)
		expect(board.cells[3].isEmpty()).toBe(false)
		expect(board.cells[3].linkedBlock.value).toBe(8)
	})

	// [4, 2, 0, 0] -> [0, 0, 4, 2]
	test("move right several", () => {
		expect(board.cells[0].isEmpty()).toBe(false)
		spy.mockImplementation(() => 0.7)
		board.cells[1].linkBlock(new Block(board.element))
		board.moveRight()
		expect(board.cells[0].isEmpty()).toBe(true)
		expect(board.cells[2].isEmpty()).toBe(false)
		expect(board.cells[3].isEmpty()).toBe(false)
	})
})