import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService : LoginService, private router : Router){}
  // criando variaveis
  mensagemok = "Deu certo!"
  mensagemERRO = ""

  userModel = new User()

  onSubmit(){
    // O subscribe é um operador do Observable.Ao usar ele, estamos falando que, assim que nossa requisição for realizada e nosso texto se transformar em JSON, seremos notificados, e além disso, receberemos as informações do usuários. Esse cara faz tudo de forma rápida e unidimencional. 
    this.loginService.login(this.userModel).subscribe((response) => {
      // Se ok:
      console.log(this.mensagemok)
      this.router.navigateByUrl("/")
    },(respErro) => {
      // Se erro:
      // console.log(respErro.error)
      this.mensagemERRO = respErro.error
  
    })
  }
}
