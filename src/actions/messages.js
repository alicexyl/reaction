import uuid from 'uuid/v4';

import { NEW_MESSAGE } from './types';

export const newMessage = text => ({
    type: NEW_MESSAGE,
    item: { text, timestamp: Date.now(), id: uuid() }
});
