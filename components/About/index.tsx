import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  background-color: #ffb100;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 90px 20px 100px 20px;
  color: #fff;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 130px 30px 150px 30px;
  }
`

const Image = styled.img`
  width: 67px;
  height: 50px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 134px;
    height: 100px;
  }
`

const AboutTitle = styled.div`
  font-size: 30px;
  margin-bottom: 45px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
    margin-bottom: 70px;
  }
`

const AboutContent = styled.div`
  white-space: pre-wrap;
  text-align: center;
  font-size: 16px;
  line-height: 1.75;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
    line-height: 1.67;
  }
`
const ABOUTCONTENTTEXT = [
  '실시간(LIVE)으로, 아이들이 좋아하는, 캐릭터 선생님을 통해,\n 친구들과 함께 창의독서, 퀴즈 등을 재미있게 즐길 수 있는 온라인 서비스입니다.',
  '실시간(LIVE)으로, 아이들이 좋아하는\n 캐릭터 선생님을 통해,\n 친구들과 함께 창의독서, 퀴즈 등을\n 재미있게 즐길 수 있 는 온라인 서비스입니다.',
]

interface AboutProps {
  isPc: boolean
}

const About: React.FC<AboutProps> = ({ isPc }) => {
  return (
    <AboutContainer>
      <Image src="/assets/second-logo.gif" alt="logo" />

      <AboutTitle>땅콩스쿨이란?</AboutTitle>

      <AboutContent>
        {isPc ? ABOUTCONTENTTEXT[0] : ABOUTCONTENTTEXT[1]}
      </AboutContent>
    </AboutContainer>
  )
}

export default About
