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
			<PlusAndMinusButton onClick={onMinus} type="button" data-cy="minus">
				-
			</PlusAndMinusButton>
			<AmountsLabel name="amount" min={0} type="number" data-cy="label" />
			<PlusAndMinusButton onClick={onPlus} type="button" data-cy="plus">
				+
			</PlusAndMinusButton>
		</AmountsDiv>
	)
}

export default Amounts
