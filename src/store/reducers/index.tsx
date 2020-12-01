import { combineReducers } from "redux";
import posts from './post';
import users from './user';
import comments from './comments';

export default combineReducers({ posts, users, comments });
