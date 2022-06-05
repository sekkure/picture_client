import React, { FormEvent, useEffect, useState } from 'react'
import Input from '../../components/Input'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import {
  useLoginMutation,
  useRegisterMutation,
} from '../../features/auth/authApiSlice'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import classNames from 'classnames'
import styles from './index.module.css'
import { UserLoginData, UserRegistrationData } from '../../types/user'

const LoginPage = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [type, setType] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading: loginLoading }] = useLoginMutation()
  const [register, { isLoading: registerLoading }] = useRegisterMutation()
  const dispatch = useDispatch()

  const onLoginInput = (event: FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }

  const onPasswordInput = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  useEffect(() => {
    setError('')
  }, [name, password])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      let userData: UserLoginData | UserRegistrationData | undefined

      switch (type) {
        case 'login':
          userData = await login({ name, password }).unwrap()
          break
        case 'register':
          userData = await register({ name, password }).unwrap()
          break
      }

      setName('')
      setPassword('')
      setType('')

      if (userData) {
        dispatch(setCredentials(userData))

        localStorage.setItem('userId', `${userData.user.userID}`)

        navigate('/')
      } else {
        setError('Oopsie... Error')
      }
    } catch (err: any) {
      setError(
        `CODE: ${err.status} | ERR: ${
          err?.data?.message ?? 'No server response'
        }`
      )
    }
  }

  return (
    <div className={classNames(styles.mainContainer)}>
      {loginLoading || registerLoading ? (
        <h1>Wait please a little bit . . .</h1>
      ) : (
        <div className={classNames(styles.modalWindow)}>
          <p style={{ color: 'white' }}>{error}</p>
          <h1 className={classNames(styles.text)}>Login</h1>
          <form onSubmit={handleSubmit} className={classNames(styles.authInfo)}>
            <Input text="Логин" placeholder="Login" onInput={onLoginInput} />
            <Input
              text="Пароль"
              placeholder="Password"
              onInput={onPasswordInput}
              type="password"
            />
            <div className={classNames(styles.buttons)}>
              <Button onClick={() => setType('login')} color="blue">
                Sign in
              </Button>
              <Button onClick={() => setType('register')} color="blue">
                Register
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginPage
