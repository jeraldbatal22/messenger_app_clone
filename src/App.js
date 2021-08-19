import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Messenger from './components/Messenger/Messenger'
import Content from './components/Messenger/Content';
import Footer from './components/Messenger/Footer';
import Messages from './components/User/Messages';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUser } from './features/AuthStore'
import { CircularProgress } from '@material-ui/core';
import { userAsync } from './features/UsersStore';
import { chatAsync } from './features/ChatStore';
function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const { isAuth, secret } = useSelector(({ auth }) => auth)

  if (secret !== null) {
    dispatch(chatAsync(secret))
  }

  useEffect(() => {
    dispatch(getUser())
    dispatch(userAsync())
    setIsLoading(false)
  }, [dispatch])

  if (isLoading) {
    return (
      <AppLoadingContainer >
        <CircularProgress disableShrink />
        <h1>Loading... Please wait...</h1>
      </AppLoadingContainer>
    )
  }

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Messenger />
            <Content />
            <Footer />
          </Route>

          {
            isAuth ?
              <AppBody>
                <Route path="/messages/:id">
                  <Messages />
                </Route>
              </AppBody>
              :
              <Redirect to="/" />

          }

        </Switch>
      </Router>

    </div >
  );
}

export default App;

const AppBody = styled.div`
  height: 100vh;
`

const AppLoadingContainer = styled.div`
  text-align:center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

   .MuiSvgIcon-root {
    margin-right: 5px;
    font-size: 10rem;
  }
`