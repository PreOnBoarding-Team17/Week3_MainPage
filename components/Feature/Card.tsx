import styled from 'styled-components';
import { CardFirstText, CardSecondText, CardThirdText } from 'utils/constants';

interface CardProps {
  isPc: boolean;
  isTablet: boolean;
}

const Card = ({ isPc, isTablet }: CardProps) => {
  const cardList = [1, 2, 3];
  const title = ['화상수업', '양방향', '캐릭터'];

  const text = (element: number) => {
    if (element === 1) {
      return CardFirstText(isPc, isTablet);
    } else if (element === 2) {
      return CardSecondText(isPc, isTablet);
    } else {
      return CardThirdText(isPc, isTablet);
    }
  };

  return (
    <>
      {cardList.map((element) => (
        <Container
          key={element}
          data-test-id="Feature:Card"
          data-aos="fade-up"
          data-aos-delay={`${element * 500}`}
        >
          <Icon
            data-test-id="Feature:CardIcon"
            src={`assets/Feature/Icon_${element}.png`}
            alt={`이미지 ${element}`}
          />
          <Title data-test-id="Feature:CardTitle">{title[element - 1]}</Title>
          <Text data-test-id="Feature:CardText">{text(element)}</Text>
        </Container>
      ))}
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url('assets/Feature/Image.png');
  background-position: center center;
  background-repeat: no-repeat;
  margin-right: 0px;
  background-size: 360px 458px;
  width: 360px;
  height: 458px;
  @media ${({ theme }) => theme.device.tablet} {
    background-size: 580px 609px;
    width: 580px;
    height: 609px;
  }
  @media ${({ theme }) => theme.device.pc} {
    background-size: 460px 651px;
    width: 460px;
    height: 651px;
    margin-right: -70px;
  }
`;

const Icon = styled.img`
  margin-top: 121px;
  width: 80px;
  height: 80px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 174px;
    width: 116px;
    height: 116px;
  }
`;

const Title = styled.h3`
  margin: 30px auto 0 auto;
  font-size: 20px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 50px auto 0 auto;
    font-size: 30px;
  }
`;

const Text = styled.p`
  margin: 20px auto 0 auto;
  white-space: pre-wrap;
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.71;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 30px auto 0 auto;
    font-size: 20px;
    line-height: 1.8;
  }
`;

export default Card;
