import React from 'react'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('/assets/main-bg.jpg');
  background-size: cover;
  background-position: 75% center;
  z-index: 5;
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  position: absolute;
  left: 145px;
  top: 235px;
`

const MAINCONTENTTEXT = [
  ['책 읽는 재미,'],
  ['땅콩스쿨이', '#fec442'],
  ['만들어줄게요!'],
]

const MainContentText = styled.span`
  font-size: 60px;
  font-weight: bold;
  line-height: 1.33;
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
