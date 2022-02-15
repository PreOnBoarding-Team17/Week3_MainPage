import styled from 'styled-components';

interface CardProps {
  isPc: boolean;
  isTablet: boolean;
}

const Card = ({ isPc, isTablet }: CardProps) => {
  const cardList = [1, 2, 3];
  const title = ['화상수업', '양방향', '캐릭터'];

  const firstText = () => {
    if (isPc)
      return `휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.`;
    else if (isTablet)
      return `휴대폰이나 태블릿으로 시간이나 장소 관계없이\n편하게 수업을 들어보세요.`;
    else
      return `휴대폰이나 태블릿으로\n시간이나 장소 관계없이\n편하게 수업을 들어보세요.`;
  };

  const secondText = () => {
    if (isPc)
      return `화면에 그림도 그려보고,\n읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향\n수업을 경험해보세요.`;
    else if (isTablet)
      return `화면에 그림도 그려보고, 읽은 책으로 선생님과\n퀴즈도 풀어보는 양방향수업을 경험해보세요.`;
    else
      return `화면에 그림도 그려보고, 읽은 책으로\n선생님과 퀴즈도 풀어보는\n양방향 수업을 경험해보세요.`;
  };

  const thirdText = () => {
    if (isPc)
      return `친숙한 캐릭터와\n목소리로 수업에 대한\n부담을 낮춰보세요.`;
    else if (isTablet)
      return `친숙한 캐릭터와 목소리로 수업에 대한\n부담을 낮춰보세요.`;
    else return `친숙한 캐릭터와 목소리로\n 수업에 대한 부담을 낮춰보세요.`;
  };

  const text = (element: number) => {
    if (element === 1) {
      return firstText();
    } else if (element === 2) {
      return secondText();
    } else {
      return thirdText();
    }
  };

  return (
    <>
      {cardList.map((element) => (
        <Container key={element}>
          <Icon
            src={`assets/Feature/Icon_${element}.png`}
            alt={`이미지 ${element}`}
          />
          <Title>{title[element - 1]}</Title>
          <Text>{text(element)}</Text>
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
  width: 360px;
  height: 458px;
  background-size: 360px 458px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 580px;
    height: 609px;
    background-size: 580px 609px;
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
  margin: 0px auto;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 50px;
    font-size: 30px;
  }
`;

const Text = styled.p`
  margin: 0px auto;
  white-space: pre-wrap;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
  font-weight: normal;
  font-size: 14px;
  line-height: 1.71;
  margin-top: 20px;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 30px;
    font-size: 20px;
    line-height: 1.8;
  }
`;

export default Card;
