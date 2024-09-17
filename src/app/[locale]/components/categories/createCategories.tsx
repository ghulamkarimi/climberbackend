'use client';

import { createCategoriesApi, setIsCreateCategorieOpen } from "@/feature/reducers/categoriesSlice";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ICategories } from "@/interface/categories";
import { AppDispatch, RootState } from "@/feature/store/store";
import { NotificationService } from "@/service/notificationService/NotificationService";
import { setIsSpinnerActive } from "@/feature/reducers/appSlice";
import { useRef, useState } from "react";
import Spinner from "../Spinner";

interface CreateCategoriesProps {
  page: "home" | "men";
}

const CreateCategories = ({ page }: CreateCategoriesProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = localStorage.getItem("userId");
  const { isSpinnerActive } = useSelector((state: RootState) => state.app);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const formikSchema = Yup.object({
    categories: Yup.string().required("Category is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const inputRef = useRef<HTMLInputElement | null>(null);

  const loadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const image = e.target.files[0];
      setFile(image);
      setPreview(URL.createObjectURL(image));
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const formik = useFormik({
    initialValues: {
      _id: userId!,
      categories: "men",
      title: "",
      description: ""
    },
    validationSchema: formikSchema,
    onSubmit: async (values: Omit<ICategories, 'photo'>) => {
      console.log("Submitting data:", values);
      if (!file) {
        NotificationService.error("Photo is required");
        return;
      }
      const data = {
        _id: userId!,
        title: values.title,
        description: values.description,
        photo: file,
        categories: values.categories
      };
   switch(page){
    case "men":
      try {
        const response = await dispatch(createCategoriesApi(data)).unwrap();
        dispatch(setIsSpinnerActive(true)); 

        NotificationService.success(response.message);
        dispatch(setIsCreateCategorieOpen(false));
        setTimeout(() => {
          dispatch(setIsSpinnerActive(false));
          values.title = "";
          values.description = "";
          values.categories = "men"; 
          setFile(null);
          setPreview(""); 
        }, 3000);
      } catch (error: any) {
        dispatch(setIsSpinnerActive(false));
        console.error("Submission error:", error);
        NotificationService.error(error.message);
      }
      break;
      case "home":
        // code 
        break;
    }
  }
  });

  return (
    <div className="relative md:w-2/3 w-full mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-800">Create Category</h1>
        <IoClose
          onClick={() => dispatch(setIsCreateCategorieOpen(false))}
          className="text-gray-600 hover:text-gray-900 cursor-pointer text-2xl"
        />
      </div>
      <div className="border-t-2 border-gray-300 mt-3 mb-4" />
      <form onSubmit={formik.handleSubmit}>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 uppercase">* Select a Category</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="categories"
              id="men"
              value="men"
              checked={formik.values.categories === "men"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-radio text-blue-600 h-5 w-5"
            />
            <label htmlFor="men" className="ml-3 text-gray-700 cursor-pointer hover:text-blue-600">
              Men
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="categories"
              id="women"
              value="women"
              checked={formik.values.categories === "women"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-radio text-pink-600 h-5 w-5"
            />
            <label htmlFor="women" className="ml-3 text-gray-700 cursor-pointer hover:text-pink-600">
              Women
            </label>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-800 uppercase mb-2" htmlFor="title">* Title</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the title"
            type="text"
            name="title"
            id="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.title && formik.touched.title && (
            <div className="text-red-500 text-sm">{formik.errors.title}</div>
          )}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-800 uppercase mb-2" htmlFor="photo">* Photo</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="file"
            id="photo"
            name="photo"
            ref={inputRef}
            onChange={loadImage}
            onBlur={formik.handleBlur}
          />
          {preview && <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}
        </div>

        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-800 uppercase mb-2" htmlFor="description">* Description</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the description"
            id="description"
            name="description"
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.description && formik.touched.description && (
            <div className="text-red-500 text-sm">{formik.errors.description}</div>
          )}
        </div>
        <div className="flex items-center justify-around mt-6">
          <button
            type="submit"
            className="px-6 py-2 border-2 border-green-600 bg-green-600 text-white rounded-3xl uppercase hover:bg-green-400 font-semibold cursor-pointer"
          >
            Create
          </button>
          <button
            type="button" 
            onClick={() => dispatch(setIsCreateCategorieOpen(false))}
            className="px-6 py-2 border-2 border-red-600 bg-red-600 text-white rounded-3xl uppercase hover:bg-red-400 font-semibold cursor-pointer"
          >
            Cancel
          </button>
        </div>
        {isSpinnerActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <Spinner />
            <p className="text-white mt-4">In progress ...</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateCategories;
