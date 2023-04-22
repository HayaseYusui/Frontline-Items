import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../css/customstrap.css', '../css/styles.css', './app.component.css']
})
export class AppComponent implements OnInit {
  title = 'root';

  constructor() { }

  ngOnInit() { }

}
