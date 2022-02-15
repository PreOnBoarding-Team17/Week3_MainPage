import React from 'react';
import styled from 'styled-components';
import { UseMediaInterface } from 'utils/interfaces';
import CheckedBookImage from './CheckedBookImage';

const CheckedBooks = ({ isTablet, isPc }: UseMediaInterface) => {
  const title = isTablet
    ? `교육 전문가들이 선정한 도서`
    : `교육 전문가들이 \n선정한 도서`;
  let description = `호두랩스의 교육 전문가들이 교과 수록,\n초등 필독 도서 등 아동 교육에 적합한 도서를\n직접 선정해요!`;
  if (isTablet)
    description = `호두랩스의 교육 전문가들이 교과 수록, 초등 필독 도서 등\n아동 교육에 적합한 도서를 직접 선정해요!`;
  if (isPc)
    description = `호두랩스의 교육 전문가들이\n교과 수록, 초등 필독 도서 등\n아동 교육에 적합한 도서를\n직접 선정해요!`;

  return (
    <CheckedBooksWrap>
      <CheckedBooksWrapInner>
        <TextWrap>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrap>
        <CheckedBookImage />
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
const CheckedBooksWrapInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 100px;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    flex-direction: column;
    max-width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media ${({ theme }) => theme.device.pc} {
    flex-direction: row;
    max-width: 1200px;
    margin: 0px auto;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 150px;
    margin-bottom: 150px;
  }
`;

const TextWrap = styled.div``;

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

  @media ${({ theme }) => theme.device.pc} {
    text-align: left;
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

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
    line-height: 1.67;
    text-align: center;
  }

  @media ${({ theme }) => theme.device.pc} {
    text-align: left;
  }
`;

export default CheckedBooks;
