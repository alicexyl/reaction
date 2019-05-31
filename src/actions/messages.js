import uuid from 'uuid/v4';

import { NEW_MESSAGE } from './types';

export const newMessage = (text, username) => ({
    type: NEW_MESSAGE,
    item: { text, username, timestamp: Date.now(), id: uuid() }
});
