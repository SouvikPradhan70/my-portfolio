import { Component, signal, AfterViewInit  } from '@angular/core';
import * as AOS from 'aos';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { AboutComponent } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,
    NavbarComponent,
    HeroComponent,
    TechStackComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements AfterViewInit {
  protected readonly title = signal('portfolio-souvik');

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
