import { useState } from "react"
import styled from "styled-components"
import Chatbar from "./Chat/Chatbar"
import Sidebar from "./Sidebar"

const Messages = () => {
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