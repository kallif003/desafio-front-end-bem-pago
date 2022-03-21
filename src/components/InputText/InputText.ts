import styled from "styled-components"

export const InputText = styled.textarea.attrs({
	name: "inputText",
	rows: 10,
	cols: 80,
	placeholder: "Digite aqui suas observações:",
})`
	background: #dde3e8;
	justify-self: center;
	align-self: center;
	padding: 1rem;
	width: 95%;
	border-radius: 0.31rem;
	resize: none;

	&:focus {
		outline: none;
		border-color: #2f3676;
		box-shadow: 0 0 10px #2f3676;
	}
	@media (max-width: 768px) {
		height: 100px;
	}
`
export const ContainerInputText = styled.div`
	padding: 1rem 0 2rem 6.5rem;
	@media (max-width: 768px) {
		padding: 1rem 1rem 2rem 2rem;
	}
`
