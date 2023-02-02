import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModules } from './common/common.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModules],
      declarations: [AppComponent],
      providers: [
        {
          provide: Router,
          useValue: { navigateByUrl: jasmine.createSpy('navigateByUrl') }
        }
      ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it('should navigate to "/mathmatical"', () => {
    component.mathmatical();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/mathmatical');
  });
});
