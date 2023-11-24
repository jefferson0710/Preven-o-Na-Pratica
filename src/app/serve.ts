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
