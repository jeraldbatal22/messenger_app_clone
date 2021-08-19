import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { chatMessagesAsync } from "../../features/ChatStore"
import Chatbar from "./Chat/Chatbar"
import Sidebar from "./Sidebar"

const Messages = () => {
  const dispatch = useDispatch()

  const { secret } = useSelector(({ auth }) => auth)
  let { id } = useParams()

  if (id) {
    dispatch(chatMessagesAsync({ id: parseFloat(id), secret }))
  }

  const [show, setIsShow] = useState(false)
  return (
    <MainContainer>
      <Sidebar setIsShow={setIsShow} />
      <Chatbar show={show} />
    </MainContainer>
  )
}

export default Messages

const MainContainer = styled.div`
  display: flex;
`