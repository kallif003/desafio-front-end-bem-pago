import * as React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { SubmitButton, PlusAndMinusButton } from "./index"

describe("Buttons components", () => {
	it("Renders Submit button properly", () => {
		const { container } = render(<SubmitButton>Enviar</SubmitButton>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("Renders Plus and minus button properly", () => {
		const { container } = render(<PlusAndMinusButton>+</PlusAndMinusButton>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("test Submit button ", () => {
		const { container } = render(<SubmitButton>Enviar</SubmitButton>)
		userEvent.click(container)
	})
	it("test Plus and minus button ", () => {
		const { container } = render(<PlusAndMinusButton>+</PlusAndMinusButton>)
		userEvent.click(container)
	})
})
