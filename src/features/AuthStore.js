import * as axios from '../utils/chatEngineApi'
import * as storage from '../utils/storage'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async (payload) => {
    console.log(payload)
    const data = await axios.requestWithoutKey('users/me', {}, "GET", payload)
    return data.data
  }
)

const AuthStore = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuth: false,
    errors: null,
    secret: null,
  },
  reducers: {
    resetState(state, action) {
      state.user = null
      state.errors = null
      state.isAuth = false
      state.secret = null
      return state
    },
    getUser(state, action) {
      state.user = storage.get(storage.AUTH_KEY)
      state.secret = storage.get(storage.AUTH_SECRET)
      state.errors = null
      if (state.user === null) {
        state.isAuth = false
      } else {
        state.isAuth = true
      }
    },

  },
  extraReducers: {
    [loginAsync.fulfilled]: (state, action) => {

      if (action.payload.hasOwnProperty("username")) {
        state.errors = null
        state.isAuth = true
        state.secret = action.meta.arg
        storage.save(storage.AUTH_SECRET, state.secret)
        state.user = action.payload
        storage.save(storage.AUTH_KEY, state.user)
      } else {
        state.errors = "Invalid Credentials"
      }
    },
  }
})

export const { resetState, getUser } = AuthStore.actions

export default AuthStore.reducer