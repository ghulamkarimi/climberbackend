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

export interface ISuits {
  id: string;
  bild?: string;
  bildDetailsOne?: string;
  bildDetailsTwo?: string;
  bildDetailsThree?: string;
  bildDetailsFour?: string;
  title?: string;
  price?: string;
  bildDetailsTow?: string;
  descriptions?:string
  evaluation:number
  colors:string[]
  sizes:string[]
}
