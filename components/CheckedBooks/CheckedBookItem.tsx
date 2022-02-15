import { useRef } from 'react';
import styled from 'styled-components';

interface CheckedBookItemProps {
  checked: string;
  book: string;
  index: number;
}

const CheckedBookItem = ({ checked, book, index }: CheckedBookItemProps) => {
  // const CheckedBookItem = ({
  //   checked,
  //   book,
  //   data,
  //   pageIn,
  // }: CheckedBookItemProps) => {
  //   const checkRef = useRef<HTMLImageElement>(null);
  //   const changeDisplay = () => {
  //     if (pageIn) {
  //       setTimeout(() => {
  //         checkRef.current.style.visibility = 'visible';
  //       }, (data + 1) * 500);
  //     } else checkRef.current.style.visibility = 'hidden';
  //   };

  return (
    <Container>
      <CheckedAnimation
        src={checked}
        alt="checked"
        className="gif"
        data-index={index}
        // ref={checkRef}
        // onError={changeDisplay}
        // onLoad={changeDisplay}
      />
      <Image src={book} alt="book" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-right: 30px;
  flex-direction: column;
  justify-content: center;
  @media ${({ theme }) => theme.device.tablet} {
    margin-right: 30px;
  }
  @media ${({ theme }) => theme.device.pc} {
    margin-right: 80px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const CheckedAnimation = styled.img`
  width: 87px;
  height: 58px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 150px;
    height: 100px;
  }
`;

const Image = styled.img`
  margin-top: 15px;
  width: 87px;
  height: 116px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 150px;
    height: 200px;
  }
`;

export default CheckedBookItem;
