import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	${reset};
	html {
		font-family: 'Noto Sans KR', sans-serif;
		overflow-x: hidden;
	}
	div, span {
		box-sizing: border-box;
	}
	`;

export default GlobalStyles;
