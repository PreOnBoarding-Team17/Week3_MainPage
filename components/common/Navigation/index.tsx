import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScroll } from 'utils/hooks/useScroll';
import { NAVIMAGESRC } from 'utils/constants';
const Navigation: React.FC = () => {
  const [menuBgToggle, setMenuBgToggle] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY > 0 ? setMenuBgToggle(true) : setMenuBgToggle(false);
  }, [scrollY]);

  return (
    <Nav toggle={menuBgToggle}>
      <NavWrap>
        <Logo>
          <LogoImage
            src={menuBgToggle ? NAVIMAGESRC[0] : NAVIMAGESRC[1]}
            alt="땅콩스쿨"
          />
        </Logo>
        <FullMenu toggle={menuBgToggle}>
          <a href="#">도서구매</a>
          <div>
            <a href="#">장바구니</a>
          </div>
          <div className="partition">|</div>
          <a href="#">이용권 관리</a>
          <a href="#">로그인/회원가입</a>
        </FullMenu>
        <SmallMenu toggle={menuBgToggle}>
          <div>
            <a href="#">
              <Icon
                src={menuBgToggle ? 'assets/cart-black.png' : 'assets/cart.png'}
                alt="장바구니"
              />
            </a>
          </div>
          <a href="#">
            <Icon
              src={
                menuBgToggle
                  ? 'assets/hamburger-black.png'
                  : 'assets/hamburger.png'
              }
              alt="메뉴"
            />
          </a>
        </SmallMenu>
      </NavWrap>
    </Nav>
  );
};

const Nav = styled('nav')<{ toggle: boolean }>`
  background-color: ${({ toggle }) => (toggle ? '#fff' : 'transparent')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 30px;
  z-index: 5;
  transition: all 0.5s ease 0s;
  @media ${({ theme }) => theme.device.tablet} {
    height: 90px;
  }
  @media ${({ theme }) => theme.device.pc} {
    height: 90px;
  }
`;

const NavWrap = styled('div')`
  display: flex;
  max-width: 1140px;
  justify-content: space-between;
  align-items: center;
  margin: 12px auto;

  @media ${({ theme }) => theme.device.tablet} {
    margin: 20px auto;
  }
  @media ${({ theme }) => theme.device.pc} {
    margin: 20px auto;
  }
`;

const Logo = styled('div')`
  cursor: pointer;
`;
const LogoImage = styled('img')`
  width: 112.2px;
  height: 36px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 154.5px;
    height: 50px;
  }
`;

const FullMenu = styled('div')<{ toggle: boolean }>`
  display: none;
  align-items: center;

  & a {
    color: ${({ toggle }) => (toggle ? '#000' : '#fff')};
    text-decoration: none;
    font-size: 16px;
    margin-right: 50px;
  }

  & *:last-of-type {
    margin-right: 0;
  }

  & > .partition {
    margin: 0px 50px 2px;
    color: ${({ toggle }) => (toggle ? '#000' : '#fff')};
    width: 1.5px;
    -webkit-box-align: center;
    align-items: center;
    opacity: 0.5;
    font-weight: bold;
  }

  @media ${({ theme }) => theme.device.pc} {
    display: flex;
  }
`;

const SmallMenu = styled('div')<{ toggle: boolean }>`
  display: flex;

  align-items: center;

  & a {
    color: ${({ toggle }) => (toggle ? '#000' : '#fff')};
    text-decoration: none;
    font-size: 16px;
    margin-right: 50px;
  }

  & *:last-of-type {
    margin-right: 0;
  }

  & > *:first-child {
    margin-right: 20px;
  }

  @media ${({ theme }) => theme.device.pc} {
    display: none;
  }
`;

const Icon = styled('img')`
  width: 24px;
  height: 24px;
`;

export default Navigation;
