import * as React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { CheckboxDiv, CheckboxContainer, Checkbox, TextCheckBox } from "./"

describe("Checkbox components", () => {
	it("Renders CheckboxDiv properly", () => {
		const { container } = render(<CheckboxDiv>Test</CheckboxDiv>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("Renders CheckboxContainer properly", () => {
		const { container } = render(<CheckboxContainer>Test</CheckboxContainer>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("Renders Checkbox properly", () => {
		const { container } = render(<Checkbox>Test</Checkbox>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("Renders TextCheckBox properly", () => {
		const { container } = render(<TextCheckBox>Test</TextCheckBox>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("test Checkbox button ", () => {
		const { container } = render(<Checkbox>Test</Checkbox>)
		userEvent.click(container)
	})
})
