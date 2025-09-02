import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myPortfolio');
}
