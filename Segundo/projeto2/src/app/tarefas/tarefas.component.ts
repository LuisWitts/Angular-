import { Component, OnInit } from '@angular/core';
// faço o import para utilizar o negocio
import { tarefa } from '../model/Tarefa'
//agora eu importo o serviço que vai conversar cpom o site do professor 
import { ListawebService } from'../service/listaweb.service';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  minhaTarefa: tarefa[]

  //injetando o seviço web
 

  constructor(private servicoLista : ListawebService) { 
    
    
  }

  ngOnInit() {
    console.log("chamando a função que recupera a lista");
    this.obterTodasAsTarefas();
    console.log("espero q tenha dado certo");
    console.log(this.minhaTarefa);

  }
  // só vou criar um metodo para invocar o serviço 
  public obterTodasAsTarefas(){
    this.servicoLista.obterTarefas().subscribe((resultado: tarefa[])=>{this.minhaTarefa = resultado });

  }
}
