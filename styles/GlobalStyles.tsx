import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	${reset};
	html {
		font-family: 'Noto Sans KR', sans-serif;
	}

	.swiper-wrapper {
		width: 100%;
	}
	.swiper-slide {
		width: 100vw;
	}
	`;

export default GlobalStyles;
