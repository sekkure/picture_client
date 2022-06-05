import { PostProps } from './index.props'

const Post = ({ post, ...props }: PostProps) => {
  const title = post.title
  const description = post.description
  const tags = post.tags
  const pictures = post.pictures

  return (
    <div {...props}>
      <h1>{title}</h1>
      <h6>{tags}</h6>
      Описание: {description}
    </div>
  )
}

export default Post
