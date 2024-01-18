import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CedulaService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  saveCedula(nombre: string, numeroCedula: string): Observable<any> {
    const body = { nombre, numeroCedula };
    return this.http.post(`${this.apiUrl}/guardar`, body);
  }

  getProvincia(numeroCedula: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/provincia/${numeroCedula}`);
  }

  getAllCedulas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cedulas`);
  }
}
