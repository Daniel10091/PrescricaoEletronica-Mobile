import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMedicalDocumentPage } from './new-medical-document.page';

describe('NewMedicalDocumentPage', () => {
  let component: NewMedicalDocumentPage;
  let fixture: ComponentFixture<NewMedicalDocumentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedicalDocumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMedicalDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
