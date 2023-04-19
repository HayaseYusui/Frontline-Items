import { Component, OnInit } from '@angular/core';
import { ItemData, ViewData } from './itemData'
import { ITEMS } from './item-database';
import * as itemType from './itemConst';

@Component({
  selector: 'app-gditems',
  templateUrl: './gditems.component.html',
  styleUrls: ['./gditems.component.css']
})
export class GditemsComponent implements OnInit {

  ngOnInit() {
    this.createItemList();
  }

  itemData = ITEMS;
  aRifles: ItemData[] = [];
  sRifles: ItemData[] = [];
  amRifles: ItemData[] = [];
  shotguns: ItemData[] = [];
  smgs: ItemData[] = [];
  pdws: ItemData[] = [];
  dmrs: ItemData[] = [];
  sidearms: ItemData[] = [];
  heavyweapons: ItemData[] = [];
  lmgs: ItemData[] = [];
  launchers: ItemData[] = [];
  melees: ItemData[] = [];
  others: ItemData[] = [];
  viewItems: ViewData[] = [];

  createItemList() {
    for (var i = 0; i < this.itemData.length; i++) {
      var items = this.itemData[i];
      if (items.classify == itemType.RF) {
        this.aRifles.push(items);
      }
      if (items.classify == itemType.SR) {
        this.sRifles.push(items);
      }
      if (items.classify == itemType.AMR) {
        this.amRifles.push(items);
      }
      else if (items.classify == itemType.SG) {
        this.shotguns.push(items);
      }
      else if (items.classify ==itemType.SMG) {
        this.smgs.push(items);
      }
      else if (items.classify == itemType.HG) {
        this.sidearms.push(items);
      }
      else if (items.classify == itemType.LMG) {
        this.lmgs.push(items);
      }
      else if (items.classify ==itemType.GL) {
        this.launchers.push(items);
      }
      else if (items.classify == itemType.MELEE) {
        this.melees.push(items);
      }
      else if (items.classify == itemType.PDW) {
        this.pdws.push(items);
      }
      else if (items.classify == itemType.DMR) {
        this.dmrs.push(items);
      }
      else {
        this.others.push(items);
      }
      this.viewItems = [
        { id: "lblPistol", name: "ハンドガン", tag: "ハンドガン", weapons: this.sidearms },
        { id: "lblSmg", name: "サブマシンガン", tag: "SMG", weapons: this.smgs },
        { id: "lblPdw", name: "個人防衛火器", tag: "SMG", weapons: this.pdws },
        { id: "lblArifle", name: "ライフル", tag: "ライフル", weapons: this.aRifles },
        { id: "lblDmr", name: "マークスマン", tag: "ライフル", weapons: this.dmrs },
        { id: "lblSg", name: "ショットガン", tag: "ライフル", weapons: this.shotguns },
        { id: "lblsRifles", name: "スナイパー", tag: "ライフル", weapons: this.sRifles },
        { id: "lblamRifles", name: "対物ライフル", tag: "重火器", weapons: this.amRifles },
        { id: "lblLmg", name: "LMG", tag: "重火器", weapons: this.lmgs },
        { id: "lblLauncherWp", name: "ランチャー", tag: "重火器", weapons: this.launchers },
        { id: "lblmelees", name: "近接武器", tag: "武器戦闘", weapons: this.melees }
        //{ id: "lblEct", name: "未分類", tag: "未定", weapons: this.others }
      ]
    }
  }
}
