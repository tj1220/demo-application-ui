export interface Product {
  id: number;
  title: string;
  brandName: string;
  price: number;
  availableSizes: {
    id: number;
    label: string;
  }[];
  availableColors: {
    id: number;
    colorCode: string;
    label: string;
    image: string;
  }[],
  maxQuantity: number;
  numberOfPeopleRated: number;
  ratingTotal: number;
  ratingObtained: number;
};

export interface SelectedProductDetails {
  id: number;
  colorId: number;
  sizeId: number;
  quantity: number;
};
