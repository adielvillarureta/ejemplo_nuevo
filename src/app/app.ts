import { Component } from '@angular/core';
import { Perfil } from './componentes/componentes/perfil/perfil';
import { Experiencia } from './componentes/componentes/experiencia/experiencia';
import { Habilidades } from './componentes/componentes/habilidades/habilidades';
import { Contacto } from './componentes/componentes/contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [
    Perfil,
    Experiencia,
    Habilidades,
    Contacto
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'ejemplo_uno';
}