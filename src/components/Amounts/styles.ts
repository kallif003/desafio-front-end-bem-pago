import styled from "styled-components"

export const AmountsDiv = styled.div`
	width: 20rem;
	margin: 1.5rem 0 0 3.5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	@media (max-width: 768px) {
		margin: 1.5rem 0 0 0;
	}
`
export const AmountsLabel = styled.label`
	background: #dde3e8;
	width: 3rem;
	height: 1.5rem;
	text-align: center;
	border-radius: 0.31rem;
	border: 0.1rem solid #2f3676;
	margin-top: 0.4rem;
`
export const ContainerAmount = styled.div`
	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
	} ;
`
