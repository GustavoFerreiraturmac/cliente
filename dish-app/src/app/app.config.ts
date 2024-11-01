// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { AdicionaisComponent } from './components/adicionais/adicionais.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

const routes: Routes = [
  { path: '', component: CardapioComponent },
  { path: 'adicionais', component: AdicionaisComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'add-dish', component: DishFormComponent },
  { path: 'edit-dish/:id', component: DishFormComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
};