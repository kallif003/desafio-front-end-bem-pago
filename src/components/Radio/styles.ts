import styled from "styled-components"

export const RadioDiv = styled.div`
	padding: 0.31em;
	width: 25em;
	height: auto;
	justify-content: space-evenly;
	margin: 0.5em 0em 0em 1.5em;
	padding: 1px 20px 1px 2px;
	display: flex;
`
export const RadioContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1px 40px 6px;
	margin: 0.5em;
	width: 8.2em;
	height: 2.5em;
	border-radius: 5px;
`
export const Radio = styled.div.attrs((props: { background: string }) => props)`
	width: 1em;
	height: 1em;
	border: solid #ccc;
	border-radius: 20px;
	border-width: 2px;
	margin: 2px 5px 0px 0px;
	display: flex;
	align-items: center;
	padding: 2px;
	background: ${(props) => props.background};
`
export const TextRadio = styled.label`
	font-size: 20px;
	margin-top: 0.5px;
	font-weight: 500;
`
