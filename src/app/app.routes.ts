import { Routes } from '@angular/router';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    { path: 'empresas', component: EmpresasComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'articulos', component: ArticulosComponent },
    { path: 'colaboradores', component: ColaboradoresComponent },
    { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/landing' } // Redirigir a empresas si la ruta no existe
];
