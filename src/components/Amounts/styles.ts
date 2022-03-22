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
	background: #ccc;
	padding: 1rem 0 0 5rem;
	@media (max-width: 768px) {
		padding-left: 2rem;
		display: flex;
		justify-content: center;
	}
	@media (max-width: 1024px) {
		padding-left: 5rem;
	}
`
