import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createPost } from '../actions/post.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
  postForm: FormGroup = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    }
  );
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void { }

  save() {
    this.store.dispatch(createPost(this.postForm.value));
  }

  ngOnDestroy(): void { }

}
