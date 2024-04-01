import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecuperarService {

  constructor(private http: HttpClient) { }
  enviarCorreoRecuperarContrasenya(body: any) {
    return this.http.post(`${environment.API_URL_CORREOS}/enviarCorreoRecuperarContrasenya/`, body);
  }
  decodificarMail(token: any) {
    let dato = { "token": token };
    return this.http.post(`${environment.API_URL_CORREOS}/decodificarMail`, dato);
  }
}
