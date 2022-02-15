import React from 'react'
import styled from 'styled-components'

interface FooterProps {
  isTablet: boolean
  isPc: boolean
}

const FooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 60px 20px;

  @media ${({ theme }) => theme.device.pc} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 100px 80px;
  }
`
const FooterInfo = styled.div`
  color: #333333;
`
const FooterInfoTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
`

const FONTINFOCONTENT = [
  '대표 : 김민우 | 사업자등록번호 : 431-88-01287 사업자 정보 조회',
  '서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)',
  '제주특별시 서귀포시 중정로 86, 304',
  '통신판매업 신고번호 : 2019-서울강남-00301호',
]
const FooterInfoContent = styled.div`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.5;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    line-height: 1.71;
  }
`

const FooterInfoTag = styled.div`
  margin: 30px 0 20px 0;
  font-size: 12px;
  opacity: 0.8;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
  }
`

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 20px;
  }

  span {
    margin-right: 16px;
    font-size: 14px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    span {
      margin-right: 20px;
      font-size: 16px;
    }
  }
`
const FooterImages = styled.div``

const Image = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 12px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 60px;
    height: 60px;
  }
`

const Footer: React.FC<FooterProps> = ({ isTablet, isPc }) => {
  return (
    <FooterContainer>
      <FooterInfo>
        <FooterInfoTitle>(주)호두랩스 </FooterInfoTitle>
        {FONTINFOCONTENT.map((text) => (
          <FooterInfoContent key={text}>{text}</FooterInfoContent>
        ))}
        <FooterInfoTag>© Hodoo Labs. ALL RIGHTS RESERVED</FooterInfoTag>
      </FooterInfo>
      <FooterMenu>
        <div>
          <span>고객센터</span>
          <span>채팅상담</span>
        </div>
        <div>
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>환불정책</span>
        </div>
        <FooterImages>
          <Image src="/assets/footer/instagram.png" alt="insta" />
          <Image src="/assets/footer/blog.png" alt="blog" />
        </FooterImages>
      </FooterMenu>
    </FooterContainer>
  )
}

export default Footer
