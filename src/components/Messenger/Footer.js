import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <p>Coming soon! Message your Instagram friends right from Messenger. <a href="!">Learn More.</a></p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 0;
  font-size: 1rem;
  height: 7vh;
  background: #FC466B; 
  color: #ffff;
  background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B); 
  background: linear-gradient(to right, #3F5EFB, #FC466B);
  text-align:center;
  a {
    color: #fff;
  }
  @media (max-width: 280px) { 
    div {
      padding: 20px;
    }
  }
`