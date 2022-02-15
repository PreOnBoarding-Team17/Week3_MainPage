import styled from 'styled-components';

interface ReadingDiaryProps {
  isPc: boolean;
  isTablet: boolean;
}

const ReadingDiary = ({ isPc, isTablet }: ReadingDiaryProps) => {
  const title = isTablet
    ? `매일 매일\n알아서 기록하는 독서 일기`
    : `매일 매일 알아서\n기록하는 독서 일기`;

  const text = () => {
    if (isPc) {
      return `오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고, 공유도 가능해요.`;
    } else if (isTablet) {
      return `오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지\n독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고, 공유도 가능해요.`;
    } else {
      return `오늘은 아이가 어떤 책을 읽었는지,\n어떤 활동에 참여했는지\n독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고,\n공유도 가능해요.`;
    }
  };

  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text()}</Text>
        </TextContainer>
        <ImageContainer>
          <Image src="assets/ReadingDiary/Diary.png" alt="독서 일기 이미지" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  background-color: rgb(249, 249, 249);
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
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
  margin: 50px 0 49px 0;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 50px 0 72px 0;
  }
  @media ${({ theme }) => theme.device.pc} {
    margin: 50px 0 47px 0;
  }
`;

const Image = styled.img`
  width: 360px;
  height: 220px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 873px;
    height: 480px;
  }
  @media ${({ theme }) => theme.device.pc} {
    width: 1139px;
    height: 600px;
  }
`;
export default ReadingDiary;
