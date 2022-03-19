import * as React from "react"
import { render } from "@testing-library/react"
import { InputText } from "./"

describe("Input Text components", () => {
	it("Renders Input Text components", () => {
		const { container } = render(<InputText>Test</InputText>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
