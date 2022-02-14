import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	${reset};
	@import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
	html {
		font-family: 'Noto Sans KR', sans-serif;
	}
	`;

export default GlobalStyles;
