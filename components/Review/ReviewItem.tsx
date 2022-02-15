import React from 'react';
import styled from 'styled-components';

interface ReviewItemProps {
  userId: string;
  content: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ userId, content }) => {
  return (
    <ReviewItemContainer>
      <ReviewUserId>{userId}</ReviewUserId>
      <ReviewContent>{content}</ReviewContent>
    </ReviewItemContainer>
  );
};

const ReviewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-radius: 24px;
  width: 320px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 720px;
  }

  @media ${({ theme }) => theme.device.pc} {
    width: 820px;
  }
`;
const ReviewUserId = styled.div`
  text-align: start;
  opacity: 0.8;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.33;
  letter-spacing: normal;
  color: rgb(255, 255, 255);

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
    line-height: 2.5;
  }
`;
const ReviewContent = styled.div`
  white-space: pre-wrap;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: 30px;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 20px;
    line-height: 1.8;
  }
`;

export default ReviewItem;
