// import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './../../services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user = {
    userName: '',
    password: ''
  }
  // mensaje: string;

  constructor(
    private security: SecurityService,
    private router: Router

    ) { }

  ngOnInit(): void{
  }

  onLogin(): void {
    this.security.login(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['clientes']);
      }
    )
  }


  // onLogin(){
  //   if(this.user.userName === 'admin' && this.user.password === 'admin'){
  //   this.mensaje = 'Correcto';
  //   }
  //   else
  //   {
  //     this.mensaje = 'Incorrecto';
  //   }
  // }

}
