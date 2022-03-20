import styled from "styled-components"

export const RadioDiv = styled.div`
	width: 25rem;
	height: auto;
	justify-content: space-evenly;
	margin: 0.5rem 0 0 1.5rem;
	padding: 0.067rem 4em 0.067em 0.067rem;
	display: flex;
`
export const RadioContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0.067rem 2.5rem 0.375rem;
	margin: 0.5rem;
	width: 8.2rem;
	height: 2.5rem;
	border-radius: 0.313rem;
`
export const Radio = styled.div.attrs((props: { background: string }) => props)`
	width: 1rem;
	height: 1rem;
	border: solid #ccc;
	border-radius: 4rem;
	border-width: 0.125rem;
	margin: 0.125rem 0.313rem 0 0;
	display: flex;
	align-items: center;
	padding: 0.125rem;
	background: ${(props) => props.background};
`
export const TextRadio = styled.label`
	font-size: 1.25rem;
	margin-top: 0.0312rem;
	font-weight: 500;
`
