import styled from 'styled-components';
import { AboutText } from 'utils/constants';

interface AboutProps {
  isPc: boolean;
}

const About = ({ isPc }: AboutProps) => {
  return (
    <Container data-test-id="About">
      <div>
        <Image
          className="fade-up gif"
          src="/assets/About/second-logo.png"
          alt="logo"
          loading="lazy"
          data-test-id="About:logo"
        />
      </div>
      <Title className="fade-up">땅콩스쿨이란?</Title>
      <Text className="fade-up">{AboutText(isPc)}</Text>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  background-color: #ffb100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 20px 100px 20px;
  color: #fff;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 130px 30px 150px 30px;
  }
`;

const Image = styled.img`
  width: 67px;
  height: 50px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 134px;
    height: 100px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 45px;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
    margin-bottom: 70px;
  }
`;

const Text = styled.div`
  white-space: pre-wrap;
  text-align: center;
  font-size: 16px;
  line-height: 1.75;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
    line-height: 1.67;
  }
`;

export default About;
