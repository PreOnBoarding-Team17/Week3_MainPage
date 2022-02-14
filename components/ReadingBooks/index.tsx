import styled from 'styled-components';

interface ReadingBooksProps {
  isTablet: boolean;
}

const ReadingBooks = ({ isTablet }: ReadingBooksProps) => {
  const title = isTablet
    ? `실시간 방송 형태로 제공되는\n 신개념 책 읽기`
    : `실시간 방송 형태로\n 제공되는\n 신개념 책 읽기`;

  const text = isTablet
    ? `방송 중이라면 언제든 접속하세요.\n 수강신청, 수업예약 없이 편하게 수업참여가 가능해요.`
    : `방송 중이라면 언제든 접속하세요.\n 수강신청, 수업예약 없이\n 편하게 수업참여가 가능해요.`;

  return (
    <Container>
      <Wrapper>
        <Contents>
          <TextContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TextContainer>
          <ImageContainer>
            <Tablet src="assets/ReadingBooks/tablet.png" />
            <Mobile src="assets/ReadingBooks/phone.png" />
          </ImageContainer>
        </Contents>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
`;

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  padding: 100px 20px 0 20px;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 150px 30px 0 30px;
  }
  @media ${({ theme }) => theme.device.pc} {
    margin: 0px auto;
  }
`;

const TextContainer = styled.div``;

const Title = styled.h2`
  white-space: pre-wrap;
  word-break: keep-all;
  text-align: center;
  font-size: 30px;
  line-height: 1.47;
  font-weight: bold;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
    line-height: 1.44;
  }
`;

const Text = styled.p`
  padding-top: 27px;
  white-space: pre-wrap;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  @media ${({ theme }) => theme.device.tablet} {
    padding-top: 50px;
    font-size: 24px;
    line-height: 1.67;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 83px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 112px;
  }
  @media ${({ theme }) => theme.device.pc} {
    margin-bottom: 97px;
  }
`;

const Tablet = styled.img`
  width: 323px;
  position: relative;
  left: -10px;
  height: 277px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 658px;
    height: 548px;
    left: -78px;
  }
  @media ${({ theme }) => theme.device.pc} {
    left: -98px;
    width: 1124px;
    height: 885px;
  }
`;

const Mobile = styled.img`
  position: absolute;
  width: 220px;
  height: 240px;
  top: 49px;
  left: 175px;
  @media ${({ theme }) => theme.device.tablet} {
    top: 47px;
    left: 305px;
    width: 505px;
    height: 527px;
  }
  @media ${({ theme }) => theme.device.pc} {
    top: 77px;
    left: 554px;
    width: 823px;
    height: 851px;
  }
`;

export default ReadingBooks;
