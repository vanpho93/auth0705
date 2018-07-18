import { User, Story } from './types';

export function loadedReducer(state = false, action): boolean {
    if (action.type === 'LOADED') return true;
    return state;
}

export function userReducer(state = null, action): User {
    if (action.type === 'SET_USER') return action.user;
    if (action.type === 'LOG_OUT') return null;
    return state;
}

export function storiesReducer(state: Story[] = [], action): Story[] {
    if (action.type === 'SET_STORIES') return action.stories;
    if (action.type === 'ADD_STORY') return [action.story, ...state];
    return state;
}
