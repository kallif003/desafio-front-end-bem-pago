import * as React from "react"
import { render } from "@testing-library/react"

import { Footer } from "./index"

describe("Header components", () => {
	it("Renders Header properly", () => {
		const { container } = render(<Footer>Test</Footer>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
