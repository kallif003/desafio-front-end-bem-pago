import styled from "styled-components"

export const SubmitButton = styled.button`
	width: 8rem;
	height: 2rem;
	background: #2f3676;
	color: #fff;
	border-radius: 0.313rem;
	border: solid #282e64;
	border-width: 0.063rem;
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
	padding: 0.313rem;
	color: #fff;
	border-radius: 0.313rem;
	border: solid #282e64;
	border-width: 0.063rem;
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
