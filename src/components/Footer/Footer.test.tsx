import * as React from "react"
import { render } from "@testing-library/react"

import { Footer } from "./"

describe("Footer components", () => {
	it("Renders Footer properly", () => {
		const { container } = render(<Footer>Test</Footer>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
