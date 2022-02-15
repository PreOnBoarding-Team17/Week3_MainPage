import React from 'react';
import styled from 'styled-components';
import { UseMediaInterface } from 'utils/interfaces';
import BookSwiper from 'components/Review/BookSwiper';

const Review: React.FC<UseMediaInterface> = ({ isTablet, isPc }) => {
  return (
    <ReviewContainer>
      <ReviewInner>
        <BookSwiper />
        <Background></Background>
      </ReviewInner>
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

const ReviewInner = styled.div`
  height: 589px;
  display: flex;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    height: 667px;
    display: flex;
    width: 100%;
  }
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
