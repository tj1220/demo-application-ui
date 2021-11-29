import { Component, Input, OnInit } from '@angular/core';
import { Product, SelectedProductDetails } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() product: Product;
  selectedProductDetails: SelectedProductDetails;
  imageSource: string;
  constructor() { }

  ngOnInit(): void {
    if(this.product) {
      this.selectedProductDetails = {
        id: this.product.id,
        colorId: this.product.availableColors[0].id,
        sizeId: this.product.availableSizes[0].id,
        quantity: 0
      }
      this.prepareImageSrc();
    }
  }

  private prepareImageSrc = (): void => {
    this.imageSource = this.product.availableColors.find(colorObject => colorObject.id === this.selectedProductDetails.colorId).image;
  }

  public selectSize = sizeObject => {
    this.selectedProductDetails.sizeId = sizeObject.id;
  }

  public increaseQuantity = () => {
    this.selectedProductDetails.quantity++;
  }

  public decreaseQuantity = () => {
    this.selectedProductDetails.quantity--;
  }

  public selectColor = colorObject => {
    this.selectedProductDetails.colorId = colorObject.id;
    this.prepareImageSrc();
  }

}
