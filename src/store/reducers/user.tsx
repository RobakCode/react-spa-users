import { SET_USERS, SET_ACTIVE_USER } from '../actionTypes';
import { UserType } from '../../types';

const initialState = {
  users: [],
  activeUser: {}
}

export default function(state = initialState, action: any) {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.payload
      };
    }
    case SET_ACTIVE_USER: {
      const activeUser = state.users.filter( (user: UserType) => user.id === parseInt(action.payload) );
      return {
        ...state,
        activeUser: activeUser[0]
      };
    }
    default:
      return state;
  }
}