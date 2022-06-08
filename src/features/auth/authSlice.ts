import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { Post } from '../../shared/post'
import {
  UserLoginData,
  UserRegistrationData,
  User,
  RefreshTokenData,
} from '../../shared/user'

interface AuthState {
  user: User | null
  accessToken: string | null
  expiresIn: number | null
}

const state: AuthState = {
  user: null,
  accessToken: null,
  expiresIn: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<
        UserLoginData | UserRegistrationData | RefreshTokenData
      >
    ) => {
      const { access_token, expires_in } = action.payload

      if ('user' in action.payload) {
        state.user = action.payload.user
      }
      state.accessToken = access_token
      state.expiresIn = expires_in
    },
    setPost: (state, action: PayloadAction<Post>) => {
      if (!state.user) return

      state.user.posts.push(action.payload)
    },
    logOut: state => {
      state.user = null
      state.accessToken = null
      state.expiresIn = null

      localStorage.removeItem('userId')
    },
  },
})

export const { setCredentials, setPost, logOut } = authSlice.actions
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.accessToken
export default authSlice.reducer
