import * as React from "react"
import { render } from "@testing-library/react"

import { CheckboxDiv, CheckboxContainer, TextCheckBox } from "./"

describe("Checkbox components", () => {
	it("Renders CheckboxDiv properly", () => {
		const { container } = render(<CheckboxDiv>Test</CheckboxDiv>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("Renders CheckboxContainer properly", () => {
		const { container } = render(<CheckboxContainer>Test</CheckboxContainer>)
		expect(container.firstChild).toMatchSnapshot()
	})

	it("Renders TextCheckBox properly", () => {
		const { container } = render(<TextCheckBox>Test</TextCheckBox>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
