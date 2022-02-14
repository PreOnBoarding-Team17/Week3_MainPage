import React from 'react'
import styled, { keyframes } from 'styled-components'

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;

  border: 0.1px solid #fff;
  background-image: url('assets/main-tablet-bg.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0 auto;


  @media ${({ theme }) => theme.device.pc} {
    background-position: center center;
  }

  @media ${({ theme }) => theme.device.tablet} {
    background-position: 75% center;
    background-image: url('assets/main-bg.jpg');

`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  margin: 0 auto;

  line-height: 1.33;
  font-size: 36px;
  font-weight: bold;

  padding: 0;
  margin-top: 442px;
  padding: 0 30px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 60px;
    margin-top: 497px;
  }

  @media ${({ theme }) => theme.device.pc} {
    padding: 0;
    margin-top: 230px;
    max-width: 1140px;
  }
`

const MAINCONTENTTEXT = [
  ['책 읽는 재미,'],
  ['땅콩스쿨이', '#fec442'],
  ['만들어줄게요!'],
]

const MainContentText = styled.span`
  color: ${({ color }) => (color ? color : '#fff')};
  span {
    color: #fff;
  }
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
  width: 56px;
  height: 56px;
  position: absolute;
  left: 47.5%;
  bottom: 50px;
  animation: 0.7s ease-in 0s infinite alternate none running ${mouseMove};
  background-image: url('assets/mouse.png');
  background-size: cover;

  @media ${({ theme }) => theme.device.tablet} {
    height: 72px;
    width: 72px;
  }
`

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainContent>
        {MAINCONTENTTEXT.map((data) => (
          <MainContentText key={data[0]} color={data[1]}>
            {data[1] ? (
              <div>
                {data[0].substring(0, data[0].length - 1)}
                <span>{data[0][data[0].length - 1]}</span>
              </div>
            ) : (
              data[0]
            )}
          </MainContentText>
        ))}
      </MainContent>

      <MainImage></MainImage>
    </MainContainer>
  )
}

export default Main
