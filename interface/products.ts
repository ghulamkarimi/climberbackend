export interface IProducts {
    _id: string;
    user? : string;
    photo: string;
    photoDetailsOne: string;
    photoDetailsTwo: string;
    photoDetailsThree: string;
    photoDetailsFour: string;
    title: string;
    price: string;
    photoDetailsTow: string;
    descriptions: string
    evaluation: number
    colors: string[]
    size: string[]
  } 

  export interface ITopProducts {
    _id: string;
    title: string;
    photo: string;
    price: string;
    size: string[];
    evaluation: number;
    user?: string;
    category?: string;
  }