import { Component, OnInit } from '@angular/core';
import { ToolData } from './toolData';
import { TOOLS } from './toolDatabase';
import { BULLETS, BulletData } from "../gditems/itemBulletData";

@Component({
  selector: 'app-gdtools',
  templateUrl: './gdtools.component.html',
  styleUrls: ['./gdtools.component.css']
})
export class GdtoolsComponent implements OnInit {
  allData = TOOLS;
  allBullet = BULLETS;
  tools: ToolData[] = [];
  bullets: BulletData[] = [];

  ngOnInit() {
    this.createItemList();
  }

  ngAfterViewInit(): void {
    $('#table-bullet').tablesorter({
      headers: {
        0: { sorter: true },
        1: { sorter: false },
        2: { sorter: false },
        3: { sorter: true },
        4: { sorter: false },
        5: { sorter: true },
        6: { sorter: true }
      }
    });
  }

  createItemList() {
    this.tools = this.allData;
    this.bullets = this.allBullet;
  }
}
