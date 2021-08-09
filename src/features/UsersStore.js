import * as axios from '../utils/chatEngineApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const userAsync = createAsyncThunk(
  'users/userAsync',
  async (payload) => {
    const data = await axios.userRequest('users', payload, "GET")
    return data.data
  }
)

const UsersStore = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    getUserDetails(state, action) {
      state.list = []
      return state
    },
  },
  extraReducers: {
    [userAsync.fulfilled]: (state, action) => {
      state.list = action.payload
      // if (action.payload.hasOwnProperty("username")) {
      //   state.errors = null
      //   state.isAuth = true
      //   state.user = action.payload
      //   storage.save(storage.AUTH_KEY, state.user)
      // } else {
      //   state.errors = "Invalid Credentials"
      // }
    },
  }
})

export const { getUserDetails } = UsersStore.actions

export default UsersStore.reducer