import { combineReducers } from 'redux';
import messageReducer from './messages';
import usernameReducer from './username';
import reactionsReducer from './reactions';

export default combineReducers({
    messages: messageReducer,
    username: usernameReducer,
    reactions: reactionsReducer
});
