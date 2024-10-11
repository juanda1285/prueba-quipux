import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.scss'
})
export class EmpresasComponent {
  @Input() empresa: any = {};
}
