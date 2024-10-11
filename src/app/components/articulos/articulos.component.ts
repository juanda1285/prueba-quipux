import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.scss'
})
export class ArticulosComponent {
  @Input() articulo: any = {};

  @Input() articulos: any = [{ nombre: "Juan", descripcion: " Trabjador" },
  { nombre: "Andres", descripcion: "EL ninja" },
  { nombre: "Daniel", descripcion: "BAilarin" }
  ];
}
