import { Avatar } from "@material-ui/core"
import { Create, Delete, MoreHoriz, Search, VideoCall } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { chatMessagesAsync, deleteChatAsync, enterChatRoom, getChats, resetMessages } from "../../features/ChatStore"

const Sidebar = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { list } = useSelector(({ chat }) => chat)
  const { secret } = useSelector(({ auth }) => auth)

  const selectMessage = (id) => {
    history.push(`/messages/${id}`)
    dispatch(chatMessagesAsync({ id, secret }))
    dispatch(enterChatRoom(id))
    dispatch(resetMessages())
    props.setIsShow(true)
  }

  return (
    <LeftSidebarContainer>
      <div className="sticky_header">
        <LeftSidebars >
          <HeaderLeft>
            <Avatar />
            <h2>Chat</h2>
          </HeaderLeft>

          <HeaderRight>
            <MoreHoriz className="iconLeft" />
            <VideoCall className="iconLeft" />
            <Create className="iconLeft" />
          </HeaderRight>

        </LeftSidebars>

        <HeaderSearch >
          <Search className="search_icon" /><input type="text" placeholder="Search Messenger" />
        </HeaderSearch>

      </div>

      <MessagesContainer>
        {
          list.map((chat, index) => {
            return <div className="messages_body" onClick={() => selectMessage(chat.id)} key={index}>
              <Avatar className="images" />
              {
                chat.last_message.sender_username !== "" ?
                  <div className="messages">

                    <h3>{chat.title}</h3>

                    <p>{chat.last_message.sender_username}: {chat.last_message.text}</p>
                  </div>

                  :
                  <div className="messages">

                    <h3>{chat.title}</h3>


                    <p>Empty Message...</p>

                  </div>

              }
            </div>
          })
        }

      </MessagesContainer>

    </LeftSidebarContainer>
  )
}

export default Sidebar

const LeftSidebarContainer = styled.div`
  flex:0.3;
  border-right: 1px solid rgb(214, 205, 205);
  overflow-y: scroll;
  height: 100vh;

  @media (max-width: 540px) { 
   flex:0.4;
  }
  
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

  .sticky_header {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #fff;
    padding-bottom: 20px;
  }
`

const LeftSidebars = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
`

const HeaderSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
  input {
    width:80% ;
    border-radius: 20px;
    border: none;
    background: whitesmoke;
    padding:10px 20px;
  }
`

const HeaderLeft = styled.div`
  display: flex;
  margin: 20px;
  h2 {
    margin-top: 4px;
    margin-left: 10px;
  }
  @media (max-width: 540px) { 
  h2 {
    display: none;
  }
}
`

const HeaderRight = styled.div`
  display: flex;
  margin: 20px;

  .iconLeft {
    padding: 8px;
    margin: 0px 8px;
    font-size: 2.3rem;
    border-radius: 999px;
    background: whitesmoke;
    cursor: pointer;
  }

  .iconLeft:hover {
    background: rgb(214, 205, 205);
  }
  @media (max-width: 540px) { 
  .iconLeft {
    display: none;
  }
}
`

const MessagesContainer = styled.div`
  .images {
    display: flex;
    margin: 20px;
    width: 45px;
    height:45px ;
    background: darkblue;
  }

  .messages {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
  }

  .messages_body {
    display: flex;
    cursor: pointer;
  }

  .deleteBtn {
    font-size: 1rem;
    cursor: pointer;
  }

  .deleteBtn:hover {
    color: red;
  }

  p:first-letter {
    text-transform:capitalize;
  }

  @media (max-width: 540px) { 
    .messages {
      display: none;
    }
  }

`