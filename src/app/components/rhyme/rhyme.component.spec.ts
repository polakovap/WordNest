import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhymeComponent } from './rhyme.component';

describe('RhymeComponent', () => {
  let component: RhymeComponent;
  let fixture: ComponentFixture<RhymeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhymeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RhymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
