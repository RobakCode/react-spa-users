import { SET_POSTS, DELETE_POST, ADD_POST } from '../actionTypes';

const initialState = {
  posts: []
}

function posts (state = initialState, action: any) {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload
      };
    }
    case DELETE_POST: {
      const newPosts = state.posts.filter( (post: any) => post.id !== parseInt(action.payload) );
      return {
        ...state,
        posts: newPosts
      };
    }
    case ADD_POST: {
      const post = {
        id: state.posts.length + 1,
        ...action.payload
      }
      const newPosts = [ ...state.posts, post];
      return {
        ...state,
        posts: newPosts
      };
    }
    default:
      return state;
  }
}

export default posts;