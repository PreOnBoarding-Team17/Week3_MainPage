import styled from 'styled-components';
import Card from 'components/Feature/Card';

interface FeatureProps {
  isPc: boolean;
  isTablet: boolean;
}

const Feature = ({ isPc, isTablet }: FeatureProps) => {
  return (
    <Container>
      <Wrapper>
        <Title>땅콩스쿨만의 특징</Title>
        <ImageContainer>
          <Card isPc={isPc} isTablet={isTablet} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  overflow-y: hidden;
  background-color: rgb(249, 249, 249);
  overflow-x: hidden;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 0px;
  @media ${({ theme }) => theme.device.pc} {
    margin-bottom: -50px;
  }
`;

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 150px;
    padding: 0 30px;
  }
`;

const Title = styled.h2`
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 50px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 50px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 101px;
  }
  @media ${({ theme }) => theme.device.pc} {
    width: 1380px;
    margin-top: 80px;
    margin-bottom: 0px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export default Feature;
