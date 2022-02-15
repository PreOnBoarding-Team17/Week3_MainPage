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

	.swiper {
		width: 320px;
    margin-top: 182px;
		overflow: hidden;
	}

	.swiper-wrapper {
		width: 100%;
		transition-duration: 0ms;
    transform: translate3d(-1920px, 0px, 0px);
    height: 333px;
		align-items: flex-start;
    transition-property: transform,height;
	}
	.swiper-slide {
		width: 100vw;
	}
	`;

export default GlobalStyles;
