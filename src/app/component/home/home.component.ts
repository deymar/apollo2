import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';


import {Tabla} from './tabla_model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

    public dato: string;
    public titulo: string;
    public tabla: Tabla;


    constructor(public taskService: TaskService) {
      this.dato = 'Datos del centro';

  }

  ngOnInit()
  {
            this.getAllTasks();
  }
    getAllTasks() {
        this.taskService.getAllTasks()
            .subscribe(datos_importados => {
               this.tabla = datos_importados;
               //  console.log(datos_importados[0].userId);
                console.log(datos_importados);
            });
    }



}
