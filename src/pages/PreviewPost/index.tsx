import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import Post from '../../components/Post'
import WrappedContent from '../../components/WrappedContent'

const PreviewPost = () => {
  const { id } = useParams()
  const post = useAppSelector(state =>
    state.auth.user?.posts.find(p => p.postId === id)
  )

  return (
    <WrappedContent>
      {post ? (
        <Post post={post} isPreview />
      ) : (
        <div>
          <h1>Poth with ID "{id}" not found!</h1>
        </div>
      )}
    </WrappedContent>
  )
}

export default PreviewPost
