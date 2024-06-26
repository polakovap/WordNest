import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymComponent } from './synonym.component';

describe('SynonymComponent', () => {
  let component: SynonymComponent;
  let fixture: ComponentFixture<SynonymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynonymComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SynonymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
