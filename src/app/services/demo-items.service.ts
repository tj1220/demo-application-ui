import { Injectable } from '@angular/core';
import { Product } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DemoItemsService {
  constructor() { }

  articles:any[] = [
    {
      id: 1,
      creatorName: `Demo Creator 1`,
      creatorAddress: `City 1, State 1`,
      creatorIcon: `../../../../../assets/images/D.PNG`,
      coverImage: `../../../../../assets/images/demo-image.PNG`,
      title: `Demo Article 1`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  ut labore et dolore magna aliqua.`
    },
    {
      id: 2,
      creatorName: `Demo Creator 2`,
      creatorAddress: `City 2, State 2`,
      creatorIcon: `../../../../../assets/images/D.PNG`,
      coverImage: `../../../../../assets/images/demo-image.PNG`,
      title: `Demo Article 2`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  ut labore et dolore magna aliqua.`
    },
    {
      id: 3,
      creatorName: `Demo Creator 3`,
      creatorAddress: `City 3, State 3`,
      creatorIcon: `../../../../../assets/images/D.PNG`,
      coverImage: `../../../../../assets/images/demo-image.PNG`,
      title: `Demo Article 3`,
      description: `Lorem ipsum dolor sit amet, consectetur , sed do eiusmod incididunt ut labore et dolore magna aliqua.`
    }
  ];

  products: Product[] = [
    {
      id: 1,
      title: `Product 1`,
      brandName: `Brand 1`,
      price: 120,
      availableSizes: [
        {id: 1, label: `S`},
        {id: 2, label: `M`},
        {id: 3, label: `L`},
        {id: 4, label: `XL`},
        {id: 5, label: `XXL`}
      ],
      availableColors: [
        {id: 1, colorCode: `#FF0000`, label: `Red`, image: `../../../../../assets/images/demo-image-red.PNG`},
        {id: 2, colorCode: `#00B0F0`, label: `Blue`, image: `../../../../../assets/images/demo-image-blue.PNG`},
        {id: 3, colorCode: `#FFFF00`, label: `Yellow`, image: `../../../../../assets/images/demo-image-yellow.PNG`}
      ],
      maxQuantity: 5,
      numberOfPeopleRated: 67,
      ratingTotal: 5,
      ratingObtained: 4.8
    },
    {
      id: 2,
      title: `Product 2`,
      brandName: `Brand 2`,
      price: 100,
      availableSizes: [
        {id: 2, label: `M`},
        {id: 3, label: `L`},
        {id: 4, label: `XL`}
      ],
      availableColors: [
        {id: 2, colorCode: `#00B0F0`, label: `Blue`, image: `../../../../../assets/images/demo-image-blue.PNG`},
        {id: 3, colorCode: `#FFFF00`, label: `Yellow`, image: `../../../../../assets/images/demo-image-yellow.PNG`}
      ],
      maxQuantity: 5,
      numberOfPeopleRated: 183,
      ratingTotal: 5,
      ratingObtained: 4.4
    },
    {
      id: 3,
      title: `Product 3`,
      brandName: `Brand 3`,
      price: 200,
      availableSizes: [
        {id: 2, label: `M`},
        {id: 3, label: `L`},
        {id: 4, label: `XL`},
        {id: 5, label: `XXL`}
      ],
      availableColors: [
        {id: 1, colorCode: `#FF0000`, label: `Red`, image: `../../../../../assets/images/demo-image-red.PNG`},
        {id: 2, colorCode: `#00B0F0`, label: `Blue`, image: `../../../../../assets/images/demo-image-blue.PNG`},
        {id: 3, colorCode: `#FFFF00`, label: `Yellow`, image: `../../../../../assets/images/demo-image-yellow.PNG`}
      ],
      maxQuantity: 5,
      numberOfPeopleRated: 88,
      ratingTotal: 5,
      ratingObtained: 4.5
    }
  ];
}
