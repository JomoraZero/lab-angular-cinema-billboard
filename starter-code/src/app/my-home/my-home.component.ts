import { Component, OnInit } from '@angular/core';

import {CinemaService} from '../services/cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(private cinemaThang: CinemaService) { }

  ngOnInit() {
  }

}
