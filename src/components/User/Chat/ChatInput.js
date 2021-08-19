import { Button } from "@material-ui/core"
import { AddCircle, EmojiEmotions, GifOutlined, Image, ThumbUp } from "@material-ui/icons"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { chatMessagesSendAsync } from "../../../features/ChatStore"

const ChatInput = () => {

  const dispatch = useDispatch()
  const [sendMessage, setSendMessage] = useState({ text: "" })
  const { chatId } = useSelector(({ chat }) => chat)
  const { secret } = useSelector(({ auth }) => auth)

  const onHandleChange = (e) => {
    setSendMessage({ ...sendMessage, text: e.target.value })
  }

  const onHandleSend = (e) => {
    e.preventDefault()
    dispatch(chatMessagesSendAsync({ sendMessage, chatId, secret }))
    setSendMessage({ ...sendMessage, text: "" })
  }


  return (
    <ChatInputContainer>
      <form onSubmit={onHandleSend}>
        <AddCircle />
        <Image />
        <GifOutlined />
        <input type="text" name="body" value={sendMessage.text} placeholder="Message" autoComplete="off" onChange={onHandleChange} />
        <Button type="submit">SEND </Button>
        <EmojiEmotions />
        <ThumbUp />
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  form {
    position: absolute;
    bottom: 0;
    width: 75%;
    /* width: 1450px; */
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff; 
  }

  form input {
    background: whitesmoke;
    width: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px 20px;
    outline: none;
    border: none;
    margin-bottom: 10px;
  }
  
  form .MuiSvgIcon-root {
    display: flex;
    align-items: center;
    margin:5px;
    color: darkorange;
    cursor: pointer;
  }

  @media (max-width: 540px) { 
    form {
      width: 70%;
    }

    form  {
      width: 65%;
    }
    form  .MuiSvgIcon-root {
      display: none;
    }
  }
`