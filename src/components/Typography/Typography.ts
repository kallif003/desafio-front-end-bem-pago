import styled from "styled-components"

export const H1 = styled.h1.attrs(
	(props: { color: string; font: string }) => props
)`
	font-size: 2rem;
	color: ${(props) => props.color};
	font-weight: ${(props) => props.font};
`
export const H2 = styled.h2`
	font-size: 1.2rem;
	margin: 2rem 0 0 2.6rem;
`
