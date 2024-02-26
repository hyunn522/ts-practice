export interface MenuType {
  id: number;
  name: string;
  isBest: boolean;
  price: number;
  ingredients: string;
}

export interface StoreType {
  id: number;
  name: string;
  category: number;
  ranking: number;
  rate: number;
  reviewCnt: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  minDeliveryPrice: number;
  deliveryFee: number;
  menus: MenuType[];
}

export interface CategoryType {
  id: number;
  name: string;
}
