import styled from "styled-components"
import Login from "./Login"
import messenger_content from '../../images/content.jpg'

const Content = (props) => {
  return (
    <div>
      <ContentContainer>
        <LeftSideContent>
          <h1>Hang out</h1>
          <h1>Anytime,</h1>
          <h1>Anywhere</h1>
          <p>Messenger makes it easy and fun to stay close to your favorite people.</p>
          <Login users={props.users} getUser={props.getUser} />
        </LeftSideContent>

        <RightSideContent>
          <img src={messenger_content} alt="" />
        </RightSideContent>

      </ContentContainer>
    </div>
  )
}

export default Content

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 150px;
`

const LeftSideContent = styled.div`
  flex:50%;
  margin-left: 200px;

  h1 {
    font-size: 5rem;
    color: #fc00ff; 
    font-family: 'Roboto', sans-serif;
    background: -webkit-linear-gradient(#3F5EFB, #FC466B);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) { 
    h1 {
      font-size: 2.8rem !important;
      margin-right: 20px;
    }
    p {
    font-size: 1.4rem;
    }
  }

  @media (max-width: 414px) { 
    h1 {
      font-size: 3.5rem ;
      margin-right: 20px;
    }
  }

`

const RightSideContent = styled.div`
  flex:50%;
  margin-right: 200px;
  justify-content: space-around;

  img {
    max-width: 600px;
  }
  
  @media (max-width: 768px) { 
     
  img {
      display: none;
    }
  }

 
`
