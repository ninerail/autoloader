import { Component, OnInit } from '@angular/core';
import { CardlineComponent } from '../cardline/cardline.component';
import { Phrasecard } from '../phrasecard';
import { calcBindingFlags } from '@angular/core/src/view/util';
import { TableComponent } from '../table/table.component'




@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  phrasecard: Phrasecard = {
    english: '',
    arabic: '',
    pronunciation: '',
    video: ''
  }

  pushToStack(){
    console.log();
  }
 
  constructor() { }

  ngOnInit() {
  }

}

