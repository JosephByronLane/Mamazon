import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemHolderService } from '../../services/item-holder.service';
import { IGalleryItem } from '../../interfaces/gallery-item';
import { ShittyNavbarComponent } from '../../components/shitty-navbar/shitty-navbar.component';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ShittyNavbarComponent, FontAwesomeModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  gamingservice : ItemHolderService = inject(ItemHolderService)
  product : IGalleryItem | undefined
  locationdot = faLocationDot


  constructor(private router: Router){    
    const gameid = +this.route.snapshot.params["id"]
    this.product = this.gamingservice.getProductById(gameid)
  }

  formatNumberWithCommas(num: number | undefined): string | undefined{
    return num?.toLocaleString();
  }

  calculoMesesSinIntereses(num: number | undefined): number | undefined {
    if (num !== undefined) {
      return num / 12.0;
    }
    return undefined;
  }
  onMakerChange(maker: string | undefined): void {
    this.router.navigate(['/search'], { queryParams: { m: maker} });
  }
}
