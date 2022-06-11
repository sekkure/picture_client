import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Post } from '../../shared/post'

export interface PostsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  posts: Post[]
}
