import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFileComponent } from './resume-file.component';

describe('ResumeFileComponent', () => {
  let component: ResumeFileComponent;
  let fixture: ComponentFixture<ResumeFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
