import React from 'react'
import { ButtonProps } from './index.props'
import styles from './index.module.css'
import cn from 'classnames'

const Button = ({
  onClick,
  className,
  children,
  color,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(styles.button, className, {
        [styles.buttonDefault]: !color,
        [styles.buttonBlue]: color === 'blue',
      })}
    >
      {children}
    </button>
  )
}

export default Button
