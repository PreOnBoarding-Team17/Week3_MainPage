import React from 'react'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url('assets/main-bg.jpg');
  background-size: cover;
  background-position: center;
  z-index: 5;

  @media (max-width: 1200px) {
    background-position: 75% center;
  }
  @media (max-width: 767px) {
    background-position: center;
    background-image: url('assets/main-mobile-bg.jpg');
  }
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  font-size: 60px;
  font-weight: bold;
  line-height: 1.33;
  position: absolute;
  left: 145px;
  top: 235px;

  @media (max-width: 1200px) {
    left: 30px;
    top: 475px;
  }
  @media (max-width: 767px) {
    font-size: 36px;
    font-weight: 500;
  }
`

const MAINCONTENTTEXT = [
  ['책 읽는 재미,'],
  ['땅콩스쿨이', '#fec442'],
  ['만들어줄게요!'],
]

const MainContentText = styled.span`
  color: ${({ color }) => (color ? color : '#fff')};
`

const mouseMove = keyframes`
    from {
      transform: translateY(-60%);
    }
    
    to {
      transform: translateY(0%);
    }
`

const MainImage = styled.div`
  position: absolute;
  left: 47.5%;
  bottom: 50px;
  animation: 0.7s ease-in 0s infinite alternate none running ${mouseMove};

  @media (max-width: 767px) {
    height: 54px;
    width: 54px;
  }
`

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainContent>
        {MAINCONTENTTEXT.map((data) => (
          <MainContentText key={data[0]} color={data[1]}>
            {data[0]}
          </MainContentText>
        ))}
      </MainContent>

      <MainImage>
        <Image src="/assets/mouse.png" alt="mouse" width="72px" height="72px" />
      </MainImage>
    </MainContainer>
  )
}

export default Main
