export interface IProductImage {
  color: string;
  colorCode: string;
  image: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  stock: number;
  color: string ;
  colorCode: string;
  category: string;
  imageURL: string;
}

export interface IProductDetails {
    id: number;
    images: IProductImage[];
    name: string;
    description: string;
    price: number;
    quantity: number;
    stock: number;
}


