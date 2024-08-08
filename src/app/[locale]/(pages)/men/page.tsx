"use client";
import { useRouter } from "next/navigation";
import Products from "../../components/productsCategories/Products";
import { useSelector } from "react-redux";
import { RootState } from "@/feature/store/store";
import { displayAllCategories } from "@/feature/reducers/categoriesSlice";
import { displayAllTopProducts } from "@/feature/reducers/topProducts";
import { ITopProducts } from "@/interface/products";



interface ICategoriesProps {
  params: {
    locale: string;
  };
}

const Categories = ({ params: { locale } }: ICategoriesProps) => {
  const router = useRouter();
  const { inputValueSearchMenu } = useSelector((state: RootState) => state.app);
  const topProducts = useSelector(displayAllTopProducts);
  console.log("products",topProducts);
  const categories = useSelector(displayAllCategories)
  const productFilterByCategory = topProducts.filter((product) => product.category === "men");

 
  
  return (
    <div>
      <h1 className="flex justify-center font-FONT_VIGA text-3xl font-bold mt-2 uppercase py-4">
        Our Collections
      </h1>
      <h2 className="mt-4 font-FONT_ROBOTO font-bold text-3xl">Top Products</h2>
      <div className="w-full">
        <Products items={productFilterByCategory} />
      </div>
      <h2 className="mt-4 font-FONT_ROBOTO font-bold text-3xl">Categories</h2>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {categories
          .filter(
            (category) =>
            category.title || ""
                .toLocaleLowerCase()
                .includes(inputValueSearchMenu.toLocaleLowerCase()) ||
              category.description || ""
                .toLocaleLowerCase()
                .includes(inputValueSearchMenu.toLocaleLowerCase())
          )
          .map((category) => (
            <div
              onClick={() => {
                router.push(`/${locale}/men/suits`);
              }}
              key={category._id}
              className="sm:w-72 h-full w-full p-4 border rounded-lg shadow-md cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={category.photo}
                  className="w-full h-64 max-h-64 object-cover hover:scale-105 transition-transform duration-300"
                  alt={category.title}
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-bold text-xl">{category.title}</h3>
                <p className="text-gray-700">{category.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
