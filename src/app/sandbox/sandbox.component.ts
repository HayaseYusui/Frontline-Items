import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  @ViewChild('navbar', { static: true }) navbarRef!: ElementRef<HTMLUListElement>;
  @ViewChild('horiSelector', { static: true }) horiSelectorRef!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.test();
    });
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.test();
      }, 500);
    });
  }

  test(): void {
    const navbarSupportedContent = document.querySelector('#navbarSupportedContent');
    const liElements = navbarSupportedContent?.querySelectorAll('li');
    const tabsNewAnim = navbarSupportedContent;
    const selectorNewAnim = liElements?.length;
    const activeItemNewAnim = tabsNewAnim?.querySelector('.active');
    const activeWidthNewAnimHeight = this.navbarRef.nativeElement.offsetHeight;
    const activeWidthNewAnimWidth =  this.navbarRef.nativeElement.offsetWidth;
    const itemPosNewAnimTop = activeItemNewAnim?.getBoundingClientRect().top;
    const itemPosNewAnimLeft = activeItemNewAnim?.getBoundingClientRect().left;
    const horiSelector = document.querySelector('.hori-selector');
    if (horiSelector) {
      this.horiSelectorRef.nativeElement.style.top = itemPosNewAnimTop + 'px';
      this.horiSelectorRef.nativeElement.style.left = itemPosNewAnimLeft + 'px';
      this.horiSelectorRef.nativeElement.style.height = activeWidthNewAnimHeight + 'px';
      this.horiSelectorRef.nativeElement.style.width = activeWidthNewAnimWidth + 'px';
    }
    liElements?.forEach((li) => {
      li.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const activeWidthNewAnimHeight = target.offsetHeight;
        const activeWidthNewAnimWidth = target.offsetWidth;
        const itemPosNewAnimTop = target.getBoundingClientRect().top;
        const itemPosNewAnimLeft = target.getBoundingClientRect().left;
        const horiSelector = document.querySelector('.hori-selector');
        if (horiSelector) {
          this.horiSelectorRef.nativeElement.style.top = itemPosNewAnimTop + 'px';
          this.horiSelectorRef.nativeElement.style.left = itemPosNewAnimLeft + 'px';
          this.horiSelectorRef.nativeElement.style.height = activeWidthNewAnimHeight + 'px';
          this.horiSelectorRef.nativeElement.style.width = activeWidthNewAnimWidth + 'px';
        }
        liElements?.forEach((li) => {
          li.classList.remove('active');
        });
        target.classList.add('active');
      });
    });
  }

  toggleNavbar(): void {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.toggle('show');
      setTimeout(() => {
        this.test();
      });
    }
  }
};


