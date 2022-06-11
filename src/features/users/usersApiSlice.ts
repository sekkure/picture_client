import { apiSlice } from '../../app/api/apiSlice'
import { APIEndpoints } from '../../shared/enums'
import { User } from '../../shared/user'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserById: builder.mutation<User, string>({
      query: userId => ({
        url: `${APIEndpoints.USER_GET_SINGLE}/${userId}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetUserByIdMutation } = usersApiSlice
