import { Post } from './post'

export interface User {
  userID: number
  guid: string
  name: string
  avatar: string
  about: string
  registred_at: number
  password: string
  passwordSalt: string
  posts: Post[]
}

export interface UserRegistrationData {
  access_token: string
  expires_in: number
  user: User
}

export interface UserLoginData {
  access_token: string
  expires_in: number
  user: User
}

export interface RefreshTokenData {
  access_token: string
  expires_in: number
  userId: string
}

export interface UserCredentials {
  name: string
  password: string
}
