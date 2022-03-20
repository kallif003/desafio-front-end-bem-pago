import { AmountsLabel, AmountsDiv } from "./"
import { PlusAndMinusButton } from "../Buttons"
import { useState } from "react"

const Amounts = () => {
	const [amounts, setAumounts] = useState(0)

	function addition() {
		setAumounts((amounts) => amounts + 1)
		console.log(typeof amounts)
	}

	function subtraction() {
		if (amounts > 0) setAumounts((amounts) => amounts - 1)
	}
	return (
		<AmountsDiv>
			<PlusAndMinusButton onClick={subtraction} data-testid="subtraction">
				-
			</PlusAndMinusButton>
			<AmountsLabel>{amounts}</AmountsLabel>
			<PlusAndMinusButton onClick={addition} data-testid="addition">
				+
			</PlusAndMinusButton>
		</AmountsDiv>
	)
}

export default Amounts
