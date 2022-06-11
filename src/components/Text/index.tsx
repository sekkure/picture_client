import classNames from 'classnames'
import { TextProps } from './index.props'
import styles from './index.module.css'

const Text = ({
  children,
  fontSize,
  className,
  customPaddingMargin,
  ...props
}: TextProps) => {
  return (
    <p
      {...props}
      style={{ fontSize }}
      className={classNames(
        {
          [styles.text]: !customPaddingMargin,
        },
        className
      )}
    >
      {children}
    </p>
  )
}

export default Text
