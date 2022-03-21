import styled from "styled-components"

export const RadioDiv = styled.div`
	width: 25rem;
	margin-left: 5.5rem;
	display: flex;
	flex-direction: row;
	@media (max-width: 768px) {
		justify-content: center;
		margin: 0 0.1rem 0 0;
		width: auto;
	}
`
export const RadioContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1.1rem;
`
export const Radio = styled.div.attrs((props: { background: string }) => props)`
	width: 1rem;
	height: 1rem;
	border: solid #ccc;
	border-radius: 4rem;
	border-width: 0.125rem;
	margin: 0.125rem 0.313rem 0 0;
	background: ${(props) => props.background};
`
export const TextRadio = styled.label`
	font-size: 1.25rem;
	margin-top: 0.0312rem;
	font-weight: 500;
`
