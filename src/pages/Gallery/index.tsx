import { useEffect, useState } from 'react'
import Posts from '../../components/Posts'
import Loading from '../../features/Loading'
import { useGetAllPostsMutation } from '../../features/posts/postsApiSlice'
import { Post } from '../../types/post'

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

  return isLoading ? (
    <Loading />
  ) : (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {<Posts posts={posts} />}
    </div>
  )
}

export default Gallery
