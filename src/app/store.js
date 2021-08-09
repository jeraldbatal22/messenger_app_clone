import { configureStore } from "@reduxjs/toolkit";
import AuthStore from "../features/AuthStore";
import ChatStore from "../features/ChatStore";
import UsersStore from "../features/UsersStore";
// import RegisterStore from "../features/RegisterStore";


const store = configureStore({
  reducer: {
    auth: AuthStore,
    // register: RegisterStore,
    users: UsersStore,
    chat: ChatStore,
  }
})

export default store