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