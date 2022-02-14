import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const AboutContainer = styled.div`
  box-sizing: border-box;
  background-color: #ffb100;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px 30px 150px 30px;
  color: #fff;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 90px 20px 100px 20px;
  }
`

const AboutImage = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    width: 67px;
    height: 50px;
  }
`

const AboutTitle = styled.div`
  font-size: 50px;
  margin-bottom: 70px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 30px;
    margin-bottom: 45px;
  }
`

const AboutContent = styled.div`
  display: flex;

  jsutify-content: center;
  align-items: center;
  font-size: 24px;
  line-height: 1.67;
  white-space: pre-wrap;
  font-weight: 500;

  @media ${({ theme }) => theme.device.pc} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
    line-height: 1.75;
  }
`
const ABOUTCONTENTTEXT = [
  ['실시간(LIVE)으로, 아이들이 좋아하는', '캐릭터 선생님을 통해,'],
  [
    '친구들과 함께 창의독서, 퀴즈 등을',
    '재미있게 즐길 수 있는 온라인 서비스입니다.',
  ],
]

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutImage>
        <Image
          src="/assets/white-logo.png"
          alt="white-logo"
          width={134}
          height={100}
        />
      </AboutImage>

      <AboutTitle>땅콩스쿨이란?</AboutTitle>

      {ABOUTCONTENTTEXT.map((text) => (
        <AboutContent key={text[0] + text[1]}>
          <div>{text[0]}</div>
          <div>{text[1]}</div>
        </AboutContent>
      ))}
    </AboutContainer>
  )
}

export default About
