import styled from "styled-components"

export const CheckboxDiv = styled.div`
	padding: 0.31rem;
	width: auto;
	display: flex;
	flex-direction: column;
	margin: 1rem 0 0 5.8rem;
	@media (max-width: 768px) {
		align-items: center;
		margin-left: 0;
	}
`

export const CheckboxContainer = styled.div.attrs(
	(props: { background: string }) => props
)`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0.067rem 2.5rem 0.38rem 0.067rem;
	margin: 0.5rem;
	width: 8.2rem;

	border-radius: 0.31rem;
	background: ${(props) => props.background};
`
export const Checkbox = styled.button`
	width: 1.2rem;
	height: 1.2rem;
	border: solid #ccc;
	border-radius: 0.25rem;
	border-width: 0.125rem;
	margin-top: 0.5rem;
	display: flex;
	align-items: center;
	padding: 0.125rem;
	background: #fff;
`
export const TextCheckBox = styled.label.attrs(
	(props: { color: string }) => props
)`
	font-size: 1.25rem;
	color: ${(props) => props.color};
	margin-top: 0.156rem;
	font-weight: 500;
`
