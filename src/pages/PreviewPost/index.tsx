import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import Post from '../../components/Post'

const PreviewPost = () => {
  const { id } = useParams()
  const post = useAppSelector(state =>
    state.auth.user?.posts.find(p => p.postId === id)
  )

  return post ? (
    <Post post={post} />
  ) : (
    <div>
      <h1>Poth with ID "{id}" not found!</h1>
    </div>
  )
}

export default PreviewPost
