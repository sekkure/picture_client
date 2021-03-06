import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'
import { RefreshTokenData } from '../../types/user'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://a5b0-5-18-234-138.ngrok.io',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState
    const token = state.auth.accessToken

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

const baseQuertWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.status === 401) {
    const state = api.getState() as RootState
    const refreshResult = await baseQuery(
      {
        url: '/api/token/refresh',
        method: 'POST',
      },
      api,
      extraOptions
    )

    if (refreshResult?.data) {
      const user = state.auth.user!
      const { access_token, expires_in } =
        refreshResult.data as RefreshTokenData

      api.dispatch(
        setCredentials({
          user,
          access_token,
          expires_in,
        })
      )

      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQuertWithReauth,
  endpoints: build => ({}),
})
