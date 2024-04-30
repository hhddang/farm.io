import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/authSlice";
import petReducer from "../redux/features/petSlice";

export const store = configureStore({
  reducer: {
    authUser: authReducer,
    pet: petReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
