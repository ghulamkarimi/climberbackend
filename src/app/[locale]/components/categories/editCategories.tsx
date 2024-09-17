import { MdRebaseEdit } from "react-icons/md";

interface IEditCategoriesProps {
  page: "men" | "women";
  categoryId: string;
}

const editCategories = ({ categoryId, page }: IEditCategoriesProps) => {



    const handleEdit = ()=>{
        
    }
  return (
    <div className="p-2 bg-gray-200 rounded-full cursor-pointer transition-transform duration-200 hover:bg-gray-300 hover:scale-110">
      <MdRebaseEdit className="text-blue-600 text-xl" />
    </div>
  );
};

export default editCategories;
