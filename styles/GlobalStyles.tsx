import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	${reset};
	html {
		font-family: 'Noto Sans KR', sans-serif;
		overflow-x: hidden;
		color:rgb(51, 51, 51);
	}
	div, span {
		box-sizing: border-box;
	}
	`;

export default GlobalStyles;
