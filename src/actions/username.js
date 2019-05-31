import { SET_USERNAME } from './types';

export const setUsername = text => ({
    type: SET_USERNAME,
    username: text
});
