import { Component, Input, input } from '@angular/core';
import { IGalleryItem } from '../../interfaces/gallery-item';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-white-box',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './white-box.component.html',
  styleUrl: './white-box.component.css'
})
export class WhiteBoxComponent {
  @Input() item: IGalleryItem[] = [];
  @Input() NumberOfPanels: number = 4;
  @Input() 
  @Input() boxTitle:string="Default text"
  @Input() textLink:string=""
  @Input() seeMoreText:string ="Default Text"
  @Input() isItem:boolean = true;
  @Input() ItemMaker: string = ''
  @Input() ItemType: string =""

  constructor(private router: Router){

  }
  truncateTitle(title: string, maxLength: number): string {
    if (title.length > maxLength) {
      return title.substring(0, maxLength - 3) + '...';
    }
    return title;
  }

  onTypeChange(type: string): void {
    this.router.navigate(['/search'], { queryParams: { t: type } });
  }
  onMakerChange(maker: string): void {
    this.router.navigate(['/search'], { queryParams: { m: maker, t:"GPU" } });
  }
}
