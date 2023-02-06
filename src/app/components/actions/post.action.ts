import { createAction, props } from '@ngrx/store';

import { IPost } from 'src/app/interface/post';

export const getPostList = createAction(
  '[Post List] Retrieved Post List'
);

export const postList = createAction(
  '[Post List] Retrieved Post List Success',
  props<{ posts: Array<IPost> }>()
);

export const createPost = createAction(
  '[Create Post] Create A Post',
  props<IPost>()
);

export const savePost = createAction(
  '[Save Post] Save Post in AppState',
  props<IPost>()
);