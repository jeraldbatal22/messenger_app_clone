import styled from 'styled-components'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

const Chat = () => {

  return (
    <ChatContainer >
      <ChatMessages />
      <ChatInput />
    </ChatContainer>
  )
}

export default Chat

const ChatContainer = styled.div`
  margin-bottom: 100px !important;
`

