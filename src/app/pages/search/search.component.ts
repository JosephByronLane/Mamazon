import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IGalleryItem } from '../../interfaces/gallery-item';
import { ItemHolderService } from '../../services/item-holder.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchResults: IGalleryItem[] = [];
  searchCount: number = 0;
  params!:any
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemHolderService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['q'];
      const searchType = params['t'];
      const searchMaker = params['m'];
  
      this.searchResults = this.itemService.getAllItemsExcludingTypes(['Ad', 'GpuMaker', 'Categories', 'Adsss', 'Adss']);
  
      if (searchTerm) {
        console.log("search term found:", searchTerm);
        this.searchResults = this.searchResults.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      
      if (searchType) {
        this.searchResults = this.searchResults.filter(item => item.type === searchType);
      }
      
      if (searchMaker) {
        this.searchResults = this.searchResults.filter(item => item.maker === searchMaker);
      }
      
      console.log(this.searchResults);
    });
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
}
