import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ItemHolderService } from '../../services/item-holder.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  magglass = faMagnifyingGlass
  locationdot = faLocationDot
  burgerbar = faBars


  constructor(private router: Router, private itemser:ItemHolderService) { }

onSearch(event: Event,toSearchText: string): void {
  event.preventDefault();
  this.router.navigate(['/search'], { queryParams: { q: toSearchText } });

}

simpleSearchCategory(toSearchText: string){
  this.router.navigate(['/search'], { queryParams: { t: toSearchText } });
}
}
