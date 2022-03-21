import { AmountsLabel, AmountsDiv } from "./"
import { PlusAndMinusButton } from "../Buttons"
import { useContext } from "react"
import { AuthContext } from "../../context/Auth"

const Amounts = () => {
	const { addition, subtraction, amounts }: any = useContext(AuthContext)

	return (
		<AmountsDiv>
			<PlusAndMinusButton
				onClick={subtraction}
				data-testid="subtraction"
				type="button">
				-
			</PlusAndMinusButton>
			<AmountsLabel>{amounts}</AmountsLabel>
			<PlusAndMinusButton
				onClick={addition}
				data-testid="addition"
				type="button">
				+
			</PlusAndMinusButton>
		</AmountsDiv>
	)
}

export default Amounts
