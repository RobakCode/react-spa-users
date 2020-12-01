import {
  SET_POSTS,
  ADD_POST,
  DELETE_POST,
  SET_USERS,
  SET_ACTIVE_USER,
  SET_COMMENTS,
  ADD_COMMENT
} from './actionTypes';
import { NewPostType, NewCommentType } from '../types/types';

const setPosts = ( posts: any ) => ({
  type: SET_POSTS,
  payload: posts
});

const addPost = ( post: NewPostType ) => ({
  type: ADD_POST,
  payload: post
});

const deletePost = ( id: number ) => ({
  type: DELETE_POST,
  payload: id
});

const setUsers = ( users: any ) => ({
  type: SET_USERS,
  payload: users
});

const setActiveUser = ( id: number ) => ({
  type: SET_ACTIVE_USER,
  payload: id
});

const setComments = ( comments: any ) => ({
  type: SET_COMMENTS,
  payload: comments
});

const addComment = ( comment: NewCommentType ) => ({
  type: ADD_COMMENT,
  payload: comment
});

export {
  setPosts,
  addPost,
  deletePost,
  setUsers,
  setActiveUser,
  setComments,
  addComment
};
