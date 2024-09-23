/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import React, { useState } from 'react'
import userImg from '../Images/user.svg'
import photoIcon from '../Images/photo.svg'
import videoIcon from '../Images/feed-icon.svg'
import eventIcon from '../Images/widget-icon.svg'
import articleIcon from '../Images/widget-icon.svg'
import sharedImg from '../Images/linkedin.png'
// import eelips from '../Images/e'

const properties = []

const Main = (props) => {

  const [writePost, setWritePost] = useState("")
  const [value, setValue] = useState("")
  const [titleValue, setTitleValue] = useState([]) 
  const [infoValue, setInfoValue] = useState([])
  const [title, setTitle] = useState([]) 
  const [info, setInfo] = useState([])

  const date = new Date()

  function handleClick(){

    setTitle((prev) => [...prev, ...[titleValue]])
    setInfo((prev) => [...prev, ...infoValue])
    setWritePost(false)
    alert("Post Submitted")
    getdateToday()
  }
  
  function getdateToday(){
    properties.push(`${date.getUTCMonth()}/${date.getDate()}/${date.getUTCFullYear()}`)
  }
  return (
    <Container>
        <ShareBox onClick={() => setWritePost(true)}>
          <div>
            <img src={userImg} alt="user pic" />
            <button>Start a post</button>
          </div>

          <div>
            <button>
              <img src={photoIcon} alt="photoIcon" />
              <span>Photo</span>
            </button>
            <button>
              <img src={videoIcon} alt="" />
              <span>Video</span>
            </button>
            <button>
              <img src={eventIcon} alt="" />
              <span>Event</span>
            </button>
            <button>
              <img src={articleIcon} alt="" />
              <span>Write article</span>
            </button>
          </div>
        </ShareBox>

        {
          writePost && (
            <div className='postBlog'>
        
              <WritePost>
                <div className='titlebox'>
                  <input type="text" value={titleValue} placeholder='Tittle' onChange={(e) => setTitleValue(e.target.value)} />
                  <input type="text" value={infoValue} placeholder='Info' onChange={(e) => setInfoValue(e.target.value)}/>
                </div>
                
                <textarea name="startPost" 
                  value={value} id="startPost" 
                  cols={10} rows={8} placeholder='write post' 
                  onChange={(e) => setValue(e.target.value)}>
                  {writePost}
                </textarea>
              
              </WritePost>
              <button onClick={() => handleClick()}>Post</button>
              </div>
          )
        }

          <div>
            <Article>
              <SharedActor>
                <a>
                  <img src={userImg} alt="" />
                  <div>
                    <span>Title: {title}</span>
                    <span>Info {info}</span>
                    <span>Date: {properties[0]}</span>
                  </div>
                </a>
                <button>
                  <img src={eventIcon} alt="" />
                </button>
              </SharedActor>
              <Description>
                Description
              </Description>
              <SharedImg>
                <a>
                  <img src={sharedImg} alt="" />
                </a>
              </SharedImg>
              <SocialCounts>
                <li>
                  <button>
                    <img src={eventIcon} alt="" />
                    <img src={eventIcon} alt="" />
                    
                    <span>75</span>
                  </button>
                </li>
                <li>
                  <a>
                    2 Comments
                  </a>
                </li>
              </SocialCounts>
              <SocialActions>
                <button>
                  <img src={eventIcon} alt="Like Icon" />
                  <span>Like</span>
                </button>

                <button>
                  <img src={eventIcon} alt="comment Icon" />
                  <span>Comments</span>
                </button>
                <button>
                  <img src={eventIcon} alt="share Icon" />
                  <span>Share</span>
                </button>
                <button>
                  <img src={eventIcon} alt="send Icon" />
                  <span>Send</span>
                </button>
              </SocialActions>
            </Article>
          </div>
    </Container>
  )
}


const Container = styled.div`
  grid-area: main;
  margin-right: 20px;

  .postBlog {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-end;

    button {
      padding: 5px 15px;
      margin: 10px ;
    }
  }
`

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      min-height: 48px;
      background-color: transparent;
      line-height: 1.5;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px;

      img {
        width: 50px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px -2px;
        }
        span {
          color: #78b5f9;
        }
      }
    }
  }
`

const Article = styled(CommonCard)`
  padding: 5px 0;
  margin: 0 0 8px;
  overflow: visible;
`

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
          
        }
      }
    }
  }

  button  {
    position: absolute;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    right: 12px;
  }
`

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;

`

const SharedImg =  styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
      align-items: center;
    }
  }
`

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;

    @media(min-width: 768px){
      span {
        margin-left: 8px;
      }
    }
  }
`

const WritePost = styled.div`
  max-height: 250px;
  width: 100%;

  overflow: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;

  .titlebox {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;

    input {
      width: 50%;
      padding: 10px;
      margin: 5px 0;
    }
  }

  textarea {
    width: 97%;
    padding: 0 10px;
    font-size: 16px;
  }
`


export default Main
