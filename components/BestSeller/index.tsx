import styled from 'styled-components';
import BookList from 'components/BestSeller/BookList';
import Title from 'components/common/Title';
import Text from 'components/common/Text';
import { BestSellerTitle, BestSellerText } from 'utils/constants';

interface BestSellerProps {
  isTablet: boolean;
}

const BestSeller = ({ isTablet }: BestSellerProps) => {
  return (
    <Container data-test-id="BestSeller">
      <TextContainer>
        <Title title={BestSellerTitle(isTablet)} />
        <Text text={BestSellerText(isTablet)} />
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
