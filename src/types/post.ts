export interface Post {
  id: number
  ownerId: string
  postId: string
  title: string
  tags: string
  description: string
  pictures: Picture[]
}

export interface CreatePostData {
  title: string
  tags: string
  description: string
  pictures: FormData
}

interface Picture {
  addedAt: string
  pictureId: string
}
