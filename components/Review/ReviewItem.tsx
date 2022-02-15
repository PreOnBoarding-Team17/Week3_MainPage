import React from 'react';
import styled from 'styled-components';

interface ReviewItemProps {
  content: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ content }) => {
  return (
    <ReviewItemContainer>
      <ReviewContent>{content}</ReviewContent>
    </ReviewItemContainer>
  );
};

const ReviewItemContainer = styled.div``;
const ReviewContent = styled.div`
  white-space: pre-wrap;
  text-align: center;
`;

export default ReviewItem;
