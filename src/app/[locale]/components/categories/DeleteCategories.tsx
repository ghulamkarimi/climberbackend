import { setIsSpinnerActive } from "@/feature/reducers/appSlice";
import {
  deleteCategoriesApi,
  displayAllCategories,
  displayCategory,
} from "@/feature/reducers/categoriesSlice";
import { AppDispatch, RootState } from "@/feature/store/store";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NotificationService } from "@/service/notificationService/NotificationService";
import Spinner from "../Spinner";

interface IDeleteCategories {
  page: "men" | "home";
  categoryId: string;
}

const DeleteCategories = ({ categoryId,page }: IDeleteCategories) => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = localStorage.getItem("userId");


  
  const { isSpinnerActive } = useSelector((state: RootState) => state.app);
 const handleDelete = async () => {


  if (!categoryId) {
    NotificationService.error("No category found to delete.");
    return;
  }

  try {
    dispatch(setIsSpinnerActive(true));

    switch (page) {
      case "men":
        try {
          
          const response = await dispatch(deleteCategoriesApi({ userId: userId!, _id:categoryId })).unwrap();
          console.log("response", response.message);
         
          NotificationService.success("Men category deleted successfully");
        } catch (error: any) {
          console.log("Error in handleDelete:", error.message);
          NotificationService.error(error.message);
        }
        break;
      case "home":
        // code for "home" page
        break;
    }
  } catch (error: any) {
    NotificationService.error(error.message || "Failed to delete category");
  } finally {
    dispatch(setIsSpinnerActive(false));
  }
};



  return (
    <div>
      <div
        className="p-2 bg-gray-200 rounded-full cursor-pointer transition-transform duration-200 hover:bg-gray-300 hover:scale-110"
        onClick={() => handleDelete()}
      >
        <MdDelete className="text-red-600 text-xl" />
      </div>
      {isSpinnerActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <Spinner />
          <p className="text-white mt-4">In progress ...</p>
        </div>
      )}
    </div>
  );
};

export default DeleteCategories;