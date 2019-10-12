import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit,Input,ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'condensed-layout',
  templateUrl: './condensed.component.html',
  styleUrls: ['./condensed.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CondensedComponent extends RootLayout implements OnInit {
    menuLinks = [
      {
        label:"Accueil",
        routerLink:"dashboard",
        iconType:"pg",
        iconName:"home",
        thumbNailClass:"bg-success"
      },
      {
        label:"Mes Missions",
        routerLink:"missions",
        iconType:"pg",
        iconName:"social"
      },
      {
          label:"Messages",
          // details:"234 New Emails",
          routerLink:"email/list",
          iconType:"pg",
          iconName:"mail"
      },


      // {
      //   label:"Docs",
      //   externalLink:"https://docs.pages.revox.io/v/angular/",
      //   target:"_blank",
      //   iconType:"pg",
      //   iconName:"note"
      // },
      // {
      //   label:"Changelog",
      //   externalLink:"http://changelog.pages.revox.io/",
      //   target:"_blank",
      //   iconType:"letter",
      //   iconName:"Cl"
      // },
  ];

    ngOnInit() {
    }
      
}
