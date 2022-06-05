import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Post } from '../../types/post'

export interface PostProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  post: Post
}
