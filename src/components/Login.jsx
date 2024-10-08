import React from 'react'
import styled from 'styled-components'
import loginLogo from '../Images/login-logo.svg'
import loginhero from '../Images/login-hero.svg'
import googleImg from '../Images/google.svg'
import {NavLink} from 'react-router-dom'
// import { connect } from 'react-redux'

const Login = (props) => {
  return (
    <Container>
        <Nav>
            <a href="/">
                <img src={loginLogo} alt='logo'/>
            </a>
            <div>
                <Join>
                    Join Now
                </Join>

                <SignIn>
                    <NavLink to={"/home"} className={"navlink"}>
                        Sign In
                    </NavLink>
                </SignIn>
            </div>
        </Nav>

        <Section>
            <Hero>
                <h1>Welcome to your proffessional community</h1>
                <img src={loginhero} alt="hero img" />
            </Hero>
            <Form>
                <NavLink className={"navlink"} to={"/home"}>
                    <Google>
                        <img src={googleImg} alt="google img" />
                        Sign in With Google
                    </Google>
                </NavLink>
            </Form>
        </Section>
    </Container>
  )
}


const Container = styled.div`
    padding: 0px
`

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a {
        width: 135px;
        height: 34px;
        padding: 0 5px;
    }
`

const Join = styled.a`
    font-size: 16px;
    padding: 10px 15px;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
        border-radius: 50px;
    }

`


const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600px;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    /* background-color: rgba(0,0,0,0); */

    .navlink {
        text-decoration: none;
        color: #0a65c2;
    }

    &:hover {
        background-color: rgba(112, 161, 249, 0.15);
        color: #0a65c2;
        text-decoration: none;
    }
`

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    /* background-color: yellow; */
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;

    @media (max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`

const Hero = styled.div`
    width: 100%;
    margin-top: 150px;

    @media(max-width: 768px){
        margin-top: unset;
    }

    h1 {
        padding-bottom: 0;
        width: 50%;
        font-size: 52px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;

        @media (max-width: 768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    img {
        /* z-index: -1; */
        width: 700px;
        height: 670px;
        position: absolute;
        top: 70px;
        right: -150px;

        @media (max-width: 768px){
            top: 230px;
            width: initial;
            position: initial;
            height: initial;

        }
    }
`

const Form = styled.div`
    margin-top: 100px;
    width: 408px;

    .navlink {
        text-decoration: none;
        color: #0a65c2;
    }

    @media(max-width: 768px){
        margin-top: 20px;
    }
`

const Google = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 56px;
    width: 100%;
    border-radius: 50px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), 
        inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgb(0, 0, 0, 0.6);

    &:hover {
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);

    }
`

export default Login