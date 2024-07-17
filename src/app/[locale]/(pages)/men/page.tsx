"use client"

import Products from "../../components/productsCategories/Products";

export interface IProductsItems {
  id: string;
  art: string;
  categories: string;
  title: string;
  price: string;
  size: string;
  bewertung: string;
  bild: string;
}

const categories = () => {
  const products: IProductsItems[] = [
    {
      id: "1",
      art: "herren",
      categories: "anzug",
      title: "Anzug blau und cravat",
      price: "360 eu",
      size: "48",
      bewertung: "4,1",
      bild: "/anzug/bildOne.jpg",
    },
    {
      id: "2",
      art: "herren",
      categories: "T-shirts",
      title: "anzug",
      price: "360 eu",
      size: "42",
      bewertung: "4,9",
      bild: "/anzug/bildTwo.jpg",
    },
    {
      id: "3",
      art: "herren",
      categories: "anzug",
      title: "Anzug",
      price: "360 eu",
      size: "52",
      bewertung: "4,1",
      bild: "/anzug/bildThree.jpg",
    },
    {
      id: "4",
      art: "herren",
      categories: "",
      title: "Anzug",
      price: "360 eu",
      size: "52",
      bewertung: "4,8",
      bild: "/anzug/bildFour.jpg",
    },
  ];

  return (
    <div>
      <h1 className="flex justify-center font-FONT_VIGA text-3xl font-bold mt-2 uppercase py-4">
        Our Collections
      </h1>
      <h2 className="mt-4 font-FONT_ROBOTO font-bold text-3xl">Categories</h2>
     <div className=" w-full">
     <Products items={products} />
     </div>
    </div>
  );
};

export default categories;