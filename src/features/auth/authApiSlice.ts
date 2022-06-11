import { apiSlice } from '../../app/api/apiSlice'
import {
  RefreshTokenData,
  UserLoginData,
  UserRegistrationData,
} from '../../types/user'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<UserLoginData, any>({
      query: credentials => ({
        url: '/api/authentication/login',
        method: 'POST',
        body: {
          ...credentials,
        },
      }),
    }),
    register: builder.mutation<UserRegistrationData, any>({
      query: registerData => ({
        url: '/api/authentication/register',
        method: 'POST',
        body: {
          ...registerData,
        },
      }),
    }),
    refreshToken: builder.mutation<RefreshTokenData, any>({
      query: () => ({
        url: '/api/token/refresh',
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshTokenMutation,
} = authApiSlice
