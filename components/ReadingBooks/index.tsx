import styled from 'styled-components';
import Title from 'components/common/Title';
import Text from 'components/common/Text';
import { ReadingBooksTitle, ReadingBooksText } from 'utils/constants';

interface ReadingBooksProps {
  isTablet: boolean;
}

const ReadingBooks = ({ isTablet }: ReadingBooksProps) => {
  return (
    <Container data-test-id="ReadingBooks">
      <Wrapper>
        <Contents>
          <TextContainer data-test-id="ReadingBooks:TextContainer">
            <Title title={ReadingBooksTitle(isTablet)} />
            <Text text={ReadingBooksText(isTablet)} />
          </TextContainer>
          <ImageContainer>
            <Tablet
              data-test-id="ReadingBooks:Tablet"
              src="assets/ReadingBooks/tablet.png"
            />
            <Mobile
              data-test-id="ReadingBooks:Mobile"
              src="assets/ReadingBooks/phone.png"
            />
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
