import { useState } from "react"
import { Checkbox, CheckboxContainer, TextCheckBox } from "./"
import Icon from "@mdi/react"
import { mdiCheckBold } from "@mdi/js"

const MyCheckBox = ({ name }: any) => {
	const [checked, setChecked] = useState(false)
	const [names, setName] = useState("")

	function handleCheckboxChange(name: any) {
		setName(name)
		setChecked(!checked)
		console.log(names)
	}
	return (
		<div>
			<CheckboxContainer background={checked ? "#282e64" : "#fff"}>
				<Checkbox onClick={() => handleCheckboxChange(name)}>
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
