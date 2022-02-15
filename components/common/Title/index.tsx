import styled from 'styled-components';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <Container className="fade-up">{title}</Container>;
};

const Container = styled.h2`
  white-space: pre-wrap;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.47;
  text-align: center;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
    line-height: 1.44;
  }
`;

export default Title;
