import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { ObjetivosComponent } from './pages/objetivos/objetivos.component';
import { MisionVisionComponent } from './pages/mision-vision/mision-vision.component';
import { EstadoArteComponent } from './pages/estado-arte/estado-arte.component';
import { InfraestructuraComponent } from './pages/infraestructura/infraestructura.component';
import { NucleoBasicoComponent } from './pages/nucleo-basico/nucleo-basico.component';
import { LgyacComponent } from './pages/lgyac/lgyac.component';
import { LocalizacionComponent } from './pages/localizacion/localizacion.component';
import { SintesisPlanComponent } from './pages/sintesis-plan/sintesis-plan.component';
import { IngresoEgresoComponent } from './pages/ingreso-egreso/ingreso-egreso.component';
import { RequisitosPermanenciaComponent } from './pages/requisitos-permanencia/requisitos-permanencia.component';
import { RequisitosAcademicoComponent } from './pages/requisitos-academico/requisitos-academico.component';
import { RequisitosIngresoComponent } from './pages/requisitos-ingreso/requisitos-ingreso.component';
import { ProductividadComponent } from './pages/productividad/productividad.component';
import { EgresadosComponent } from './pages/egresados/egresados.component';
import { CohorteComponent } from './pages/cohorte/cohorte.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'presentacion', component: PresentacionComponent},
    {path: 'objetivos', component: ObjetivosComponent},
    {path: 'misionVision', component: MisionVisionComponent},
    {path: 'estadoArte', component: EstadoArteComponent},
    {path: 'infraestructura', component: InfraestructuraComponent},
    {path: 'nucleoBasico', component: NucleoBasicoComponent},
    {path: 'lgyac', component: LgyacComponent},
    {path: 'localizacion', component: LocalizacionComponent},
    {path: 'sintesisPlan', component: SintesisPlanComponent},
    {path: 'ingresoEgreso', component: IngresoEgresoComponent},
    {path: "requisitosIngreso", component: RequisitosIngresoComponent},
    {path: 'requisitosPermanencia', component: RequisitosPermanenciaComponent},
    {path: 'requisitosAcademico', component: RequisitosAcademicoComponent},
    {path: 'productividad', component: ProductividadComponent},
    {path: 'egresados', component: EgresadosComponent},
    {path: 'cohorte', component: CohorteComponent},
    {path: 'contacto', component: ContactoComponent}
];
