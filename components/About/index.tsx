import React from 'react';
import styled from 'styled-components';
import { AboutText } from 'utils/constants';

interface AboutProps {
  isPc: boolean;
}

const About = ({ isPc }: AboutProps) => {
  return (
    <AboutContainer>
      <Image src="/assets/second-logo.gif" alt="logo" />
      <AboutTitle>땅콩스쿨이란?</AboutTitle>
      <AboutContent>{AboutText(isPc)}</AboutContent>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  box-sizing: border-box;
  background-color: #ffb100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 20px 100px 20px;
  color: #fff;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 130px 30px 150px 30px;
  }
`;

const Image = styled.img`
  width: 67px;
  height: 50px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 134px;
    height: 100px;
  }
`;

const AboutTitle = styled.div`
  font-size: 30px;
  margin-bottom: 45px;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 50px;
    margin-bottom: 70px;
  }
`;

const AboutContent = styled.div`
  white-space: pre-wrap;
  text-align: center;
  font-size: 16px;
  line-height: 1.75;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
    line-height: 1.67;
  }
`;

export default About;
