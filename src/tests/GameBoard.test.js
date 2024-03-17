import GameBoard from "../GameBoard.js";
import {expect, describe, test, beforeAll} from "vitest";

let board;

describe("GameBoard", () => {
	beforeAll(() => {
		const root = document.createElement("div")
		board = new GameBoard(root)
	})
	test("initialize board", () => {
		expect(board.element.classList.contains('board')).toBe(true)
		expect(board.cells).length(16)

		const cell = board.getRandomEmptyCell()
		expect(cell.isEmpty()).toBe(true)
	})
})