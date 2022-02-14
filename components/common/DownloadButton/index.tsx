import React from "react";
import styled from "styled-components";

const DownloadButton: React.FC = () => {
  return (
    <ButtonWrap>
      <Image
        src="assets/mini-logo-white.png"
        alt="download"
        className="mini-logo"
      />
      <div>
        <span>다운로드</span>
      </div>
    </ButtonWrap>
  );
};

const ButtonWrap = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  opacity: 0.9;
  box-shadow: rgb(0 0 0 / 10%) 5px 5px 5px 0px;
  background-color: rgb(255, 177, 0);
  z-index: 200;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;

  & span {
    width: 36px;
    height: 15px;
    font-size: 10px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: rgb(255, 255, 255);

    @media ${({ theme }) => theme.device.tablet} {
      width: 44px;
      height: 17px;
      font-size: 12px;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: 80px;
    height: 80px;
    bottom: 30px;
    right: 30px;
  }
`;

const Image = styled.img`
	width: 26.8px;
	height: 20px;
	@media ${({ theme }) => theme.device.tablet} {
		width: 40.2px;
		height: 30px;
	}
}
`;

export default DownloadButton;
