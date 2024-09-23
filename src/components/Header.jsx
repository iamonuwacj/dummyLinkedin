/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import React, { useState } from 'react'
import Home from "./Home";
import logo from '../Images/home-logo.svg'
import searchlogo from '../Images/search-icon.svg'
import homeLogo from '../Images/nav-home.svg'
import networkLogo from '../Images/nav-work.svg'
import jobsLogo from '../Images/nav-jobs.svg'
import messageLogo from '../Images/nav-messaging.svg'
import notifyLogo from '../Images/nav-notifications.svg'
import userIcon from '../Images/user.svg'
import workIcon from '../Images/nav-work.svg'
import dropDownIcon from '../Images/down-icon.svg'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";


const Header = (props) => {

    const [toggle, setToggle] = useState(true)
    const [linkTag, setLinkTag] = useState("home")

    const countState = useSelector((state) => state.counter.value)
    const dispatchState = useDispatch()

    function handleClick(tag){
        setToggle(true)
        setLinkTag(tag)
    }

  return (
    <div>
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src={logo} alt="logo" />
                    </a>
                </Logo>
                <Search>
                    <SearchIcon>
                        <img src={searchlogo} alt="" />
                    </SearchIcon>
                    <div onClick={() => dispatchState(increment())} onBlur={() => dispatchState(decrement())}>
                        <input type="text" className={`${countState && "newWidth"}`} placeholder="Search"/>
                    </div>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className={`${toggle && linkTag === "home" ? "active" : null}`} onClick={()=> handleClick("home")}>
                            <a>
                                <img src={homeLogo} alt="home icon" />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList className={`${toggle && linkTag === "my" ? "active" : null}`} onClick={()=> handleClick("my")}>
                            <a>
                                <img src={networkLogo} alt="home icon" />
                                <span>My Network</span>
                            </a>
                        </NavList>
                        <NavList className={`${toggle && linkTag === "jobs" ? "active" : null}`} onClick={()=> handleClick("jobs")}>
                            <a>
                                <img src={jobsLogo} alt="home icon" />
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <NavList className={`${toggle && linkTag === "mess" ? "active" : null}`} onClick={()=> handleClick("mess")}>
                            <a>
                                <img src={messageLogo} alt="home icon" />
                                <span>Messaging</span>
                            </a>
                        </NavList>
                        <NavList className={`${toggle && linkTag === "not" ? "active" : null}`} onClick={()=> handleClick("not")}>
                            <a>
                                <img src={notifyLogo} alt="home icon" />
                                <span>Notifications</span>
                            </a>
                        </NavList>

                        <User>
                            <a>
                                <img src={userIcon} alt="user icon" />
                                <span>
                                    Me <img src={dropDownIcon} alt="" />
                                </span>
                            </a>

                            <SignOut>
                                <a>Sign out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src={workIcon} alt="user icon" />
                                <span>
                                    Work
                                    <img src={dropDownIcon} alt="" />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
        <Home />
    </div>
  )
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    display: flex;
    position: relative;
    & > div {
        max-width: 280px;
        input {
            border: none;
            background-color: #eef3f8;
            box-shadow: none;
            border-radius: 2px;
            /* color: rgba(0, 0, 0, 0.9); */
            color: black;
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce5f1;
            vertical-align: text-top;
            transition-duration: 180ms;
        }
    }

    .newWidth {
        width: 280px;
    }
`

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 8px;
    left: 4px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    box-shadow: none;
    pointer-events: none;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* transition: background-color 0.15s;*/
`

const Nav = styled.nav`
    margin-left: auto;
    display: block;

    @media(max-width: 768px){
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: white;
    }
`

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style: none;

    .active {
        span::after {
            content: "";
            transform: scale(1);
            border-bottom: 2px solid var(--white, #fff);
            bottom: 0;
            left: 0;
            position: absolute;
            width: 100%;
            transition: transform 0.2s ease-in-out;
            border-color: rgba(0, 0, 0, 0.9);
        }
    }
`

const NavList = styled.li`
    display: flex;
    align-items: center;

    a {
        align-items: center;
        background-color: transparent;
        flex-direction: column;
        display: flex;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;

        span {
            color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
        }

        @media(max-width: 768px){
            min-height: 70px;
        }
    }

    &:hover, &:active {
        a {
            span {
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }
`

const SignOut = styled.div`
    position: absolute;
    top: 45px;
    display: none;
    background-color: white;
    border-radius: 0 0 5px 5px;
    /* width: 80px; */
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
`

const User = styled(NavList)`
    a > img {
        width: 24px;
        border-radius: 50%;
        height: 24px;
    }

    span {
        display: flex;
        align-items: center;
    }

    &:hover {
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.8);
`

export default Header