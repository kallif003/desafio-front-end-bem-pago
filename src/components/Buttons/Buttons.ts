import styled from "styled-components"

export const SubmitButton = styled.button`
	width: 8em;
	height: 2em;
	background: #2f3676;
	color: #fff;
	border-radius: 5px;
	border: solid #282e64;
	border-width: 1px;
	&:hover {
		background: #202552;
	}
	&:active {
		transform: scale(0.9);
	}
`
export const PlusAndMinusButton = styled.button`
	width: 2em;
	height: 2em;
	background: #2f3676;
	padding: 5px;
	color: #fff;
	border-radius: 5px;
	border: solid #282e64;
	border-width: 1px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	&:hover {
		background: #202552;
	}
	&:active {
		transform: scale(0.9);
	}
`
