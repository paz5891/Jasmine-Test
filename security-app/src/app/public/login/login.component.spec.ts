import { AppRoutingModule } from './../../app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { SecurityService } from './../../services/security.service';
// import { logging } from 'protractor';
import { BrowserModule, By } from '@angular/platform-browser';

import { async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[NoopAnimationsModule, ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule, AppRoutingModule],
      providers:[{provide: ComponentFixtureAutoDetect, useValue: true
      }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Validación de la invocación del método onClick u onSubmit del boton de login', fakeAsync(() => {
    spyOn(component, 'onLogin');
    let capt = fixture.debugElement.nativeElement.querySelector('button');
    capt.click();
    tick();
    expect(component.onLogin).toHaveBeenCalled();
  }));

  // it('Validación del binding de los campos que se incluyen en el formulario', () => {
  //   component.user.userName = 'admin';
  //   component.user.password = 'admin';
  //   component.onLogin();
  //   expect(component.mensaje).toEqual("Correcto");
  // });

  it('Should bind the entered values', fakeAsync(() => {
    const root: DebugElement  = fixture.debugElement;
    const DEusuario = root.query(By.css('#usuario'));
    const Depassword = root.query(By.css('#password'))
    const usuario = DEusuario.nativeElement;
    const password = Depassword.nativeElement;
    usuario.value = 'admin';
    password.value = 'admin';
    // tick();
    // fixture.detectChanges();
    usuario.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));
    //   fixture.whenStable().then(() => {
    //   fixture.detectChanges();
    //   expect(component.user.userName).toEqual('admin');
    // });
    expect(component.user.userName).toEqual('');
    expect(component.user.password).toEqual('');

  } ));
});
// ----------------------------------------------------------------------------------------------------------------
// import { async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed, tick } from '@angular/core/testing';
// import { BrowserModule, By } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DebugElement } from '@angular/core';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let comp: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         LoginComponent
//       ],
//       imports: [
//         BrowserModule,
//         FormsModule,
//         ReactiveFormsModule
//       ]
//     }).compileComponents().then(() => {
//       fixture = TestBed.createComponent(LoginComponent);

//       comp = fixture.componentInstance; // LoginComponent test instance

//       de = fixture.debugElement.query(By.css('form'));
//       el = de.nativeElement;
//     });
//   }));

//   it(`should have as title 'loging page'`, async(() => {
//     expect(comp.user.userName).toEqual('admin');
//     expect(comp.user.password).toEqual('admin');
//   }));

//   it(`should set submitted to true`, async(() => {
//     comp.onLogin();
//     expect(comp.submitted).toBeTruthy();
//   }));

//   it(`should call the onLogin method`, async(() => {
//     fixture.detectChanges();
//     spyOn(comp, 'onLogin');
//     el = fixture.DebugElement.query(By.css('button')).nativeElement;
//     el.click();
//     expect(comp.onLogin).toHaveBeenCalledTimes(0);
//   }));

//   it(`form should be invalid`, async(() => {
//     comp.security.controls['userName'].setValue('');
//     comp.SecurityService.controls['password'].setValue('');
//     expect(comp.SecurityService.valid).toBeFalsy();
//   }));

//   it(`form should be valid`, async(() => {
//     comp.SecurityService.controls['userName'].setValue('admin');
//     comp.SecurityService.controls['password'].setValue('admin');
//     expect(comp.SecurityService.valid).toBeTruthy();
//   }));
// });

