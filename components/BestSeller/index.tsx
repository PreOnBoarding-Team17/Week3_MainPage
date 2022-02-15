import styled from 'styled-components';
import BookList from 'components/BestSeller/BookList';
import Title from 'components/common/Title';

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

  return (
    <Container>
      <TextContainer>
        <Title title={title} />
        <Text>{text}</Text>
      </TextContainer>
      <ImageContainer>
        <ImageWrapper>
          <BookList />
        </ImageWrapper>
      </ImageContainer>
    </Container>
  );
};

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

export default BestSeller;
