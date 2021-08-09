import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { loginAsync, resetState } from "../../features/AuthStore"
import { userAsync } from "../../features/UsersStore"

const Login = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { isAuth, user, errors } = useSelector(({ auth }) => auth);

  const [loginUser, setLoginUser] = useState({
    username: '',
    password: ''
  })

  const onHandleInput = (e) => {
    const { name, value } = e.target
    loginUser[name] = value
    setLoginUser({ ...loginUser })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    if (loginUser.username === "") {
      return console.log('Input Username')
    }
    if (loginUser.password === "") {
      return console.log('Input Password')
    }
    dispatch(loginAsync(loginUser))
  }

  useEffect(() => {
    if (errors !== null) {
      dispatch(resetState())
      console.log(errors)
    }
    if (user !== null) {
      dispatch(userAsync())
      console.log("Successfully login")
      history.push('/messages')
    }
  }, [user, errors, history, isAuth, dispatch])

  return (
    <FormContainer>
      <form onSubmit={onHandleSubmit}>
        <div>
          <input type="text" placeholder="Username or Phone Number" name="username" onChange={onHandleInput} autoComplete="off" />
          <input type="password" placeholder="Password" name="password" onChange={onHandleInput} />
        </div>
        <button type="submit">
          Log In
        </button>
        <a href="!">Forget your password?</a>
      </form>
    </FormContainer>
  )
}

export default Login


const FormContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin-top: 20px;
  }

  input {
    padding: 15px 25px;
    border-radius: 10px;
    border: none;
    background: whitesmoke;
    margin: 10px 0px;
  }

  button {
    margin: 10px 0px;
    margin-right: 10px;
    padding: 15px 25px;
    border-radius: 20px;
    border: none;
    background: 	dodgerblue;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
  button:hover {
    background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B); 
    background: linear-gradient(to right, #3F5EFB, #FC466B);
  }

  a {
    color: dodgerblue;
    font-weight: 501;
    margin-left: 100px;
  }

  @media (max-width: 768px) { 
  input {
      width: 140%;
    }
  }
  a {
    margin-left: 80px;
  }

  @media (max-width: 320px) { 
    input {
      width: 125% !important;
    }
    a {
      margin-left: 0px;
      font-size: .65rem !important ;
    }
  }

  @media (max-width: 414px) { 
    a {
      margin-left: 8px;
      font-size: 1rem ;
    }
    input {
      width: 130%;
    }
  }

`