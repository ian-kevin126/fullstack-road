import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user.slice';
import tagsViewReducer from './tags-view.slice';

const rootReducer = combineReducers({
  user: userReducer,
  tagsView: tagsViewReducer,
});

export default rootReducer;
