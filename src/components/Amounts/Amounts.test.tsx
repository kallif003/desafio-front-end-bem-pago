import * as React from "react"
import { render } from "@testing-library/react"

import { AmountsDiv } from "./"

describe("Amounts components", () => {
	it("Renders AmountsDiv properly", () => {
		const { container } = render(<AmountsDiv>Test</AmountsDiv>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
