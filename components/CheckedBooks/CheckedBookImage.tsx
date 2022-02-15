import styled from 'styled-components';
import CheckedBookItem from './CheckedBookItem';
import { CheckedBookContents } from 'utils/constants';

const CheckedBookImage = () => {
  return (
    <Container>
      {CheckedBookContents.map((item, index) => {
        return (
          <CheckedBookItem
            key={index}
            checked={item.checked}
            book={item.book}
            index={index}
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
