import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })


  // Utilizando API Brevo para que o e-mail seja enviado com sucesso.

export class EmailService {
  private apiKey = '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';
  private apiUrl = 'https://api.sendinblue.com/v3/smtp/email';

  // Criando o escopo e o envio do e-mail.
  constructor(private http: HttpClient) {}
  enviarEmail(destinatario: string, assunto: string, conteudo: string): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.apiKey,
    };
    const body = {
      sender: { name: 'Prevenção na Prática', email: 'praticaprevencao@gmail.com' },
      to: [{ email: destinatario }],
      subject: assunto,
      htmlContent: conteudo,
    };
    // Mandando a requisição POST para API do BREVO.
    return this.http.post(this.apiUrl, body, { headers });
  }
}
