import React from 'react';
import styled from 'styled-components';

const DownloadWrapper = styled.div`
  box-sizing: border-box;
  padding: 150px 20px 0 20px;
  background-color: #f9f9f9;
  over-flow-x: hidden;
  color: #333;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 150px 30px 0 30px;
  }
`;

const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  align-items: center;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.pc} {
    hieght: 534px;
  }
`;

const DONWLOADTITLE = '지금 다운로드 받으세요!';
const DownloadTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
  }
`;

const DownloadContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  jsutify-content: center;
`;

const DownloadContentBg = styled.div`
  background-image: url('assets/download/coupon-phone.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 60px 0 116px 0;
  width: 360px;
  height: 614px;
  display: flex;
  flex-direction: column;
  jsutify-content: space-between;
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

const DownloadContentLeft = styled.div`
  color: #333;
  padding-top: 95px;
  display: flex;
  flex-direction: column;
  jsutify-content: center;
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
interface DownloadContentTextInterface {
  fontSize: string;
  lineHeight?: string;
}
const DownloadContentText = styled.div<DownloadContentTextInterface>`
  white-space: pre-wrap;
  font-size: ${({ fontSize }) => fontSize || '13px'};
  text-align: center;
  margin-top: 24px;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '1.15')};

  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ fontSize }) => (fontSize !== '13px' ? '56px' : '20px')};
  }
`;

const DownloadContentRight = styled(DownloadContentLeft)`
  padding-top: 70px;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 0 100px 20px;
  }
  @media ${({ theme }) => theme.device.pc} {
    margin: 0 0 100px 150px;
  }
`;

const DownloadContentRightText = styled(DownloadContentText)`
  color: #fff;
  font-size: 14px;
  width: 183px;
  height: 20px;
  background-color: #725801;
  border-radius: 24px;
  padding: 10px 10px;
`;

const DOWNLOADBTNTEXT = '앱 다운로드 하기';
const DownloadBtn = styled.button`
  margin-top: 36px;
  padding: 0 85px;
  height: 50px;
  border-radius: 10px;
  background-color: #333;
  color: #fff;
  outline: none;
  display: flex;
  align-items: center;
  jsutify-content: center;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
    padding: 40px 20px;
    margin-top: 30px;
  }
`;
const DownloadBtnImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

interface DownloadProps {
  isPc: boolean;
}

const Download: React.FC<DownloadProps> = ({ isPc }) => {
  const DOWNLOADCONTENTTEXT = [
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

  return (
    <DownloadWrapper>
      <DownloadContainer>
        <DownloadTitle>{DONWLOADTITLE}</DownloadTitle>

        <DownloadContent>
          <DownloadContentBg>
            <DownloadContentLeft>
              <Image src="assets/download/logo-white.png" alt="coupon" />
              {DOWNLOADCONTENTTEXT.map((text, index) => {
                if (index !== 2)
                  return (
                    <DownloadContentText
                      key={index}
                      fontSize={text.fontSize}
                      lineHeight={text.lineHeight}
                    >
                      {text.text}
                    </DownloadContentText>
                  );
              })}
            </DownloadContentLeft>

            <DownloadContentRight>
              <DownloadContentRightText
                fontSize={DOWNLOADCONTENTTEXT[2].fontSize}
                lineHeight={DOWNLOADCONTENTTEXT[2].lineHeight}
              >
                {DOWNLOADCONTENTTEXT[2].text}
              </DownloadContentRightText>
              <DownloadBtn>
                <DownloadBtnImage
                  src="assets/download/download-btn.png"
                  alt="download"
                />
                {DOWNLOADBTNTEXT}
              </DownloadBtn>
            </DownloadContentRight>
          </DownloadContentBg>
        </DownloadContent>
      </DownloadContainer>
    </DownloadWrapper>
  );
};

export default Download;
