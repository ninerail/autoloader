import { Component, OnInit } from '@angular/core';
import { CardlineComponent } from '../cardline/cardline.component';
import { Phrasecard } from '../phrasecard';



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
  stub = ''
  time = ''
  concat = this.stub + this.time;

  constructor() { }

  ngOnInit() {
  }

}

