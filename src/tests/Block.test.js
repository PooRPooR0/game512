import GameBoard from "../GameBoard.js";
import {expect, describe, test, beforeEach, beforeAll} from "vitest";
import Cell from "../Cell.js";
import Block from "../Block.js";

let board
let block;

describe("Block", () => {
	beforeAll(() => {
		const root = document.createElement("div")
		board = new GameBoard(root)
	})
	beforeEach(() => {
		block = new Block(board.element)
	})
	test("setPosition", () => {
		block.setPosition(1, 2)
		expect(block.x).toBe(1)
		expect(block.y).toBe(2)
	})
	test("setValue", () => {
		block.setValue(16)
		expect(block.value).toBe(16)
		expect(block.element.textContent).toBe('16')
	})
})