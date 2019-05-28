import { combineReducers } from 'redux';
import messageReducer from './messages';

export default combineReducers({
    messages: messageReducer
});
