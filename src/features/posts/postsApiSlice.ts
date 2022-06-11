import { apiSlice } from '../../app/api/apiSlice'
import { APIEndpoints } from '../../types/enums'
import { Post, CreatePostData } from '../../types/post'

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<Post, CreatePostData>({
      query: data => ({
        url: APIEndpoints.POST_CREATE,
        method: 'POST',
        body: data.pictures,
        params: {
          title: data.title,
          tags: data.tags,
          description: data.description,
        },
      }),
    }),
    getAllPosts: builder.mutation<Post[], any>({
      query: () => ({
        url: APIEndpoints.POST_GET_ALL,
        method: 'GET',
      }),
    }),
  }),
})

export const { useCreatePostMutation, useGetAllPostsMutation } = postsApiSlice
