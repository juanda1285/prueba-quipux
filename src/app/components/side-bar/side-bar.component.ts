import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  isCollapsed = true; // Cambiado para controlar si el sidebar está colapsado

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed; // Alternar el estado colapsado
  }
}
