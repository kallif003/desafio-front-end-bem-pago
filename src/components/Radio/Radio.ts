import styled from "styled-components"
import { Field } from "formik"

export const RadioDiv = styled.div`
	display: flex;
	flex-direction: row;
	padding-left: 5.4rem;
	@media (max-width: 768px) {
		justify-content: center;
		padding-left: 2.4rem;
	}
`
export const RadioContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.1rem;
`
export const Radio = styled(Field)`
	width: 1rem;
	height: 1rem;
	margin: 0.125rem 0.313rem 0 0;
`
export const TextRadio = styled.label`
	font-size: 1.25rem;
	margin: 0.0312rem 2rem 0 0;
	font-weight: 500;
	color: #000;
`
