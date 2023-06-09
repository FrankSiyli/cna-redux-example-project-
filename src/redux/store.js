import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/Posts/postsSlice";
import usersReducer from "../components/Users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
