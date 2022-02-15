import React from 'react';
import styled from 'styled-components';
import CheckedBookItem from './CheckedBookItem';

const CheckedBookContents = [
  {
    checked: 'assets/check-animation/first.gif',
    book: 'assets/book1.png',
  },
  {
    checked: 'assets/check-animation/second.gif',
    book: 'assets/book2.png',
  },
  {
    checked: 'assets/check-animation/third.gif',
    book: 'assets/book3.png',
  },
];

const CheckedBookImage: React.FC = () => {
  return (
    <Container>
      {CheckedBookContents.map((item, index) => {
        return (
          <CheckedBookItem
            key={index}
            checked={item.checked}
            book={item.book}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  display: flex;
  flex-direction: row;
  margin-left: 0px;
  margin-top: 64px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 100px;
  }
  @media ${({ theme }) => theme.device.pc} {
    margin-left: 197px;
    margin-top: 0px;
  }
`;

export default CheckedBookImage;
