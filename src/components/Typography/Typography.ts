import styled from "styled-components"

export const H1 = styled.h1.attrs(
	(props: { color: string; fontWeight: string }) => props
)`
	font-size: 2.5rem;
	color: ${(props) => props.color};
	font-weight: ${(props) => props.fontWeight};
	@media (max-width: 768px) {
		font-weight: normal;
	}
	@media (max-width: 1024px) {
		font-size: 2rem;
		line-height: 2.5rem;
	}
`
export const H2 = styled.h2`
	font-size: 1.2rem;
	padding: 3rem 0 0 6.6rem;
	font-weight: 500;
	@media (max-width: 768px) {
		text-align: center;
		padding: 3rem 0 0 0;
	}
`
