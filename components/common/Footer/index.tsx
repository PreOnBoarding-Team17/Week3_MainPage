import Link from 'next/link';
import styled from 'styled-components';
import {
  FOOTER_INFO_TITLE,
  FOOTER_INFO_CONTENT,
  FOOTER_INFO_TAG,
  FOOTER_MENU_LIST,
  FOOTER_IMAGE_SRC,
} from 'utils/constants';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Info>
          <InfoTitle>{FOOTER_INFO_TITLE} </InfoTitle>
          {FOOTER_INFO_CONTENT.map((text, index) => {
            if (index === 0)
              return (
                <InfoContents key={text}>
                  {text}
                  <Link href="/">
                    <a>사업자 정보 조회</a>
                  </Link>
                </InfoContents>
              );
            return <InfoContents key={text}>{text}</InfoContents>;
          })}
          <InfoTag>{FOOTER_INFO_TAG}</InfoTag>
        </Info>
        <Menu>
          {FOOTER_MENU_LIST.map((list, index) => (
            <MenuList key={index}>
              {list.map((text, index) => {
                return (
                  <span key={text + index}>
                    <Link href="">
                      <a>{text}</a>
                    </Link>
                  </span>
                );
              })}
            </MenuList>
          ))}
          <div>
            <Image src={FOOTER_IMAGE_SRC[0]} alt="insta" />
            <Image src={FOOTER_IMAGE_SRC[1]} alt="blog" />
          </div>
        </Menu>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.pc} {
    padding: 0 30px;
  }
`;

const Wrapper = styled.div`
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
const Info = styled.div``;

const InfoTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const InfoContents = styled.div`
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

const InfoTag = styled.div`
  margin: 30px 0 20px 0;
  font-size: 12px;
  opacity: 0.8;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuList = styled.div`
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

export default Footer;
