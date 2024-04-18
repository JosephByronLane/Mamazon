import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchComponent } from './pages/search/search.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {   
        path:"",
        component:HomeComponent,
        title:"Mamazon.com.mx"
    },
    {   
        path:"products",
        component:ProductComponent,
        title:"Mamazon.com.mx"

    },
    {   
        path:"products/:id",
        component:ProductComponent,
        title:"Mamazon.com.mx"

    },
    { 
        path: 'search',
        component: SearchComponent,
        title:"Mamazon.com.mx"
     },
     { 
        path: 'search:queryParams',
        component: SearchComponent,
        title:"Mamazon.com.mx"
     },
     { 
        path: 'about',
        component: AboutComponent,
        title:"Mamazon.com.mx"
     },
     { 
        path: 'contact-us',
        component: ContactUsComponent,
        title:"Mamazon.com.mx"
     },
     { 
        path: '404',
        component: NotFoundComponent,
        title:"Mamazon.com.mx"
     },
     { 
        path: '**',
        redirectTo: '404'
     },
];
