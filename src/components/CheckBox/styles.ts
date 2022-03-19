import styled from "styled-components"

export const CheckboxDiv = styled.div`
	padding: 0.31em;
	width: 10em;
	height: auto;
	justify-content: center;
	margin: 0.5em;
`

export const CheckboxContainer = styled.div.attrs(
	(props: { background: string }) => props
)`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1px 20px 6px;
	margin: 0.5em;
	width: 8.2em;
	height: 2.5em;
	border-radius: 5px;
	background: ${(props) => props.background};
`
export const Checkbox = styled.div`
	width: 1.2em;
	height: 1.2em;
	border: solid #ccc;
	border-radius: 4px;
	border-width: 2px;
	margin: 0px 5px 0px 0px;
	display: flex;
	align-items: center;
	padding: 2px;
`
export const TextCheckBox = styled.label.attrs(
	(props: { color: string }) => props
)`
	font-size: 20px;
	color: ${(props) => props.color};
	margin-top: 2.5px;
	font-weight: 500;
`
