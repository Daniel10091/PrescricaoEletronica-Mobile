import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalDocumentsTemplatesPage } from './medical-documents-templates.page';

describe('MedicalDocumentsTemplatesPage', () => {
  let component: MedicalDocumentsTemplatesPage;
  let fixture: ComponentFixture<MedicalDocumentsTemplatesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalDocumentsTemplatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalDocumentsTemplatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
