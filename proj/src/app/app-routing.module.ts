import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ChildOneComponent } from './customer/childone.component';
import { ChildTwoComponent } from './customer/childtwo.component';

export const routes  = [
    // {path: '', redirectTo: '/customer', pathMatch: 'full'},
    // { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'customer', component: CustomerComponent,
      children: [
        
        { path: 'child1', component: ChildOneComponent },
        { path: 'child2', component: ChildTwoComponent },
        {path: '', redirectTo: 'child1', pathMatch: 'full'}
      ]    
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    // {path: 'about', 
    // component:AboutComponent,
    // children: [
    //     { path: ':id', component: AboutDetailComponent },      
    //   ]
    // },
    // {path: 'employee/:title', component: EmployeeDetailComponent}
];

@NgModule({
    imports:[
     RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}