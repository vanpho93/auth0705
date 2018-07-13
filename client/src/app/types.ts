export interface User {
    _id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface AppState {
    loaded: boolean;
    user: User;
}
