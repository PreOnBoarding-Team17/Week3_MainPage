import styled from 'styled-components';
import Title from 'components/common/Title';
import Text from 'components/common/Text';
import { ReadingDiaryTitle, ReadingDiaryText } from 'utils/constants';

interface ReadingDiaryProps {
  isPc: boolean;
  isTablet: boolean;
}

const ReadingDiary = ({ isPc, isTablet }: ReadingDiaryProps) => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Title title={ReadingDiaryTitle(isTablet)} />
          <Text text={ReadingDiaryText(isPc, isTablet)} />
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
