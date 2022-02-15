import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CheckedBookItem from './CheckedBookItem';
import { CheckedBookContents } from 'utils/constants';
import { useScroll } from 'utils/hooks/useScroll';

const CheckedYPos = [1680, 2870];

const CheckedBookImage = () => {
  const [checkedPageIn, setCheckedPageIn] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (CheckedYPos[0] < scrollY && scrollY < CheckedYPos[1])
      setCheckedPageIn(true);
    else setCheckedPageIn(false);
  }, [scrollY]);

  return (
    <Container>
      {CheckedBookContents.map((item, index) => {
        return (
          <CheckedBookItem
            key={index}
            checked={checkedPageIn ? item.checked : '(알수없음)'}
            book={item.book}
            data={index}
            pageIn={checkedPageIn}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  justify-content: center;
  margin: 64px 0 0 0;
  @media ${({ theme }) => theme.device.tablet} {
    margin: 100px 0 0 0;
  }
  @media ${({ theme }) => theme.device.pc} {
    margin: 0 0 0 197px;
  }
`;

export default CheckedBookImage;
