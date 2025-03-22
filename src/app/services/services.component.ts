import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule, CommonModule, NavComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    ["Re-string & Clean", "$40 + strings"],
    ["Set-up", "$60 + strings"],
    ["Custom bone/synthetic nut replacement", "100,00 US$"],
    ["Custom bone/synthetic saddle replacement - uncompensated", "90,00 US$"],
    ["Custom bone/synthetic saddle replacement - compensated", "100,00 US$"],
    ["Replacement tuner install", "$35 + tuners"],
    ["Magnetic pickup install", "≥$75"],
    ["Under-saddle p-up install", "≥$100"],
    ["Neck reset", "≥$600"],
    ["Complete re-fret", "500,00 US$"],
    ["Crack Repair", "$25/cleat"],
    ["Brace re-glue", "$50/brace"],
    ["Bridge re-glue", "250,00 US$"],
    ["Re-tube and bias amp", "$50 + tubes"],
    ["Electronics bench fee*", "50,00 US$"],
    ["Labor rate", "100,00 US$"]
  ]
}
