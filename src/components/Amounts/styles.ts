import styled from "styled-components"
import { Field } from "formik"

export const AmountsDiv = styled.div`
	width: 220px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`
export const AmountsLabel = styled(Field)`
	width: 4rem;
	height: 2.2rem;
	padding-left: 1rem;
`
export const ContainerAmount = styled.div`
	padding: 1rem 0 0 5rem;
	@media (min-width: 0) and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding-left: 0;
		align-items: center;
	}
	@media (min-width: 769px) and (max-width: 1024px) {
		padding-left: 5rem;
	}
`
