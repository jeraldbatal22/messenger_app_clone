import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import messenger_logo from '../../images/messenger_logo.png'
import Header from './Header'
const Messanger = () => {
  return (
    <MessangerContainer>
      <a href="!"><Avatar src={messenger_logo} className="logo" /></a>
      <Header />
    </MessangerContainer>
  )
}

export default Messanger

const MessangerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px ;

  @media (max-width: 768px) { 
  .logo {
    position: absolute;
    left: 0;
    margin: 0px 30px;
    }
  }
`