import { apiSlice } from '../../app/api/apiSlice'
import { Post, CreatePostData } from '../../types/post'

export const postsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createPost: builder.mutation<Post, CreatePostData>({
      query: data => ({
        url: '/api/post/create',
        method: 'POST',
        body: data.pictures,
        params: {
          title: data.title,
          tags: data.tags,
          description: data.description,
        },
      }),
    }),
  }),
})

export const { useCreatePostMutation } = postsApiSlice
