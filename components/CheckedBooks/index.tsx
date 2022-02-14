import styled from "styled-components";

const CheckedBooks = () => {
  return (
    <Container>
      <Wrapper>
        <Contents>
          <TextBox>
            <Title>랜선 라이브 북클래스</Title>
            <Text>
              친구들과 함께 <br />
              그림 그리기, 퀴즈 풀기, 선생님과 대화하며 경험해요!
            </Text>
          </TextBox>
          <VideoBox>
            <Image src="assets/monitor.png" alt="모니터 이미지" />
            <VideoWrapper>
              <Video autoPlay muted loop playsInline>
                <source src="assets/CheckedBooks/Video.mp4" type="video/mp4" />
              </Video>
            </VideoWrapper>
          </VideoBox>
        </Contents>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 938px;
  background-image: url("/assets/CheckedBooks/Background.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow-x: hidden;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Contents = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
`;

const TextBox = styled.div`
  display: flex;
  width: 286.156px;
  flex-direction: column;
  white-space: pre-wrap;
  color: rgb(51, 51, 51);
  text-align: left;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 50px;
  line-height: 1.4;
`;

const Text = styled.div`
  font-weight: normal;
  margin-top: 50px;
  font-size: 24px;
  line-height: 1.67;
  word-break: keep-all;
`;

const VideoBox = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  width: 1118px;
  height: 800px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  image-rendering: -webkit-optimize-contrast;
  backface-visibility: hidden;
`;

const VideoWrapper = styled.div`
  position: absolute;
  width: 866px;
  height: 650px;
  left: 125px;
  top: 113px;
`;

const Video = styled.video`
  object-fit: fill;
  width: 867px;
  height: 651px;
  border-radius: 15px;
`;

export default CheckedBooks;
