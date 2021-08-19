import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { chatMessagesAsync } from "../../../features/ChatStore"
import TopHeader from '../TopHeader'
import Chat from "./Chat"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"

const Chatbar = (props) => {
  const dispatch = useDispatch()
  const { auth } = useSelector((store) => store)
  const { chatId, messages } = useSelector(({ chat }) => chat)
  if (messages === null) {
    dispatch(chatMessagesAsync({ id: chatId, secret: auth.secret }))
  }

  // // const firstname = auth.user.first_name.toUpperCase()
  return (
    <ChatbarContainer>
      <TopHeader />
      {
        props.show ?
          <Chat />
          :
          <ChatContainer >
            <ChatMessages />
            <ChatInput />
          </ChatContainer>
      }

    </ChatbarContainer>
  )
}

export default Chatbar

const ChatbarContainer = styled.div`
  /* flex-grow: 1; */
  overflow-y: scroll;
  flex: 1;
  justify-content: center;
  height: 100vh;

  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 6px;
  } 
`

// const LastChat = styled.div`
//   display: flex;
//   justify-content: center;
// `

const ChatContainer = styled.div`
  margin-bottom: 50px !important;
`