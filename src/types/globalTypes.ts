export interface IBook {
  _id: string;
  title: string;
  image: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: string[];
}

export interface IItem {
  status: boolean;
  price: number;
}
