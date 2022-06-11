import classNames from 'classnames'
import Post from '../Post'
import { PostsProps } from './index.props'
import styles from './index.module.css'

const Posts = ({ posts, className, ...props }: PostsProps) => {
  return (
    <div {...props} className={classNames(styles.container, className)}>
      {posts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  )
}

export default Posts
