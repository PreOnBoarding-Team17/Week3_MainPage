import styled from 'styled-components';
import { LiveVideoTitle, LiveVideoText } from 'utils/constants';

interface LiveVideoProps {
  isPc: boolean;
}

const LiveVideo = ({ isPc }: LiveVideoProps) => {
  return (
    <Container>
      <Wrapper>
        <Contents>
          <TextContainer>
            <TextWrapper>
              <TextBox>
                <Title className="fade-up">{LiveVideoTitle(isPc)}</Title>
                <Text className="fade-up">{LiveVideoText(isPc)}</Text>
              </TextBox>
            </TextWrapper>
          </TextContainer>
          <VideoContainer>
            <Image src="assets/LiveVideo/monitor.png" alt="모니터 이미지" />
            <VideoWrapper>
              <Video autoPlay muted loop playsInline>
                <source src="assets/LiveVideo/Video.mp4" type="video/mp4" />
              </Video>
            </VideoWrapper>
          </VideoContainer>
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
  margin: 0px auto;
`;

const Wrapper = styled.div`
  height: 628px;
  width: 100%;
  overflow-x: hidden;
  background-image: url('/assets/LiveVideo/Background.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.tablet} {
    height: 1042px;
  }
  @media ${({ theme }) => theme.device.pc} {
    height: 938px;
  }
`;

const Contents = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    max-width: 768px;
    padding: 0 30px;
  }
  @media ${({ theme }) => theme.device.pc} {
    max-width: 1200px;
    margin: 0px auto;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 100px;
  @media ${({ theme }) => theme.device.tablet} {
    top: 150px;
  }
  @media ${({ theme }) => theme.device.pc} {
    left: 30px;
    top: 350px;
  }
`;

const TextWrapper = styled.div``;

const TextBox = styled.div`
  display: flex;
  white-space: pre-wrap;
  flex-direction: column;
  letter-spacing: normal;
  @media ${({ theme }) => theme.device.tablet} {
    width: 442px;
  }
  @media ${({ theme }) => theme.device.pc} {
    width: 286.156px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 2.33;
  letter-spacing: normal;
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
  font-size: 16px;
  line-height: 1.75;
  text-align: center;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 50px;
    font-size: 24px;
    line-height: 1.67;
  }
  @media ${({ theme }) => theme.device.pc} {
    text-align: left;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  width: 390px;
  height: 308px;
  top: 270px;
  @media ${({ theme }) => theme.device.tablet} {
    top: 340px;
    width: 800px;
    height: 662px;
  }
  @media ${({ theme }) => theme.device.pc} {
    top: 31px;
    right: -251px;
    width: 1118px;
    height: 880px;
  }
`;

const Image = styled.img`
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`;

const VideoWrapper = styled.div`
  position: absolute;
  width: 304px;
  height: 228px;
  left: 44px;
  top: 40px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 620px;
    height: 497px;
    left: 90px;
    top: 81px;
  }
  @media ${({ theme }) => theme.device.pc} {
    width: 866px;
    height: 650px;
    left: 125px;
    top: 113px;
  }
`;

const Video = styled.video`
  object-fit: fill;
  width: 304px;
  height: 228px;
  border-radius: 6px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 620px;
    height: 497px;
    border-radius: 8px;
  }
  @media ${({ theme }) => theme.device.pc} {
    width: 867px;
    height: 651px;
    border-radius: 15px;
  }
`;

export default LiveVideo;
