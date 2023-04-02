import { Component, OnInit } from '@angular/core';
import { ItemData } from './itemData'
import { ITEMS } from './item-database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gundogdayo';

  itemData = ITEMS;
  Arifles: ItemData[] = [];
  sRifles: ItemData[] = [];
  amRifles: ItemData[] = [];
  shotguns: ItemData[] = [];
  smgs: ItemData[] = [];
  sidearms: ItemData[] = [];
  heavyweapons: ItemData[] = [];
  Lmgs: ItemData[] = [];
  Launchers: ItemData[] = [];
  melees: ItemData[] = [];
  others: ItemData[] = [];

  constructor() { }

  ngOnInit() {
    this.createItemList();
  }

  createItemList(){
    for( var i = 0; i < this.itemData.length; i++ ){
      var items = this.itemData[i];
      if(items.classify == 'ライフル'){
        this.Arifles.push(items);
      }
      if(items.classify == 'SR'){
        this.sRifles.push(items);
      }
      if(items.classify == '対物'){
        this.amRifles.push(items);
      }
      else if(items.classify == 'ショットガン'){
        this.shotguns.push(items);
      }
      else if(items.classify == 'SMG'){
        this.smgs.push(items);
      }
      else if(items.classify == 'ハンドガン'){
        this.sidearms.push(items);
      }
      
      else if(items.classify == 'LMG'){
        this.Lmgs.push(items);
      }
      else if(items.classify == 'ランチャー'){
        this.Launchers.push(items);
      }
      else if(items.classify == '武器戦闘'){
        this.melees.push(items);
      }
      else{
        this.others.push(items);
      }
      // #region 重火器格納
      /*
      else if(items.classify == '重火器'){
        this.heavyweapons.push(items);
      }
      */
     // #endregion
    }
  }
}
