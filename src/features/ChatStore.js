import * as axios from '../utils/chatEngineApi'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const chatAsync = createAsyncThunk(
  'chat/chatAsync',
  async (payload) => {
    const data = await axios.requestWithoutKey('chats', {}, "GET", payload)
    return data.data
  }
)
export const deleteChatAsync = createAsyncThunk(
  'chat/deleteChatAsync',
  async (payload) => {
    const data = await axios.requestWithoutKey(`chats/${payload.chatId}/`, {}, "DELETE", payload.secret)
    return data.data
  }
)


export const chatMessagesAsync = createAsyncThunk(
  'chat/chatMessagesAsync',
  async (payload) => {
    const data = await axios.requestWithoutKey(`chats/${payload.id}/messages`, {}, "GET", payload.secret)
    return data.data
  }
)

export const chatMessagesSendAsync = createAsyncThunk(
  'chat/chatMessagesSendAsync',
  async (payload) => {
    const data = await axios.requestWithoutKey(`chats/${payload.chatId}/messages/`, payload.sendMessage, "POST", payload.secret)
    return data.data
  }
)

export const deleteMessageAsync = createAsyncThunk(
  'chat/deleteMessageAsync',
  async (payload) => {
    const data = await axios.requestWithoutKey(`chats/${payload.chatId}/messages/${payload.messageId}`, {}, "DELETE", payload.secret)
    return data.data
  }
)

const ChatStore = createSlice({
  name: 'chat',
  initialState: {
    list: [],
    messages: [],
    chatId: null,
    lastMessage: null,
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
    getAllMessages: (state, action) => {
      state.messages = action.payload
    },
    getChats: (state, action) => {
      state.list = action.payload
    },
  },
  extraReducers: {
    [chatAsync.fulfilled]: (state, action) => {
      state.list = action.payload
      state.chatId = action.payload[0].id
    },
    [chatMessagesAsync.fulfilled]: (state, action) => {
      state.messages = action.payload
    },
    [chatMessagesSendAsync.fulfilled]: (state, action) => {
      state.messages.push(action.payload)
    },
  }
})

export const { getUserDetails, enterChatRoom, resetStateChat, resetMessages, getAllMessages, getChats } = ChatStore.actions

export default ChatStore.reducer