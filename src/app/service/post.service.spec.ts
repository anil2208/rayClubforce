import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, take } from 'rxjs';
import { IPost } from '../interface/post';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: () => of([{
              title: 'Cypress',
              body: `Write tests easily and quickly, and watch them execute in real time as you build your web application.`
            }]),
            post: () => of({
              title: 'Cypress',
              body: `Write tests easily and quickly, and watch them execute in real time as you build your web application.`
            })
          }
        }
      ]
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all Posts', (done) => {
    service.getPosts().pipe(take(1)).subscribe((res: Array<IPost>) => {
      expect(res.length).toBe(1)
      done()
    });
  });


  it('should create a new post', (done) => {
    service.createPost({
      title: 'Cypress',
      body: `Write tests easily and quickly, and watch them execute in real time as you build your web application.`
    }).pipe(take(1)).subscribe(() => {
      service.getPosts().pipe(take(1)).subscribe((res: Array<IPost>) => {
        expect(res.length).toBe(1)
        expect(res[0]).toEqual({
          title: 'Cypress',
          body: `Write tests easily and quickly, and watch them execute in real time as you build your web application.`
        })
        done()
      });
    });
  });

});
