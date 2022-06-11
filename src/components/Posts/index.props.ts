import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Post } from '../../types/post'

export interface PostsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  posts: Post[]
}
