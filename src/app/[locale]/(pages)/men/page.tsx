"use client";
import { useRouter } from "next/navigation";
import Products from "../../components/productsCategories/Products";
import { useSelector } from "react-redux";
import { RootState } from "@/feature/store/store";
import {    ICategorieItemsMen,  TProducts } from "@/interface";



interface ICategoriesProps {
  params: {
    locale: string;
  };
}

const Categories = ({ params: { locale } }: ICategoriesProps) => {
  const router = useRouter();
  const { inputValueSearchMenu } = useSelector((state: RootState) => state.app);
  const products: ICategorieItemsMen[] = [
    {
      id: "1",
      categories: "anzug",
      title: "Anzug blau und cravat",
      price: "360 eu",
      size: "48",
      bewertung: 4.1,
      bild: "/anzug/bildOne.jpg",
    },
    {
      id: "2",
      categories: "T-shirts",
      title: "anzug",
      price: "360 eu",
      size: "42",
      bewertung: 4.9,
      bild: "/anzug/bildTwo.jpg",
    },
    {
      id: "3",
      categories: "anzug",
      title: "Anzug",
      price: "360 eu",
      size: "52",
      bewertung: 4.1,
      bild: "/anzug/bildThree.jpg",
    },
    {
      id: "4",
      categories: "",
      title: "Anzug",
      price: "360 eu",
      size: "52",
      bewertung: 4.8,
      bild: "/anzug/bildFour.jpg",
    },
  ];

  const categories: TProducts[] = [
    {
      id: "1",
      bild: "/anzug/bildFive.jpg",
      title: "Suits",
      descriptions: "Description for category 1",
    },
    {
      id: "2",
      bild: "/shirt/shirtOne.jpg",
      title: "Shirt",
      descriptions: "Description for category 2",
    },
    {
      id: "3",
      bild: "/underdress/undressOne.jpg",
      title: "UNDERDRESS",
      descriptions: "Description for category 3",
    },
    {
      id: "4",
      bild: "/pants/pantsOne.jpg",
      title: "PANTS",
      descriptions: "Description for category 4",
    },
    {
      id: "5",
      bild: "/socks/socksOne.jpg",
      title: "Socks",
      descriptions: "Description for category 5",
    },
    {
      id: "6",
      bild: "/shoes/shoesOne.jpg",
      title: "Shoes",
      descriptions: "Description for category 6",
    },
    {
      id: "7",
      bild: "/ties/tiesOne.jpg",
      title: "Ties",
      descriptions: "Description for category 7",
    },
  ];

  return (
    <div>
      <h1 className="flex justify-center font-FONT_VIGA text-3xl font-bold mt-2 uppercase py-4">
        Our Collections
      </h1>
      <h2 className="mt-4 font-FONT_ROBOTO font-bold text-3xl">Products</h2>
      <div className="w-full">
        <Products items={products} />
      </div>
      <h2 className="mt-4 font-FONT_ROBOTO font-bold text-3xl">Categories</h2>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {categories
          .filter(
            (category) =>
            category.title || ""
                .toLocaleLowerCase()
                .includes(inputValueSearchMenu.toLocaleLowerCase()) ||
              category.descriptions || ""
                .toLocaleLowerCase()
                .includes(inputValueSearchMenu.toLocaleLowerCase())
          )
          .map((category) => (
            <div
              onClick={() => {
                router.push(`/${locale}/men/suits`);
              }}
              key={category.id}
              className="sm:w-72 h-full w-full p-4 border rounded-lg shadow-md cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={category.bild}
                  className="w-full h-64 max-h-64 object-cover hover:scale-105 transition-transform duration-300"
                  alt={category.title}
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-bold text-xl">{category.title}</h3>
                <p className="text-gray-700">{category.descriptions}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
