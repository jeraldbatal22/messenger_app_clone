import { Avatar, Button } from "@material-ui/core"
import { MoreHoriz, NotificationsOff, Phone, Videocam } from "@material-ui/icons"
import styled from "styled-components"
import * as storage from '../../utils/storage'
import { resetState } from "../../features/AuthStore"
import { useDispatch, useSelector } from "react-redux"
import { deleteChatAsync, enterChatRoom, getChats, resetStateChat } from "../../features/ChatStore"
import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"

const TopHeader = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { chatId, list } = useSelector(({ chat }) => chat)
  const { secret } = useSelector(({ auth }) => auth)

  const [chatList, setChatList] = useState({ list })
  const id = list.find(res => res.id === chatId)
  const logout = () => {
    dispatch(resetStateChat())
    dispatch(resetState())
    storage.remove(storage.AUTH_KEY)
    storage.remove(storage.AUTH_SECRET)
    console.log("Successfully Logout")
  }
  console.log(id)
  const deleteChat = () => {
    // dispatch(deleteChatAsync({ chatId, secret }))
    const res = list.filter(res => res.id !== chatId)
    dispatch(getChats(res))
    setChatList({ list: res })
    dispatch(enterChatRoom(list[0].id))
    if (list[0].id === chatId) {
      history.push(`/messages/${list[1].id}`)
    } else {
      history.push(`/messages/${list[0].id}`)
    }
  }

  return (
    <Header>
      <HeaderLeft>
        <Avatar className="avatar" />
        <h2>{id && id.title}<NotificationsOff className="notif" /></h2>
      </HeaderLeft>
      <HeaderRight>
        <Button variant="contained" onClick={logout} className="btn">Logout</Button>
        <Phone className="iconRight" />
        <Videocam className="iconRight" />
        <MoreHoriz className="iconRight" onClick={deleteChat} />
      </HeaderRight>

    </Header>
  )
}

export default TopHeader

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(214, 205, 205);
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
`
const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  h2 {
    display: flex;
    flex-direction: column;
    margin-left:15px ;
  }

  .notif {
    font-size: 1rem;
    color: gray;
  }

  @media (max-width: 540px) { 
    h2 {
      font-size: 0.8rem;
    }
  }
  
`
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;

  .btn {
    border-radius: 50px;
    font-size: 0.7;
  }

  .iconRight {
    margin: 0px 10px;
    color: darkorange;
    font-size: 1.8rem;
    cursor: pointer;
  }

  @media (max-width: 540px) { 
    .iconRight {
      display: none;
    }
    .btn {
      display: none;
    }
  }

`