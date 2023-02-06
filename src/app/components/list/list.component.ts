import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectPosts } from '../selectors/post.selector';
import { getPostList, postList } from '../actions/post.action';

import { IPost } from '../../interface/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts$: Observable<ReadonlyArray<IPost>> = this.store.select(selectPosts);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getPostList());
  }

}
