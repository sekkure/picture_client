import { apiSlice } from '../../app/api/apiSlice'
import { User } from '../../types/user'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserById: builder.mutation<User, string>({
      query: userId => ({
        url: `/api/user/${userId}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetUserByIdMutation } = usersApiSlice
