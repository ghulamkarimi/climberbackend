import { editCategoriesApi, setIsCreateCategorieOpen } from "@/feature/reducers/categoriesSlice";
import { AppDispatch } from "@/feature/store/store";
import { useFormik } from "formik";
import { MdRebaseEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

interface IEditCategoriesProps {
  page: "men" | "women";
  categoryId: string;
}

const EditCategories = ({ categoryId, page }: IEditCategoriesProps) => {
  const dispatch = useDispatch<AppDispatch>();





  const handleEdit = async () => {
    switch (page) {
      case "men":

      dispatch(setIsCreateCategorieOpen(true))

        try {
        
        
        } catch (error) {}
        break;
      case "women":
        break;
    }
  };
  return (
    <div className="p-2 bg-gray-200 rounded-full cursor-pointer transition-transform duration-200 hover:bg-gray-300 hover:scale-110">
      <MdRebaseEdit onClick={handleEdit} className="text-blue-600 text-xl" />
    </div>
  );
};

export default EditCategories;
