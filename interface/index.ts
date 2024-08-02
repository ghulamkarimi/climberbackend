export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  telephone: string;
  gender: string;
  profile_photo: string;
  address: {
    country: string;
    city: string;
    street: string;
    number: string;
    postalCode: string;
  };
}

export type TUser = Partial<IUser>;

export interface IProductsItems {
  id: string;
  bild: string;
  bildDetailsOne: string;
  bildDetailsTwo: string;
  bildDetailsThree: string;
  bildDetailsFour: string;
  title: string;
  price: string;
  bildDetailsTow: string;
  descriptions:string
  evaluation:number
  colors:string[]
  sizes:string[]
}

export type TProducts = Partial<IProductsItems>


export interface ICategorieItemsMen {
  id: string;
  categories: string;
  title: string;
  price: string;
  size: string;
  bewertung: number;
  bild: string;
}

export interface IUserInfo{
  userId: string;
  firstName:string;
  lastName:string;
  email:string;
  profile_photo:string;
  exp:string;
  iat:string;
  isAdmin:boolean;
  address:object
}