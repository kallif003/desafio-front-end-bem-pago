import styled from "styled-components"

export const Header = styled.div`
	width: 100vw;
	height: 11em;
	background: #2f3676;
	border-bottom-right-radius: 99%;
	border-bottom-left-radius: 45%;
	padding: 1em 8em 0em 3em;
	display: inline-flex;
	justify-content: space-between;
	@media (max-width: 768px) {
		justify-content: center;
	} ;
`
export const HeaderTitle = styled.div`
	width: 20em;
	height: 13em;
	font-size: 10px;
	line-height: 1.5em;
	@media (max-width: 768px) {
		width: 50em;
		margin-left: 2.5em;
		margin-top: 2em;
		font-size: 8px;
	} ;
`
