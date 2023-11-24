import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class EmailService {
  private apiKey = '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'; // Substitua pela sua chave de API Sendinblue
  private apiUrl = 'https://api.sendinblue.com/v3/smtp/email';

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

    return this.http.post(this.apiUrl, body, { headers });
  }
}
