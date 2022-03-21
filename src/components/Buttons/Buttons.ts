import styled from "styled-components"

export const SubmitButton = styled.button`
	width: 10rem;
	height: 2.5rem;
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
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		background: #202552;
	}
	&:active {
		transform: scale(0.9);
	}
`
export const ContainerButton = styled.div`
	width: 110vw;
	display: flex;
	justify-content: right;
	padding-right: 3.5rem;
	@media (max-width: 768px) {
		justify-content: center;
		padding-left: 2rem;
	}
	@media (max-width: 1024px) {
		padding-right: 3rem;
	}
`
