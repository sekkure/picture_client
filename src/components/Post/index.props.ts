import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Post } from '../../shared/post'

export interface PostProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  post: Post
  isPreview?: boolean
}
