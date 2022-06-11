import classNames from 'classnames'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut, selectCurrentUser } from '../../features/auth/authSlice'
import styles from './index.module.css'

const Header = () => {
  const user = useSelector(selectCurrentUser)
  const welcome = user?.name ? `Welcome ${user.name}` : ''
  const userAvatar = user?.avatar
    ? user?.avatar
    : 'https://static.wixstatic.com/media/c2c387_cbd30a756b994aada2e0b3579aab6aba~mv2.png/v1/crop/x_0,y_65,w_500,h_369/fill/w_476,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/no-avatar.png'
  const [isMenuEnabled, setIsMenuEnabled] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onImageClick = () => setIsMenuEnabled(!isMenuEnabled)

  const onLogout = () => {
    dispatch(logOut())

    navigate('/login', {
      replace: true,
    })

    setIsMenuEnabled(!isMenuEnabled)
  }

  const onGallery = () => {
    navigate('/gallery', {
      replace: true,
    })

    setIsMenuEnabled(!isMenuEnabled)
  }

  const onProfile = () => {
    navigate('/', {
      replace: true,
    })

    setIsMenuEnabled(!isMenuEnabled)
  }

  return (
    <div className={classNames(styles.header)}>
      <h1>{welcome}</h1>
      {user ? (
        <div className={classNames(styles.userBlock)}>
          <img
            title={user?.name ? user.name : ''}
            className={classNames(styles.userImage)}
            src={userAvatar}
            onClick={onImageClick}
          />
          <div
            className={classNames({
              [styles.userMenuVisible]: isMenuEnabled,
              [styles.userMenuUnvisible]: !isMenuEnabled,
            })}
          >
            <div className={classNames(styles.userMenuList)}>
              <h4
                className={classNames(styles.userMenuItem)}
                onClick={onProfile}
              >
                Profile
              </h4>
              <h4
                className={classNames(styles.userMenuItem)}
                onClick={onGallery}
              >
                Gallery
              </h4>
              <h4
                className={classNames(styles.userMenuItem)}
                onClick={onLogout}
              >
                Log out
              </h4>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Header
