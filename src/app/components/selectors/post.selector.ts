import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers/post.reducer';

export const selectPostFeature = createFeatureSelector<AppState>('posts');

export const selectPosts = createSelector(
    selectPostFeature,
    (state) => {
        return state.posts
    }
)

