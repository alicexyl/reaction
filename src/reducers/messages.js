import { NEW_MESSAGE } from '../actions/types';
import { stat } from 'fs';

const DEFAULT_MESSAG3ES = { items: [] };

const messagesReducer = (state = DEFAULT_MESSAG3ES, action) => {
    switch(action.type) {
        case NEW_MESSAGE:
        return { ...state, items: [...state.items, action.item ] };
        default: 
        return state;
    }
}

export default messagesReducer;
