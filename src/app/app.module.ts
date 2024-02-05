import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { ThemeService } from '../theme.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ThemeToggleComponent],
  bootstrap: [AppComponent],
  providers: [ThemeService]
})
export class AppModule {}
