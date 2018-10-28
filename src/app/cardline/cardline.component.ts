import { Component, OnInit } from '@angular/core';
import { Phrasecard } from '../phrasecard';

@Component({
  selector: 'app-cardline',
  templateUrl: './cardline.component.html',
  styleUrls: ['./cardline.component.css']
})
export class CardlineComponent implements OnInit {

  phrasecard: Phrasecard = {
    english: "I have piercings in my ears.",
    arabic: "ندي حلقان في ودان",
    pronunciation: "ana 3andi Hala'aan fi-widaani",
    video: "https://youtu.be/tVQKEARheRg?t=1099"
  }


  constructor() { 

  }

  ngOnInit() {

  }

}
