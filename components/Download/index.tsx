import styled from 'styled-components';
import {
  DONWLOAD_TITLE,
  DOWNLOAD_BTN_TEXT,
  DOWNLOAD_CONTENT_TEXT_FUNC,
} from 'utils/constants';
interface DownloadContentTextInterface {
  fontSize: string;
  lineHeight?: string;
}

interface DownloadProps {
  isPc: boolean;
}

const Download = ({ isPc }: DownloadProps) => {
  const DOWNLOAD_CONTENT_TEXT = DOWNLOAD_CONTENT_TEXT_FUNC(isPc);

  return (
    <Container>
      <Wrapper>
        <Title className="fade-up">{DONWLOAD_TITLE}</Title>
        <ContentsContainer>
          <ContentsWrapper data-test-id="Download:coupon">
            <ContentLeft>
              <Image src="assets/Download/logo-white.png" alt="coupon" />
              {DOWNLOAD_CONTENT_TEXT.map((text, index) => {
                if (index !== 2)
                  return (
                    <ContentText
                      key={index}
                      fontSize={text.fontSize}
                      lineHeight={text.lineHeight}
                    >
                      {text.text}
                    </ContentText>
                  );
              })}
            </ContentLeft>
            <ContentRight>
              <ContentRightText
                data-aos="new-animation"
                data-aos-delay="900"
                fontSize={DOWNLOAD_CONTENT_TEXT[2].fontSize}
                lineHeight={DOWNLOAD_CONTENT_TEXT[2].lineHeight}
              >
                {DOWNLOAD_CONTENT_TEXT[2].text}
              </ContentRightText>

              <Button data-aos="new-animation">
                <ButtonImage
                  src="assets/Download/download-btn.png"
                  alt="download"
                />
                {DOWNLOAD_BTN_TEXT}
              </Button>
            </ContentRight>
          </ContentsWrapper>
        </ContentsContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 150px 20px 0 20px;
  background-color: #f9f9f9;
  overflow-x: hidden;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 150px 30px 0 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
  }
`;

const ContentsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  background-image: url('assets/Download/coupon-phone.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 60px 0 116px 0;
  width: 360px;
  height: 614px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    background-image: url('assets/Download/coupon-tablet.png');
    width: 750px;
    height: 570px;
  }
  @media ${({ theme }) => theme.device.pc} {
    background-image: url('assets/Download/coupon-pc.png');
    width: 1150px;
    height: 460px;
  }
`;

const ContentLeft = styled.div`
  padding-top: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 10px 0 0 60px;
  }
  @media ${({ theme }) => theme.device.pc} {
    padding: 10px 0 0 100px;
  }
`;

const Image = styled.img`
  width: 92.5px;
  height: 30px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 155px;
    height: 50px;
  }
`;

const ContentText = styled.div<DownloadContentTextInterface>`
  white-space: pre-wrap;
  font-size: ${({ fontSize }) => fontSize || '13px'};
  text-align: center;
  margin-top: 24px;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '1.15')};
  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ fontSize }) => (fontSize !== '13px' ? '56px' : '20px')};
  }
`;

const ContentRight = styled(ContentLeft)`
  padding-top: 60px;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 0 30px 20px;
  }
  @media ${({ theme }) => theme.device.pc} {
    margin: 0 0 20px 150px;
  }
`;

const ContentRightText = styled(ContentText)`
  position: relative;

  color: #fff;
  font-size: 13px;
  width: 200px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  padding: 5px 10px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -9px;
    left: 90px;
    background-image: url('/assets/Download/triangle.png');
    width: 10px;
    height: 10px;
    background-size: contain;
    background-repeat: no-repeat;
  }

  &[data-aos='new-animation'] {
    transition-property: transform, opacity;
    opacity: 0;
    transform: translateY(-20px);

    &.aos-animate {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  margin: 30px 0;
  padding: 0 85px;
  height: 50px;
  border-radius: 10px;
  background-color: #333;
  color: #fff;
  outline: none;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 20px;
    padding: 35px 30px;
    margin-top: 30px;
    border-radius: 10px;
  }

  &[data-aos='new-animation'] {
    transition-property: transform, opacity;
    transform: translateY(-30px);

    &.aos-animate {
      transform: translateX(0);
    }
  }
`;

const ButtonImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 10px;
`;

export default Download;
