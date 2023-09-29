import { products } from 'src/app/products';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.products = products;
  }

}
