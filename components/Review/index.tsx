import React, { useState } from 'react';
import styled from 'styled-components';
import { UseMediaInterface } from 'utils/interfaces';
import BookSwiper from 'components/Review/BookSwiper';

const Review: React.FC<UseMediaInterface> = ({ isTablet, isPc }) => {
  const [index, setIndex] = useState<number>(0);
  return (
    <ReviewContainer>
      <ReviewWrapper>
        <BookSwiper
          index={index}
          setIndex={setIndex}
          isPc={isPc}
          isTablet={isTablet}
        />
        <SwiperProgressBar index={index} />
        <Background></Background>
      </ReviewWrapper>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
`;

const ReviewWrapper = styled.div`
  position: relative;
  height: 589px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;

  @media ${({ theme }) => theme.device.tablet} {
    height: 667px;
  }
`;

const SwiperProgressBar = styled.div<{ index: number }>`
  transition: all 1s ease 0s;
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 10px;
  background-color: rgb(255, 177, 0);
  width: ${(props) => `${props.index * 20}%`};
`;

const Background = styled.div`
  top: 0px;
  left: 0px;
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  background: url('assets/background-book.png') center center / cover no-repeat;
  box-sizing: border-box;
`;

export default Review;
