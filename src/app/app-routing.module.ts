import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { TodoComponent } from 'src/app/components/todo/todo.component';
import { CalculatorComponent } from 'src/app/components/calculator/calculator.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'todo', component: TodoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
