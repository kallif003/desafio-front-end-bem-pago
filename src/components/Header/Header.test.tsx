import * as React from "react"
import { render } from "@testing-library/react"

import { Header, HeaderTitle } from "./index"

describe("Header components", () => {
	it("Renders Header properly", () => {
		const { container } = render(<Header>Test</Header>)
		expect(container.firstChild).toMatchSnapshot()
	})
})

describe("Header components", () => {
	it("Renders HeaderTitle properly", () => {
		const { container } = render(<HeaderTitle>Test</HeaderTitle>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
