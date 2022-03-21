import * as React from "react"
import { render } from "@testing-library/react"

import { RadioDiv, TextRadio, RadioContainer } from "./"

describe("Radio components", () => {
	it("Renders RadioDiv properly", () => {
		const { container } = render(<RadioDiv>Test</RadioDiv>)
		expect(container.firstChild).toMatchSnapshot()
	})

	it("Renders TextRadio properly", () => {
		const { container } = render(<TextRadio>Test</TextRadio>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("Renders RadioContainer properly", () => {
		const { container } = render(<RadioContainer>Test</RadioContainer>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
