import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu-advantage',
  templateUrl: './edu-advantage.component.html',
  styleUrls: ['./edu-advantage.component.scss']
})
export class EduAdvantageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      $("header").hide();
  });

  
  }

}
