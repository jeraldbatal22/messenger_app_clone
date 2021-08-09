import { Clear, Dehaze } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'

const Header = () => {


  let [show, setIsShow] = useState(false)

  const showNav = () => {
    setIsShow(show = !show)
  }

  return (
    <div>
      <HeaderContainer >
        {
          show &&
          <ul className="small_ul" style={show ? { display: "flex" } : ""}>
            <li>Rooms</li>
            <li>Features</li>
            <li>Privacy & Safety</li>
            <li>For & Developers</li>
          </ul>
        }

        <ul className="main_ul" style={show ? { display: "none" } : { display: "flex" }}>
          <li>Rooms</li>
          <li>Features</li>
          <li>Privacy & Safety</li>
          <li>For & Developers</li>
        </ul>

        {show ? <Clear className="icon" onClick={showNav} /> : <Dehaze className="icon" onClick={showNav} />}
      </HeaderContainer>
    </div>
  )
}

export default Header

const HeaderContainer = styled.div`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0 10px;
    font-weight: 600;
  }

  li:hover {
      color: #000;
      border-bottom-style: solid;
      border-bottom-width: 3.1px;
      border-color: #0080FF;
      width: fit-content;
      cursor: pointer;
    }

  .icon {
    display: none;
  }

  @media (max-width: 768px) { 
    .small_ul {
      background: #fff;
      width: 120%;
      left: 0;
      height: 95vh;
      display: none;
      flex-direction: column;
      position: absolute;
      margin-top: 40px;
      font-size: 1.7rem;
      color: gray;
      z-index: 1;
    }

    .small_ul li {
      margin-top: 80px;
      font-weight: 550;
      margin-left: 30px;
    }

    .main_ul {
      display: none !important;
    }

    .icon {
      display: block;
      position: absolute;
      right: 0;
      margin: -5px 30px;
      font-size: 3rem;
      cursor: pointer;
    }
  }

  @media (max-width: 280px) { 
    .icon {
      margin-right: 20px ;
    }
  }
`