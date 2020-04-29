/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HerosectionComponent } from './herosection.component';

describe('HerosectionComponent', () => {
  let component: HerosectionComponent;
  let fixture: ComponentFixture<HerosectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
