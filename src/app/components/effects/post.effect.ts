import { Injectable } from '@angular/core';

import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { PostService } from '../../service/post.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createPost, getPostList, postList, savePost } from '../actions/post.action';
import { IPost } from 'src/app/interface/post';
import { Router } from '@angular/router';

@Injectable()
export class PostEffects {

    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(getPostList),
        switchMap(() => this.postService.getPosts()
            .pipe(
                map(posts => (postList({ posts: [...posts] }))),
                catchError(() => EMPTY)
            ))
    )
    );

    createPost$ = createEffect(() => this.actions$.pipe(
        ofType(createPost),
        switchMap((post: IPost) => this.postService.createPost({
            title: post.title,
            body: post.body
        })
            .pipe(
                map((post) => {
                    this.router.navigate(['/list']);
                    return savePost(post);
                }),
                catchError(() => EMPTY)
            ))
    )
    );


    constructor(
        private actions$: Actions,
        private postService: PostService,
        private router: Router
    ) { }
}