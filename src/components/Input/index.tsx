import React from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import { InputProps } from './index.props'

const Input = ({ text, placeholder, type, ...props }: InputProps) => {
  return (
    <div className={cn(styles.container)}>
      <input
        {...props}
        type={type || 'text'}
        placeholder={placeholder}
        className={cn(styles.input)}
      />
    </div>
  )
}

export default Input
