import { Component } from '@angular/core';
import { WhiteBoxComponent } from '../../components/white-box/white-box.component';
import { CommonModule } from '@angular/common';
import { ItemHolderService } from '../../services/item-holder.service';
import { IGalleryItem } from '../../interfaces/gallery-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhiteBoxComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  GPUItems :IGalleryItem[] = [];
  LastLeft :IGalleryItem[] = [];
  ads :IGalleryItem[] = [];
  adss :IGalleryItem[] = [];
  adsss :IGalleryItem[] = [];
  categories :IGalleryItem[] = [];
  monitors :IGalleryItem[] = [];
  ssds :IGalleryItem[] = [];

  constructor(private itemholder: ItemHolderService, private router: Router){}
  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.GPUItems = this.itemholder.getItemsByType('GpuMaker');
    this.LastLeft = this.itemholder.getItemsByType('Case');
    this.ads = this.itemholder.getItemsByType('Ad');
    this.adss = this.itemholder.getItemsByType('Adss');
    this.adsss = this.itemholder.getItemsByType('Adsss');
    this.categories = this.itemholder.getItemsByType('Categories');
    this.monitors = this.itemholder.getItemsByType('Monitor');
    this.ssds = this.itemholder.getItemsByType('SSD');
  }
  
  onTypeChange(type: string): void {
    this.router.navigate(['/search'], { queryParams: { t: type } });
  }
}
