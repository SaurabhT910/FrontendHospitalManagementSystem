import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatinetComponent } from './update-patinet.component';

describe('UpdatePatinetComponent', () => {
  let component: UpdatePatinetComponent;
  let fixture: ComponentFixture<UpdatePatinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePatinetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePatinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
