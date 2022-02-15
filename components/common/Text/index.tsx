import styled from 'styled-components';

interface TextProps {
  text: string | (() => void);
}

const Text = ({ text }: TextProps) => {
  return <Container>{text}</Container>;
};

const Container = styled.p`
  padding-top: 30px;
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 1.75;
  text-align: center;
  @media ${({ theme }) => theme.device.tablet} {
    padding-top: 50px;
    font-size: 24px;
    line-height: 1.67;
  }
`;

export default Text;
