import * as React from "react"
import { render } from "@testing-library/react"
import { H1, H2 } from "./"

describe("typography components", () => {
	it("Renders H1 components", () => {
		const { container } = render(<H1>Test</H1>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("Renders H2 components", () => {
		const { container } = render(<H2>Test</H2>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
