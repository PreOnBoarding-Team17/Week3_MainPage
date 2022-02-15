import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0 20px;

  @media ${({ theme }) => theme.device.pc} {
    padding: 0 30px;
  }
`;

const FooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 60px 0px;
  width: 100%;

  a {
    text-decoration: none;
    color: #333333;
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 100px 30px;
  }

  @media ${({ theme }) => theme.device.pc} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
  }
`;
const FooterInfo = styled.div`
  color: #333333;
`;

const FOOTERINFOTITLE = '(주)호두랩스';
const FooterInfoTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const FOOTERINFOCONTENT = [
  '대표 : 김민우 | 사업자등록번호 : 431-88-01287',
  '서울특별시 강남구 언주로 637, 12층 (논현동, 싸이칸홀딩스타워)',
  '제주특별시 서귀포시 중정로 86, 304',
  '통신판매업 신고번호 : 2019-서울강남-00301호',
];
const FooterInfoContent = styled.div`
  font-size: 12px;
  opacity: 0.8;
  line-height: 1.5;

  a {
    text-decoration: underline;
  }

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    line-height: 1.71;
  }
`;

const FOOTERINFOTAG = '© Hodoo Labs. ALL RIGHTS RESERVED';
const FooterInfoTag = styled.div`
  margin: 30px 0 20px 0;
  font-size: 12px;
  opacity: 0.8;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
  }
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const FOOTERMENULIST = [
  ['고객센터', '채팅상담'],
  ['이용약관', '개인정보 처리방침', '환불정책'],
];
const FooterMenuList = styled.div`
  margin-bottom: 18px;

  span {
    margin-right: 16px;
    font-size: 14px;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.device.tablet} {
    span {
      margin-right: 20px;
      font-size: 16px;
    }
  }
`;

const IMAGESRC = ['/assets/footer/instagram.png', '/assets/footer/blog.png'];
const Image = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 12px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-right: 20px;
    width: 60px;
    height: 60px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInfo>
          <FooterInfoTitle>{FOOTERINFOTITLE} </FooterInfoTitle>

          {FOOTERINFOCONTENT.map((text, idx) => {
            if (idx === 0)
              return (
                <FooterInfoContent key={text}>
                  {text}
                  <Link href="/">
                    <a>사업자 정보 조회</a>
                  </Link>
                </FooterInfoContent>
              );
            return <FooterInfoContent key={text}>{text}</FooterInfoContent>;
          })}

          <FooterInfoTag>{FOOTERINFOTAG}</FooterInfoTag>
        </FooterInfo>

        <FooterMenu>
          {FOOTERMENULIST.map((list, idx) => (
            <FooterMenuList key={idx}>
              {list.map((text, index) => {
                return (
                  <span key={text + index}>
                    <Link href="">
                      <a>{text}</a>
                    </Link>
                  </span>
                );
              })}
            </FooterMenuList>
          ))}

          <div>
            <Image src={IMAGESRC[0]} alt="insta" />
            <Image src={IMAGESRC[1]} alt="blog" />
          </div>
        </FooterMenu>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
