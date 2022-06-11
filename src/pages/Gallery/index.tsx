import { useEffect, useState } from 'react'
import Posts from '../../components/Posts'
import Loading from '../../features/Loading'
import { useGetAllPostsMutation } from '../../features/posts/postsApiSlice'
import WrappedContent from '../../components/WrappedContent'
import { Post } from '../../shared/post'

const Gallery = () => {
  const [getAllPosts, { isLoading }] = useGetAllPostsMutation()
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    if (isLoading) return

    getAllPosts({})
      .unwrap()
      .then(res => setPosts(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <WrappedContent
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {isLoading ? <Loading /> : <Posts posts={posts} />}
    </WrappedContent>
  )
}

export default Gallery
