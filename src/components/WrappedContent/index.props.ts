import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface WrappedContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}
