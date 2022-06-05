import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
} from 'react'

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text: string
  placeholder: string
  type?: HTMLInputTypeAttribute
}
