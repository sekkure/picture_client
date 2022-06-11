import React, { FormEvent, useEffect, useState } from 'react'
import Input from '../../components/Input'

import { useDispatch } from 'react-redux'
import {
  selectCurrentUser,
  setCredentials,
} from '../../features/auth/authSlice'
import {
  useLoginMutation,
  useRegisterMutation,
} from '../../features/auth/authApiSlice'
import { Navigate } from 'react-router-dom'
import Button from '../../components/Button'
import classNames from 'classnames'
import styles from './index.module.css'
import { useSelector } from 'react-redux'
import Loading from '../../features/Loading'
import WrappedContent from '../../components/WrappedContent'
import Text from '../../components/Text'

const LoginPage = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector(selectCurrentUser)

  const [login, { isLoading: loginLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  const onLoginInput = (event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }

  const onPasswordInput = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const handleSubmit = async () => {
    try {
      const userData = await login({ name, password }).unwrap()

      setName('')
      setPassword('')

      dispatch(setCredentials(userData))

      localStorage.setItem('userId', userData.user.userID)
    } catch (err: any) {}
  }

  return (
    <WrappedContent className={classNames(styles.mainContainer)}>
      {!user ? (
        loginLoading ? (
          <Loading />
        ) : (
          <div>
            <Text fontSize="64px" className={styles.whiteText}>
              Log In
            </Text>
            <Text fontSize="26px" className={styles.whiteText}>
              To continue your's adventure
            </Text>
            <div className={styles.registerTextBox}>
              <Text fontSize="16px" className={styles.registerText}>
                Doesn't have account?
              </Text>
              <a className={styles.registerText} href="/register">
                Sign in
              </a>
            </div>
            <form className={styles.loginForm}>
              <div>
                <Text
                  fontSize="16px"
                  className={classNames(styles.whiteText, styles.text)}
                  customPaddingMargin
                >
                  Login
                </Text>
                <Input
                  className={classNames(styles.input)}
                  placeholder=""
                  text=""
                  onChange={onLoginInput}
                />
              </div>
              <div>
                <Text
                  fontSize="16px"
                  className={classNames(styles.whiteText, styles.text)}
                  customPaddingMargin
                >
                  Password
                </Text>
                <Input
                  onChange={onPasswordInput}
                  className={classNames(styles.input)}
                  placeholder=""
                  text=""
                  type="password"
                />
              </div>
            </form>
            <Button
              className={classNames(styles.loginButton)}
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </div>
        )
      ) : (
        <Navigate to={'/'} replace={true} />
      )}
    </WrappedContent>
  )
}

export default LoginPage
