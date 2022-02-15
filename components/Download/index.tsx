import styled from 'styled-components';

interface DownloadContentTextInterface {
  fontSize: string;
  lineHeight?: string;
}

interface DownloadProps {
  isPc: boolean;
}

const Download = ({ isPc }: DownloadProps) => {
  const DOWNLOAD_CONTENT_TEXT = [
    {
      text: '책을 보는\n새로운 방법',
      fontSize: '36px',
    },
    {
      text: isPc
        ? '지금 가입하시면 매주 8권의 동화책을 보실 수 있어요!'
        : '지금 가입하시면\n매주 8권의 동화책을 보실 수 있어요!',
      fontSize: '13px',
      lineHeight: '1.8',
    },
    {
      text: '회원가입에 걸리는 시간 단 3초',
      fontSize: '13px',
      lineHeight: '1.8',
    },
  ];

  const DONWLOAD_TITLE = '지금 다운로드 받으세요!';
  const DOWNLOAD_BTN_TEXT = '앱 다운로드 하기';

  return (
    <Container>
      <Wrapper>
        <Title>{DONWLOAD_TITLE}</Title>
        <ContentsContainer>
          <ContentsWrapper>
            <ContentLeft>
              <Image src="assets/download/logo-white.png" alt="coupon" />
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
                fontSize={DOWNLOAD_CONTENT_TEXT[2].fontSize}
                lineHeight={DOWNLOAD_CONTENT_TEXT[2].lineHeight}
              >
                {DOWNLOAD_CONTENT_TEXT[2].text}
              </ContentRightText>
              <Button>
                <ButtonImage
                  src="assets/download/download-btn.png"
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
  background-image: url('assets/download/coupon-phone.png');
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
    background-image: url('assets/download/coupon-tablet.png');
    width: 750px;
    height: 570px;
  }
  @media ${({ theme }) => theme.device.pc} {
    background-image: url('assets/download/coupon-pc.png');
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
  color: #fff;
  font-size: 13px;
  width: 200px;
  height: 40px;
  background-color: #725801;
  border-radius: 50px;
  padding: 5px 10px;
`;

const Button = styled.button`
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
`;

const ButtonImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 10px;
`;

export default Download;
