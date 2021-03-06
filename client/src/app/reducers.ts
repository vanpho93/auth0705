import { User, Story, People } from './types';

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
    if (action.type === 'UPDATE_LIKES_STATE') return state.map(story => {
        if (story._id !== action._id) return story;
        return { ...story, fans: action.fans };
    });
    if (action.type === 'ADD_COMMENT') return state.map(story => {
        if (story._id !== action._id) return story;
        return { ...story, comments: [...story.comments, action.comment] };
    });
    if (action.type === 'REMOVE_STORY') {
        return state.filter(story => story._id !== action._id);
    }
    return state;
}

const defaultPeople: People = {
    friends: [],
    others: [],
    incommingRequests: [],
    sentRequests: []
};

export function peopleReducer(state = defaultPeople, action) {
    if (action.type === 'SET_PEOPLE') return action.people;
    if (action.type === 'ADD_FRIEND') {
        const others = state.others.filter(u => u._id !== action.user._id);
        const sentRequests = [action.user, ...state.sentRequests];
        return { ...state, others, sentRequests };
    }
    return state;
}
