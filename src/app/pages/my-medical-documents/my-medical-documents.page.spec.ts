import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyMedicalDocumentsPage } from './my-medical-documents.page';

describe('MyMedicalDocumentsPage', () => {
  let component: MyMedicalDocumentsPage;
  let fixture: ComponentFixture<MyMedicalDocumentsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMedicalDocumentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyMedicalDocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
