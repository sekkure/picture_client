import React from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import { InputProps } from './index.props'

const Input = ({
  text,
  placeholder,
  type,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={cn(styles.container)}>
      <input
        {...props}
        type={type || 'text'}
        placeholder={placeholder}
        className={cn(styles.input, className)}
      />
    </div>
  )
}

export default Input
