/* eslint-disable no-unused-vars */
import { useState } from "react"
import { RadioContainer, Radio, TextRadio } from "./"

const MyRadio = ({ name }: any) => {
	const [checked, setChecked] = useState(false)
	const [radio, setRadio] = useState("")

	function handleRadioChange(name: any) {
		setRadio(name)
		setChecked(!checked)
		if (!checked) setRadio("")
	}
	return (
		<div>
			<RadioContainer>
				<Radio
					onClick={() => handleRadioChange(name)}
					background={checked ? "#202552" : "#fff"}
				/>
				<TextRadio>{name}</TextRadio>
			</RadioContainer>
		</div>
	)
}

export default MyRadio
