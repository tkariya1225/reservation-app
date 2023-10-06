

import * as e from 'express';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../../products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
    const productsObervable = this.productService.getProducts()
    productsObervable.subscribe(
      (data) => {
        this.products = data
      },
      (err) => { console.error('次のデータが出力されました：' + err) }
    )
 }

}
