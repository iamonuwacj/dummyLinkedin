/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import React from 'react'
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";


const Home = (props) => {

  const count = useSelector((state) => state.counter.value)
  return (
    <Container className={`${count && "bgChange"}`}>
      <Section>
        <h5>
          <a>Hiring in a hurry?</a>
        </h5>
        <p>
          Find talented pros in record time with upwork and keep business moving
        </p>
      </Section>
      <Layout>
        <LeftSide></LeftSide>
        <Main></Main>
        <RightSide></RightSide>
      </Layout>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`
const Content = styled.div`
  max-width: 1128px;
  /* background-color: yellow; */
  margin: 0 auto;
`

const Section = styled.div`
  min-height: 50px;
  padding: 16px;
  box-sizing: content-box;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  text-decoration: underline;

  h5 {
    font-size: 14px;
    color: #0a66c2;

    a {
      font-weight: 7--;
    }
  }

  p {
    font-size: 14px;
    color: #434549;
    font-weight: 600;
  }

  @media(max-width: 768px){
    flex-direction: column;
    padding: 0 5px;
  }
`

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftSide main rightSide";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7px);
  row-gap: 25px;
  /* grid-template-rows: auto; */
  margin: 25px;

  @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`

export default Home