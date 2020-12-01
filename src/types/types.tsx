export interface UserType {
  id: number,
  name: string,
  street: string,
  city: string,
  email: string,
  phone: string,
  website: string,
  companyName: string
}

export interface UserListType {
  users: UserType[]
}

export interface PostType {
  id: number,
  userId: number,
  title: string,
  body: string
}

export interface NewPostType {
  userId: number,
  title: string,
  body: string
}

export interface CommentType {
  id: number,
  postId: number,
  name: string,
  email: string
  body: string
}

export interface NewCommentType {
  postId: number,
  name: string,
  email: string
  body: string
}
