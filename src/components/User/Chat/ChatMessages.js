import { Avatar } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import ScrollToBottom from 'react-scroll-to-bottom'
import { useEffect, useRef } from "react"
import { Delete } from "@material-ui/icons"
import { deleteMessageAsync, getAllMessages } from "../../../features/ChatStore"

const ChatMessages = () => {
  const dispatch = useDispatch()
  const { messages, chatId } = useSelector(({ chat }) => chat)
  const { user, secret } = useSelector(({ auth }) => auth)
  const messagesEndRef = useRef(null)

  const deleteMessage = (id) => {
    dispatch(deleteMessageAsync({ chatId, secret, messageId: id }))
    const res = messages.filter(res => res.id !== id)
    dispatch(getAllMessages(res))
  }

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);

  return (
    <ChatMessagesContainer>
      <ScrollToBottom >
        {
          messages.length > 0 &&
          messages.map((message, index) => {
            return <MessagesContainer key={index}
              style={message.sender_username !== user.username ? { float: 'left' } : {
                flexDirection: "row-reverse",
                textAlign: "right",
                float: "right",
              }}
            >
              <div className="user_img">
                <Avatar />
              </div>
              <Convo>
                <h3>{message.sender_username}</h3>
                <p
                  style={message.sender_username !== user.username ? { background: 'whitesmoke' } : {
                    background: "dodgerblue",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >{message.sender_username === user.username && <Delete className="deleteBtn" onClick={() => deleteMessage(message.id)} />}{message.text}</p>
              </Convo>
            </MessagesContainer>
          })
        }
      </ScrollToBottom>
      <div ref={messagesEndRef} />
    </ChatMessagesContainer>
  )
}

export default ChatMessages


const ChatMessagesContainer = styled.div`
  .user_img {
    display: flex;
    margin-right: 20px;
  }

`

const MessagesContainer = styled.div`
  display: flex;
  margin: 20px;
  width: 50%;
  float: left;

  p {
    background: whitesmoke;
    padding: 10px;
    border-radius: 20px;
    text-align:left;
    font-size: .9rem;
    font-family: 'Titillium Web', sans-serif;
    letter-spacing: 0.7px;
  }
  p:first-letter, h3:first-letter {
    text-transform:capitalize;
  }

@media (max-width: 540px) { 
    width: 91%;
    p {
      font-size: 0.8rem;
    }

    h3 {
      font-size: 0.9rem;
    }
  }

  .deleteBtn {
    font-size: 0.8rem;
    cursor: pointer;
  }
`

const Convo = styled.div`
  display: flex;
  flex-direction: column;
`
