import styled, { keyframes } from 'styled-components';

const BookList = () => {
  const imageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <LeftContainer>
        {imageNumber.map((element) => (
          <Image
            key={element}
            src={`assets/BestSeller/img_book_${element}.png`}
            alt={`이미지${element}`}
          />
        ))}
      </LeftContainer>
      <RightContainer>
        {imageNumber.map((element) => (
          <Image
            key={element}
            src={`assets/BestSeller/img_book_${element}.png`}
            alt={`이미지${element}`}
          />
        ))}
      </RightContainer>
    </>
  );
};

const slider = keyframes`
      from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(-3570px, 0px);
    }
`;
const slider_mobile = keyframes`
      from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(-1755px, 0px);
    }
`;

const LeftContainer = styled.div`
  width: 1755px;
  flex-direction: row;
  position: absolute;
  animation: 24s linear 0s infinite normal none running ${slider_mobile};
  @media ${({ theme }) => theme.device.tablet} {
    width: 3570px;
    animation: 24s linear 0s infinite normal none running ${slider};
  }
`;

const RightContainer = styled.div`
  width: 1755px;
  left: 1755px;
  flex-direction: row;
  position: absolute;
  animation: 24s linear 0s infinite normal none running ${slider_mobile};
  @media ${({ theme }) => theme.device.tablet} {
    width: 3570px;
    left: 3570px;
    animation: 24s linear 0s infinite normal none running ${slider};
  }
`;

const Image = styled.img`
  background-position: center center;
  background-size: cover;
  margin-left: 15px;
  height: 135px;
  display: inline-block;
  width: 102px !important;
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 50px;
    height: 250px;
    width: 188px !important;
  }
`;

export default BookList;
