import React from 'react';
import styled from 'styled-components';

const text = {
  tablet: {
    title: `교육 전문가들이
선정한 도서`,
    description: `호두랩스의 교육 전문가들이 교과 수록,
초등 필독 도서 등 아동 교육에 적합한 도서를
직접 선정해요!`,
  },
  pc: {
    title: `교육 전문가들이 선정한 도서`,
    description: `호두랩스의 교육 전문가들이 교과 수록, 초등 필독 도서 등
아동 교육에 적합한 도서를 직접 선정해요!`,
  },
};

const CheckedBooks: React.FC = () => {
  return (
    <CheckedBooksWrap>
      <CheckedBooksWrapInner>
        <TextWrap>
          <Title></Title>
          <Description></Description>
        </TextWrap>
        <Contents></Contents>
      </CheckedBooksWrapInner>
    </CheckedBooksWrap>
  );
};

const CheckedBooksWrap = styled.div`
  background-color: rgb(249, 249, 249);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
}
`;
const CheckedBooksWrapInner = styled.div``;

const TextWrap = styled.div`
  content: ${text.tablet.title};
  @media ${({ theme }) => theme.device.tablet} {
    h2 {
      content: ${text.tablet.title};
    }
  }
  @media ${({ theme }) => theme.device.pc} {
  }
`;

const Title = styled.h2`
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
    line-height: 1.4;
  }
`;
const Description = styled.div`
  margin-top: 30px;
  white-space: pre-wrap;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: rgb(51, 51, 51);
`;
const Contents = styled.div``;

export default CheckedBooks;
