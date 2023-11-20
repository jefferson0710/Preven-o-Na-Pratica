import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmailService } from 'src/app/serve';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  emailDestino: any; 
  experienciaUsuario: any; 


  enviarEmail() {
    const emailService = new EmailService();
    const destinatario = this.emailDestino;
    const assunto = 'Obrigado por comparilha sua Experiencia';
    const conteudo = `<p>${this.experienciaUsuario} </p>`;
    

    emailService.enviarEmail(destinatario, assunto, conteudo).subscribe(
      (resposta) => {
        console.log('E-mail enviado com sucesso', resposta);
      },
      (erro) => {
        console.error('Erro ao enviar e-mail', erro);
      }
    );
  }
  
}

