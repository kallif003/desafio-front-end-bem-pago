import styled from "styled-components"

export const InputText = styled.textarea.attrs({
	name: "inputText",
	rows: 10,
	cols: 80,
	placeholder: "Digite aqui suas observações:",
})`
	background: #dde3e8;
	margin: 2em;
	padding: 1em;
	border-radius: 0.31em;
	width: 90%;
	resize: none;
`
