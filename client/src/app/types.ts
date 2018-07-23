export interface User {
    _id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface Comment {
    _id: string;
    content: string;
    author: User;
}

export interface Story {
    _id: string;
    content: string;
    fans: string[];
    author: User;
    comments: Comment[];
}

export interface AppState {
    loaded: boolean;
    user: User;
    stories: Story[];
    people: People;
}

export interface People {
    friends: User[];
    sentRequests: User[];
    incommingRequests: User[];
    others: User[];
}
