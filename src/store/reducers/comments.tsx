import { SET_COMMENTS, ADD_COMMENT } from '../actionTypes';

const initialState = {
  comments: []
}

export default function(state = initialState, action: any) {
  switch (action.type) {
    case SET_COMMENTS: {
      return {
        ...state,
        comments: action.payload
      };
    }
    case ADD_COMMENT: {
      const comment = {
        id: state.comments.length + 1,
        ...action.payload
      }
      const newComments = [ ...state.comments, comment];
      return {
        ...state,
        comments: newComments
      };
    }
    default:
      return state;
  }
}