import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { AmountsDiv, AmountsLabel } from "./"
import Aumounts from "./Amounts"

describe("Amounts components", () => {
	it("Renders AmountsDiv properly", () => {
		const { container } = render(<AmountsDiv>Test</AmountsDiv>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("Renders AmountsLabel properly", () => {
		const { container } = render(<AmountsLabel>Test</AmountsLabel>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("test button ", () => {
		render(<Aumounts />)
		const button = screen.getByTestId("subtraction")
		userEvent.click(button)
	})
	it("test button ", () => {
		render(<Aumounts />)
		const button = screen.getByTestId("addition")
		userEvent.click(button)
	})
})
