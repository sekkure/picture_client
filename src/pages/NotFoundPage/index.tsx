import WrappedContent from '../../components/WrappedContent'
import styles from './index.module.css'

const NotFound = () => {
  return (
    <WrappedContent className={styles.mainWindow}>
      <img
        src="https://free-png.ru/wp-content/uploads/2021/07/free-png.ru-61-700x700.png"
        height={84}
        width={84}
        className={styles.amogus}
      />
      <h1
        style={{
          color: 'white',
        }}
      >
        Oopsie... We don't have that route
      </h1>
    </WrappedContent>
  )
}

export default NotFound
