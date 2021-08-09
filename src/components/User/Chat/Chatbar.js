import { useSelector } from "react-redux"
import styled from "styled-components"
import TopHeader from '../TopHeader'
import Chat from "./Chat"

const Chatbar = (props) => {
  const { auth } = useSelector((store) => store)
  const firstname = auth.user.first_name.toUpperCase()
  return (
    <ChatbarContainer>
      <TopHeader />
      {
        props.show ?
          <Chat />
          :
          <ChatPage>
            <h1>Welcome Back {firstname}</h1>
          </ChatPage>
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

const ChatPage = styled.div`
  display: flex;
  justify-content: center;
`