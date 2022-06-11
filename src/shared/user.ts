import { Post } from './post'

export interface User {
  userID: string
  name: string
  avatar: string
  about: string
  registredAt: number
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
