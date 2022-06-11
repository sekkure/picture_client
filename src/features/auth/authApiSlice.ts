import { apiSlice } from '../../app/api/apiSlice'
import { APIEndpoints } from '../../shared/enums'
import {
  RefreshTokenData,
  UserLoginData,
  UserRegistrationData,
} from '../../shared/user'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<UserLoginData, any>({
      query: credentials => ({
        url: APIEndpoints.AUTH_LOGIN,
        method: 'POST',
        body: {
          ...credentials,
        },
      }),
    }),
    register: builder.mutation<UserRegistrationData, any>({
      query: registerData => ({
        url: APIEndpoints.AUTH_REGISTER,
        method: 'POST',
        body: {
          ...registerData,
        },
      }),
    }),
    refreshToken: builder.mutation<RefreshTokenData, any>({
      query: () => ({
        url: APIEndpoints.TOKEN_REFRESH,
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
