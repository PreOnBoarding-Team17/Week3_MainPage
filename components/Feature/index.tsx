import styled from 'styled-components';
import Card from 'components/Feature/Card';
import Title from 'components/common/Title';

interface FeatureProps {
  isPc: boolean;
  isTablet: boolean;
}

const Feature = ({ isPc, isTablet }: FeatureProps) => {
  return (
    <Container>
      <Wrapper>
        <Title title="땅콩스쿨만의 특징" />
        <ImageContainer>
          <Card isPc={isPc} isTablet={isTablet} />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  background-color: rgb(249, 249, 249);
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

const ImageContainer = styled.div`
  margin-bottom: 50px;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0 50px 0;
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    flex-direction: column;
    margin: 40px 0 101px 0;
  }
  @media ${({ theme }) => theme.device.pc} {
    width: 1380px;
    margin: 80px 0 0 0;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export default Feature;
