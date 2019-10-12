import { Routes } from '@angular/router';
//Layouts
import { 
  CondensedComponent,
  BlankComponent,
  CorporateLayout,
  SimplyWhiteLayout,
  ExecutiveLayout,
  CasualLayout ,
  BlankCasualComponent,
  BlankCorporateComponent,
  BlankSimplywhiteComponent
} from './@pages/layouts';

//Sample Pages
import { CondensedDashboardComponent} from './dashboard/condensed/dashboard.component';
import { SimplyWhiteDashboardComponent} from './dashboard/simplywhite/dashboard.component';
import { CasualDashboardComponent } from './dashboard/casual/dashboard.component';
import { CorporateDashboardComponent } from './dashboard/corporate/dashboard.component';
import { ExecutiveDashboardComponent } from './dashboard/executive/dashboard.component';
import { CardsComponentPage} from './cards/cards.component';
import { ViewsPageComponent} from './views/views.component';
import { ChartsComponent } from './charts/charts.component';
import { SocialComponent } from './social/social.component';

export const AppRoutes: Routes = [

  {
    path: '',
    data: {
        breadcrumb: 'Home'
    },
    
    component: CondensedComponent
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'dashboard',
      component: CondensedDashboardComponent
    }],
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'extra',
      loadChildren: './extra/extra.module#ExtraModule'
    }]
  },{
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'layouts',
      loadChildren: './layouts/layouts.module#LayoutPageModule'
    }]
  },{
    path: 'condensed',
    component: BlankComponent,
    children: [{
      path: 'session',
      loadChildren: './session/session.module#SessionModule'
    }]
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'forms',
      loadChildren: './forms/forms.module#FormsPageModule'
    }]
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'builder',
      loadChildren: './builder/builder.module#BuilderModule'
    }]
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'ui',
      loadChildren: './ui/ui.module#UiModule'
    }]
  },{
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'email',
      loadChildren: './email/email.module#EmailModule'
    }]
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'missions',
      component: SocialComponent
    }]
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'cards',
      component: CardsComponentPage
    }]
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'views',
      component: ViewsPageComponent
    }]
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'maps',
      loadChildren: './maps/maps.module#MapsModule'
    }]
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'tables',
      loadChildren: './tables/tables.module#TablesModule'
    }]
  },
  {
    path: 'condensed',
    component: CondensedComponent,
    children: [{
      path: 'charts',
      component: ChartsComponent
    }]
  }
];
