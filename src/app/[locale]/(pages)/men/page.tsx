"use client";
import { useRouter } from "next/navigation";
import Products from "../../components/productsCategories/Products";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/feature/store/store";
import { deleteCategoriesApi, displayAllCategories } from "@/feature/reducers/categoriesSlice";
import { displayAllTopProducts } from "@/feature/reducers/topProducts";
import { ITopProducts } from "@/interface/products";
import CreateCategories from "../../components/categories/createCategories";
import { MdDelete, MdRebaseEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import DeleteCategories from "../../components/categories/DeleteCategories";
import EditCategories from "../../components/categories/EditCategories";


interface ICategoriesProps {
  params: {
    locale: string;
  };
}

const Categories = ({ params: { locale } }: ICategoriesProps) => {
  console.log("Categories component rendered");
  const [photoURLs, setPhotoURLs] = useState<{ [key: string]: string | undefined }>({});
const dispatch = useDispatch<AppDispatch>()
  const router = useRouter();
  const { inputValueSearchMenu } = useSelector((state: RootState) => state.app);
  const { isCreateCategorieOpen } = useSelector((state: RootState) => state.categories);
  const topProducts = useSelector(displayAllTopProducts);
  const categories = useSelector(displayAllCategories);
  const { userInfo } = useSelector((state: RootState) => state.users);

  const productFilterByCategory = topProducts.filter((product) => product.category === "men");


  useEffect(() => {
   
    const urls: { [key: string]: string | undefined } = {};
    categories.forEach((category) => {
      if (category.photo) {
        if (typeof category.photo === "string") {
          urls[category._id] = category.photo; 
        } else if (category.photo instanceof File) {
          urls[category._id] = URL.createObjectURL(category.photo); 
        }
      }
    });
    setPhotoURLs(urls);
    return () => {
      
      Object.values(urls).forEach((url) => url && URL.revokeObjectURL(url));
    };
  }, [categories]);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 uppercase py-4">
        Our Collections
      </h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-700">Top Products</h2>
      <div className="w-full mt-4">
        <Products items={productFilterByCategory} />
      </div>
      <h2 className="mt-4 text-3xl font-bold text-gray-700">Categories</h2>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {categories
          .filter(
            (category) =>
              (category.title || "")
                .toLowerCase()
                .includes(inputValueSearchMenu.toLowerCase()) ||
              (category.description || "")
                .toLowerCase()
                .includes(inputValueSearchMenu.toLowerCase())
          )
          .map((category) => (
            <div
              key={category._id}
              className="sm:w-72 w-full p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {userInfo.isAdmin && (
                <div className="flex items-center justify-end gap-3 mb-4">
                
                  <EditCategories categoryId={category._id} page="men"/>
               
                  <DeleteCategories categoryId={category._id}  page ="men"/>
                </div>
              )}
              <div
                onClick={() => {
                  router.push(`/${locale}/men/suits`);
                }}
                className="overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={photoURLs[category._id]}
                  className="w-full h-64 max-h-64 object-cover transition-transform duration-300 hover:scale-105"
                  alt={category.title}
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-bold text-xl text-gray-800">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
      </div>
      {isCreateCategorieOpen && (
        <div className="flex absolute z-50 top-0 w-full min-h-screen bg-gray-900 bg-opacity-50 justify-center items-center ">
          <CreateCategories page="men"/>
        </div>
      )}
    </div>
  );
};

export default Categories;
