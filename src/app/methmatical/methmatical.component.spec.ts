import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethmaticalComponent } from './methmatical.component';

describe('MethmaticalComponent', () => {
  let component: MethmaticalComponent;
  let fixture: ComponentFixture<MethmaticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MethmaticalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MethmaticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check add', () => {
    expect(component.add(2, 3)).toBe(5)
  })

  it('should check sub', () => {
    expect(component.sub(2, 3)).toBe(-1)
  })

  it('should check mul', () => {
    expect(component.mul(2, 3)).toBe(6)
  })

  it('should check div', () => {
    expect(component.div(2, 1)).toBe(2)
  })

  it('should check mod',()=>{
    expect(component.mod(2,5)).toBe(2)
  })
});
