import styled from "styled-components"

export const Header = styled.header`
	width: 100vw;
	height: 11rem;
	background: #2f3676;
	border-bottom-right-radius: 99%;
	border-bottom-left-radius: 45%;
	padding: 1rem 8rem 0rem 3rem;
	display: flex;
	justify-content: space-between;
	@media (max-width: 768px) {
		justify-content: center;
	} ;
`
export const HeaderTitle = styled.div`
	width: 20rem;
	height: 13rem;
	font-size: 0.625rem;
	line-height: 1.5rem;
	@media (max-width: 768px) {
		width: 50rem;
		margin-left: 2.5rem;
		margin-top: 2rem;
		font-size: 0.5rem;
	} ;
`
