import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmailService } from 'src/app/serve';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  emailDestino: string = '';
  experienciaUsuario: string = '';

  constructor(private http: HttpClient, private Router:Router) {}

  enviarEmail() {
    const emailService = new EmailService(this.http);
    const destinatario = this.emailDestino;
    const assunto = 'Obrigado por comparilha sua Experiencia';
    const conteudo = `<p>${this.experienciaUsuario} </p>`;

    emailService.enviarEmail(destinatario, assunto, conteudo).subscribe(
      (resposta) => {
        console.log('E-mail enviado com sucesso', resposta);
        alert('Email enviado com Sucesso.!')
        setTimeout(() => {
        this.Router.navigate(['/']);

        }, 1000);
      },
      (erro) => {
        console.error('Erro ao enviar e-mail', erro);
        alert('Digite um email valido')
      }
    );
  }

}
