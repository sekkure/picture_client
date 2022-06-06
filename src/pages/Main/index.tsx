import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Posts from '../../components/Posts'
import {
  selectCurrentUser,
  selectCurrentToken,
  logOut,
} from '../../features/auth/authSlice'
import { useCreatePostMutation } from '../../features/posts/postsApiSlice'
const MainPage = () => {
  const formData = new FormData()
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const dispatch = useDispatch()

  const welcome = user ? `Welcome ${user.name}` : 'Welcome!'
  const tokenAbbr = `${token?.slice(0, 9)}...`

  const [createPost] = useCreatePostMutation()

  const onFileLoad = (e: any) => {
    for (const file of e.target.files) {
      formData.append('pictures', file)
    }
  }

  const textStyle = {
    color: 'white',
  }

  const postCreate = async () => {
    try {
      await createPost({
        description: 'test',
        title: '2 pictures test',
        tags: '2 pictures test',
        pictures: formData,
      }).unwrap()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <h1 style={textStyle}>{welcome}</h1>
      <p style={textStyle}>Token: {tokenAbbr}</p>
      <Posts posts={user!.posts} />
      <Button onClick={postCreate}>Create post</Button>
      <Button onClick={() => dispatch(logOut())}>Log out</Button>
      <Input
        type="file"
        text="blabla"
        placeholder="picture"
        onChange={onFileLoad}
      />
    </div>
  )
}

export default MainPage
