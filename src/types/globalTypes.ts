export interface IBook {
  _id: number;
  title: string;
  image: string;
  author: string;
  gener: number;
  publicationDate: Date;
  reviews: string[];
}
