import styled from "styled-components"

export const Header = styled.header`
	background: #2f3676;
	border-bottom-right-radius: 100%;
	border-bottom-left-radius: 80%;
	padding: 1rem 8rem 2rem 0rem;
	display: flex;
	justify-content: space-around;
	@media (max-width: 768px) {
		flex-direction: column;
		align-self: center;
		padding: 2rem 2rem 1rem 2rem;
		border-bottom-right-radius: 20%;
		border-bottom-left-radius: 20%;
	}
`
export const HeaderTitle = styled.div`
	width: 30rem;
	height: 10rem;
	margin-top: 2rem;
	padding: 0 0 0 1rem;
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 1024px) {
		margin-top: 5rem;
	}
	@media (max-width: 1279px) {
		padding: 0rem 0 5rem 5.9rem;
		height: 14rem;
		width: 45rem;
	}
	@media (min-width: 1279px) {
		padding: 0rem 0 5rem 2.6rem;
	} ;
`
export const HeaderImage = styled.div`
	@media (max-width: 1024px) {
	}
`
export const HeaderContainerImage = styled.div`
	display: flex;
	flex-direction: row;
	align-self: center;
`
