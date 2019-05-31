import { NEW_MESSAGE, SET_USERNAME } from '../actions/types';
import { stat } from 'fs';

const DEFAULT_MESSAGES = { items: [], username: null };

const messagesReducer = (state = DEFAULT_MESSAGES, action) => {
    switch(action.type) {
        case NEW_MESSAGE:
        return { ...state, items: [...state.items, action.item ] };
        case SET_USERNAME:
        return { ...state, username: action.username };
        default: 
        return state;
    }
}

export default messagesReducer;
