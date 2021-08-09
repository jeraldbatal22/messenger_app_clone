import * as axios from '../utils/chatEngineApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const chatAsync = createAsyncThunk(
  'chat/chatAsync',
  async (payload) => {
    const data = await axios.userRequestDetails('chats', {}, "GET", payload)
    console.log(data)
    return data.data
  }
)

export const chatMessagesAsync = createAsyncThunk(
  'chat/chatMessagesAsync',
  async (payload) => {
    const data = await axios.userRequestDetails(`chats/${payload.id}/messages`, {}, "GET", payload.secret)
    return data.data
  }
)

export const chatMessagesSendAsync = createAsyncThunk(
  'chat/chatMessagesSendAsync',
  async (payload) => {
    const data = await axios.userRequestDetails(`chats/${payload.chatId}/messages/`, payload.sendMessage, "POST", payload.secret)
    return data.data
  }
)

const ChatStore = createSlice({
  name: 'chat',
  initialState: {
    list: [],
    messages: [],
    chatId: null,
  },
  reducers: {
    resetStateChat(state, action) {
      state.list = []
      state.messages = []
      state.chatId = null
      return state
    },
    getUserDetails(state, action) {
      state.list = []
      return state
    },
    enterChatRoom: (state, action) => {
      state.chatId = action.payload
    },
    resetMessages: (state, action) => {
      state.messages = []
    },
  },
  extraReducers: {
    [chatAsync.fulfilled]: (state, action) => {
      state.list = action.payload
    },
    [chatMessagesAsync.fulfilled]: (state, action) => {
      state.messages = action.payload
    },
    [chatMessagesSendAsync.fulfilled]: (state, action) => {
      state.messages.push(action.payload)
    },
  }
})

export const { getUserDetails, enterChatRoom, resetStateChat, resetMessages } = ChatStore.actions

export default ChatStore.reducer