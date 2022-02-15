import styled from 'styled-components';
import { UseMediaInterface } from 'utils/interfaces';
import CheckedBookImage from './CheckedBookImage';
import { CheckedBooksTitle, CheckedBooksText } from 'utils/constants';

const CheckedBooks = ({ isTablet, isPc }: UseMediaInterface) => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>{CheckedBooksTitle(isPc, isTablet)}</Title>
          <Text>{CheckedBooksText(isPc, isTablet)}</Text>
        </TextContainer>
        <CheckedBookImage />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(249, 249, 249);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 0 20px;
  margin: 100px auto;
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    flex-direction: column;
    max-width: 768px;
    padding: 0 30px;
  }
  @media ${({ theme }) => theme.device.pc} {
    flex-direction: row;
    max-width: 1200px;
    margin: 150px auto;
    padding: 0 20px;
  }
`;

const TextContainer = styled.div``;

const Title = styled.h2`
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.47;
  text-align: center;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
    line-height: 1.4;
  }
  @media ${({ theme }) => theme.device.pc} {
    text-align: left;
  }
`;

const Text = styled.div`
  margin-top: 30px;
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 1.75;
  text-align: center;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
    line-height: 1.67;
  }
  @media ${({ theme }) => theme.device.pc} {
    text-align: left;
  }
`;

export default CheckedBooks;
