import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import LogoWhite from 'public/assets/logo-white.png'
import Cart from 'public/assets/cart.png'
import Hamburger from 'public/assets/hamburger.png'

const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavWrap>
        <Logo>
          <Image src={LogoWhite} alt="땅콩스쿨" />
        </Logo>
        <FullMenu>
          <a href="javascript:void(0)">도서구매</a>
          <div>
            <a href="javascript:void(0)">장바구니</a>
          </div>
          <div className="partition">|</div>
          <a href="javascript:void(0)">이용권 관리</a>
          <a href="javascript:void(0)">로그인/회원가입</a>
        </FullMenu>
        <SmallMenu>
          <div>
            <a href="javascript:void(0)">
              <Image src={Cart} width={24} height={24} alt="장바구니" />
            </a>
          </div>
          <a href="javascript:void(0)">
            <Image src={Hamburger} width={24} height={24} alt="메뉴" />
          </a>
        </SmallMenu>
      </NavWrap>
    </Nav>
  )
}

const Nav = styled('nav')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0 30px;
  z-index: 5;
  @media ${({ theme }) => theme.device.tablet} {
    height: 90px;
  }
  @media ${({ theme }) => theme.device.pc} {
    height: 90px;
  }
`

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
`

const Logo = styled('div')`
  width: 112.2px;
  height: 36px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 154.5px;
    height: 50px;
  }
  @media ${({ theme }) => theme.device.pc} {
    width: 154.5px;
    height: 50px;
  }
`

const FullMenu = styled('div')`
  display: none;
  align-items: center;

  & a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    margin-right: 50px;
  }

  & *:last-of-type {
    margin-right: 0;
  }

  & > .partition {
    margin: 0px 50px 2px;
    color: white;
    width: 1.5px;
    -webkit-box-align: center;
    align-items: center;
    opacity: 0.5;
    font-weight: bold;
  }

  @media ${({ theme }) => theme.device.pc} {
    display: flex;
  }
`

const SmallMenu = styled('div')`
  display: flex;

  align-items: center;

  & a {
    color: white;
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
`

export default Navigation
