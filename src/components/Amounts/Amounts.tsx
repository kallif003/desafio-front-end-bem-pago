import { AmountsLabel, AmountsDiv } from "./"
import { PlusAndMinusButton } from "../Buttons"

const Amounts = ({ setFieldValue, value }: any) => {
	// const { addition, subtraction, amounts }: any = useContext(AuthContext)

	const onPlus = () => {
		setFieldValue("amount", Number(value) + 1)
	}

	const onMinus = () => {
		if (value > 0) setFieldValue("amount", Number(value) - 1)
	}

	return (
		<AmountsDiv>
			<PlusAndMinusButton onClick={onMinus} type="button">
				-
			</PlusAndMinusButton>
			<AmountsLabel name="amount" min={0} type="number" />
			<PlusAndMinusButton onClick={onPlus} type="button">
				+
			</PlusAndMinusButton>
		</AmountsDiv>
	)
}

export default Amounts
