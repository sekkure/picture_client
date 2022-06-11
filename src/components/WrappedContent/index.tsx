import classNames from 'classnames'
import React from 'react'
import styles from './index.module.css'
import { WrappedContentProps } from './index.props'

const WrappedContent = ({
  children,
  className,
  ...props
}: WrappedContentProps) => {
  return (
    <div {...props} className={classNames(styles.wrappedContent, className)}>
      {children}
    </div>
  )
}

export default WrappedContent
