import GlobalStyles from "styles/GlobalStyles";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { device } from "styles/Mixin";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>땅콩스쿨</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="원티드 프리온보딩 프론트엔드 코스 다섯번째 과제"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="땅콩스쿨" />
        <meta property="og:url" content="https://ddangkongschool.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ddangkongschool.com/meta_img.png"
        />
        <meta
          property="og:description"
          content="캐릭터 선생님과 함께 실시간으로 즐기는 독서클래스"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/earlyaccess/notosanskr.css"
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={{ device }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
