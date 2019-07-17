import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuComponent } from '../menu/menu.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  /**
   * Rendered represent the native element at the root of the component.
   */
  let rendered: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    rendered = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Testing with Angular'`, () => {
    expect(component.title).toEqual('Testing with Angular');
  });

  it('should render title in a h1 tag', () => {
    expect(rendered.querySelector('h1').textContent).toContain('Welcome to Testing with Angular!');
  });
});
