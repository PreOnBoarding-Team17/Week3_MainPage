import styled, { keyframes } from 'styled-components';

interface BestSellerProps {
  isTablet: boolean;
}

const BestSeller = ({ isTablet }: BestSellerProps) => {
  const title = isTablet
    ? `입학 전 1000권 읽기!\n땅콩스쿨로 도전해보세요.`
    : `입학 전 1000권 읽기!\n땅콩스쿨로\n도전해보세요.`;

  const text = isTablet
    ? `매달 새로운 32권의 어린이 베스트 셀러를 만날 수 있어요.\n독서를 통해 배움의 즐거움을 알아가 보세요.`
    : `매달 새로운 32권의\n어린이 베스트 셀러를 만날 수 있어요.\n독서를 통해 배움의 즐거움을 알아가 보세요.`;

  const imageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextContainer>
      <ImageContainer>
        <ImageWrapper>
          <ImageContents>
            {imageNumber.map((element) => (
              <Image
                key={element}
                src={`assets/BestSeller/img_book_${element}.png`}
                alt={`이미지${element}`}
              />
            ))}
          </ImageContents>
          <ImageContents>
            {imageNumber.map((element) => (
              <Image
                key={element}
                src={`assets/BestSeller/img_book_${element}.png`}
                alt={`이미지${element}`}
              />
            ))}
          </ImageContents>
        </ImageWrapper>
      </ImageContainer>
    </Container>
  );
};

const slider = keyframes`
      from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(-3570px, 0px);
    }
`;
const slider_mobile = keyframes`
      from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(-1755px, 0px);
    }
`;

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  overflow-x: hidden;
`;

const TextContainer = styled.div`
  margin-top: 100px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 150px;
  }
`;

const Title = styled.h2`
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
    line-height: 1.44;
  }
`;

const Text = styled.p`
  padding-top: 30px;
  white-space: pre-wrap;
  font-size: 16px;
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
  margin: 60px 0 100px 0;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 100px 0 150px 0;
  }
`;

const ImageWrapper = styled.div`
  height: 135px;
  width: 1755px;
  position: relative;
  @media ${({ theme }) => theme.device.tablet} {
    height: 250px;
    width: 3570px;
  }
  @media ${({ theme }) => theme.device.pc} {
    height: 250px;
    width: 3570px;
  }
`;

const ImageContents = styled.div`
  width: 1755px;
  flex-direction: row;
  position: absolute;
  animation: 24s linear 0s infinite normal none running ${slider_mobile};
  @media ${({ theme }) => theme.device.tablet} {
    width: 3570px;
    animation: 24s linear 0s infinite normal none running ${slider};
  }
`;

const Image = styled.img`
  background-position: center center;
  background-size: cover;
  margin-left: 15px;
  height: 135px;
  display: inline-block;
  width: 102px !important;
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 50px;
    height: 250px;
    width: 188px !important;
  }
`;

export default BestSeller;
