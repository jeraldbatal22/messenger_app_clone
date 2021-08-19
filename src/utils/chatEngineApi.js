import axios from "axios"

//  WITH PRIVATE KEY

export const requestWithKey = (url = "", data, method = "") => {
  const res = axios({
    url: `https://api.chatengine.io/${url}`,
    method,
    data,
    headers: {
      "PRIVATE-KEY": "ecbfb6dc-939d-41fa-9a1f-91fb2c9ae53a"
    }
  })
    .then((res) => {
      return res
    }).catch((err) => {
      return err.response
    })
  return res
}

//  WITHOUT PRIVATE KEY

export const requestWithoutKey = (url = "", data = {}, method = "", secret = {}) => {
  const res = axios({
    url: `https://api.chatengine.io/${url}`,
    method,
    data,
    headers: {
      "Project-ID": "4262cfc6-379e-40c5-9ac6-210a88f27dfa",
      "User-Name": secret.username,
      "User-Secret": secret.password,
    }
  })
    .then((res) => {
      return res
    }).catch((err) => {
      return err.response
    })
  return res
}