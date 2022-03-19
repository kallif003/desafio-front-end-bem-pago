import { render, screen } from "@testing-library/react"
import Home from "./index"

describe("testing", () => {
	it("Renders a logo", () => {
		render(<Home />)
		const text = screen.getByTestId("text")
		expect(text.innerHTML).toEqual("Hello World")
	})
})
