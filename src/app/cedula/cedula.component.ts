import { Component, OnInit } from '@angular/core';
import { CedulaService } from './cedula.service';


@Component({
    selector: 'app-cedula',
    templateUrl: './cedula.component.html',
    styleUrls: ['./cedula.component.css']
})
export class CedulaComponent implements OnInit  {
    nombre: string = '';
    numeroCedula: string = '';
    provincia: string = '';
    cedulas: any[] = [];

    constructor(private cedulaService: CedulaService) {}
    
    ngOnInit() {
        this.cargarCedulas();
      }

    guardar() {
        this.cedulaService.saveCedula(this.nombre, this.numeroCedula).subscribe(response => {
            console.log('Datos guardados', response);
            // Additional logic after saving, if needed
        }, error => {
            console.error('Error al guardar datos', error);
        });
    }

    mostrarProvincia() {
        this.cedulaService.getProvincia(this.numeroCedula).subscribe(response => {
            this.provincia = response.provincia; // Ajusta según el formato de la respuesta
        }, error => {
            console.error('Error al obtener la provincia', error);
        });
    }

    cargarCedulas() {
        this.cedulaService.getAllCedulas().subscribe(data => {
          this.cedulas = data;
        }, error => {
          console.error('Error al obtener cedulas', error);
        });
      }
    
    
}
