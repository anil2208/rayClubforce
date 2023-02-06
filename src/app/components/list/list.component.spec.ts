import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of, take } from 'rxjs';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [
        {
          provide: Store, useValue: {
            dispatch: () => { },
            select: () => {
              return of([{
                title: 'Cypress',
                body: `Write tests easily and quickly, and watch them execute in real time as you build your web application.`
              }])
            }
          }
        }
      ]
    }).overrideTemplate(ListComponent, ``)
      .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all courses', (done) => {
    component.posts$.pipe(take(1)).subscribe((res) => {
      expect(res.length).toBe(1);
      done();
    })
  });

});
