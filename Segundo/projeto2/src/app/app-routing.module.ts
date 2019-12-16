import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { TarefasComponent } from'./tarefas/tarefas.component';
import { BuscaComponent } from'./busca/busca.component';




const routes: Routes = [
  {path: '', redirectTo: 'body', pathMatch:'full' },
  {path: 'body', component : BodyComponent },
  {path: 'tarefas', component : TarefasComponent },
  {path: 'busca', component : BuscaComponent },


];
 

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
