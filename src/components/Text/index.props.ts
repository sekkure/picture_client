import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  fontSize: string
  children: ReactNode
  customPaddingMargin?: boolean
}
