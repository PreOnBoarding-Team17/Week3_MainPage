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
`;
const ReviewUserId = styled.div`
  // text-align: start;
  text-align: center;
  opacity: 0.8;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.33;
  letter-spacing: normal;
  color: rgb(255, 255, 255);
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
`;

export default ReviewItem;
