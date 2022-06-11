import classNames from 'classnames'
import { PostProps } from './index.props'
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { APIEndpoints, BASE_API_URL } from '../../shared/enums'

const Post = ({ post, isPreview, className, ...props }: PostProps) => {
  const title = post.title
  const description = post.description
  const tags = post.tags
  const pictures = post.pictures
    ? isPreview
      ? post.pictures
      : post.pictures.slice(0, 1)
    : null
  const navigate = useNavigate()

  const onPostPreview = (postId: string) => {
    navigate(`/post/${postId}`)
  }

  const onImageClick = (url: string) => {
    window.open(url)
  }

  const mappedPictures =
    pictures && pictures.length ? (
      pictures.map(({ pictureId }, idx) => {
        const link =
          BASE_API_URL + APIEndpoints.PICTURE_GET_SINGLE + '/' + pictureId

        return (
          <img
            alt={pictureId}
            src={link}
            className={classNames(styles.picture)}
            onClick={() => onImageClick(link)}
            key={idx}
          />
        )
      })
    ) : (
      <img
        alt="Not found"
        src="https://bitsofco.de/content/images/2018/12/broken-1.png"
        className={classNames(styles.picture)}
      />
    )

  return isPreview ? (
    <div className={classNames(styles.container)}>
      <div>
        <h1 className={classNames(styles.title)}>Title: {title}</h1>
        <h2 className={classNames(styles.title)}>Description: {description}</h2>
        <h2 className={classNames(styles.title)}>Tags: {tags}</h2>
      </div>

      <div className={classNames(styles.hPictures)}>{mappedPictures}</div>
    </div>
  ) : (
    <div className={classNames(className)}>{title}</div>
  )
}

export default Post
