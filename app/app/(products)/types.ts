export interface IProductImage {
  color: string;
  colorCode: string;
  imageurl: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  imageUrl: string;
}

export interface IProductDetails {
    id: number;
    images: IProductImage[];
    name: string;
    description: string;
    price: number;
    quantity: number;
    sizes: string;
    stock: number;
}


