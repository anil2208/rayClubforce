import { createReducer, on } from '@ngrx/store';

import * as PostActions from '../actions/post.action';


import { IPost } from 'src/app/interface/post';

export interface AppState {
    posts: Array<IPost>
}


export const state: AppState = {
    posts: [
        {
            title: 'Angular',
            body: `Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.`
        },
        {
            title: 'React',
            body: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.`
        }
    ]
};
export const postReducer = createReducer(
    state,
    on(PostActions.getPostList, (state) => ({...state})),
    on(PostActions.postList, (state, { posts }) => ({ posts: [...posts] })),
    on(PostActions.savePost, (state, post) => ({ posts: [post, ...state.posts] })),
);