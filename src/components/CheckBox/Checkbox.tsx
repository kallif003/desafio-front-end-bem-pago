/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Checkbox, CheckboxContainer, TextCheckBox } from "./"
import Icon from "@mdi/react"
import { mdiCheckBold } from "@mdi/js"

const MyCheckBox = ({ name, disable }: any) => {
	const [checked, setChecked] = useState(false)
	const [checkbox, setCheckbox] = useState("")

	function handleCheckboxChange(name: any) {
		setCheckbox(name)
		setChecked(!checked)
		if (!checked) setCheckbox("")
	}

	return (
		<div>
			<CheckboxContainer background={checked ? "#282e64" : "#ddd"}>
				<Checkbox
					onClick={() => handleCheckboxChange(name)}
					data-testid="check">
					{checked ? (
						<Icon
							path={mdiCheckBold}
							title="User Profile"
							size="10px"
							color="green"
						/>
					) : (
						""
					)}
				</Checkbox>
				<TextCheckBox color={checked ? "#fff" : "#000"}>{name}</TextCheckBox>
			</CheckboxContainer>
		</div>
	)
}

export default MyCheckBox
