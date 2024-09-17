export interface ICategories {
    _id: string;
    categories: "men" | "women";
    title: string;
    photo: File  | null ;
    description: string;
  }