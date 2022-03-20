import * as React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { RadioDiv, Radio, TextRadio, RadioContainer } from "./"

describe("Radio components", () => {
	it("Renders RadioDiv properly", () => {
		const { container } = render(<RadioDiv>Test</RadioDiv>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("Renders Radio properly", () => {
		const { container } = render(<Radio>Test</Radio>)
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
	it("test Radio button ", () => {
		const { container } = render(<Radio>Test</Radio>)
		userEvent.click(container)
	})
})
