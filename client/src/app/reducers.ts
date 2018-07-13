export function loadedReducer(state = false, action) {
    if (action.type === 'LOADED') return true;
    return state;
}

export function userReducer(state = null, action) {
    if (action.type === 'SET_USER') return action.user;
    if (action.type === 'LOG_OUT') return null;
    return state;
}
