import { Component, OnInit } from '@angular/core';
import { ToolData } from './toolData';
import { TOOLS } from './toolDatabase';
@Component({
  selector: 'app-gdtools',
  templateUrl: './gdtools.component.html',
  styleUrls: ['./gdtools.component.css']
})
export class GdtoolsComponent implements OnInit {
  tools: ToolData[] = [];
  allData = TOOLS;

  ngOnInit() {
    this.createItemList();
  }
  createItemList() {
    this.tools = this.allData;
  }
}
