import { setIslogin } from "@/feature/reducers/appSlice";
import { userLoginApi } from "@/feature/reducers/userSlice";
import { AppDispatch } from "@/feature/store/store";
import { TUser } from "@/interface";
import { NotificationService } from "@/service/notificationService/NotificationService";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import * as Yup from "yup";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
 const router = useRouter()
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const formikSchema = Yup.object({
    email: Yup.string().matches(emailRegex, "inValid email").required(),
    password:Yup.string().min(6,"password should more then 6 character").required()
  });

  const formik = useFormik({
    initialValues:{
        email:"",
        password:""
    },
    validationSchema : formikSchema,
    onSubmit:async(values:TUser)=>{
try {
    const response = await dispatch(userLoginApi(values)).unwrap()
    NotificationService.success(response.message)
    localStorage.setItem("userId", response.userInfo._id);
    localStorage.setItem("exp",response.userInfo.exp)
    console.log("responseLogin ",response)
    setTimeout(() => {
        router.push("/")
    }, 3000);
} catch (error:any) {
    NotificationService.error(error.message)
}
    }
  })
  return (
    <div className=" w-full min-h-screen flex justify-center items-center relative">
        <div className="absolute opacity-80 inset-0 bg-cover bg-[url('/registerPhotoLogin.jpg')] bg-center lg:bg-black  w-full h-full filter bg-no-repeat backdrop-blur-md blur-sm"></div>
      <div className=" relative z-10 rounded-lg bg-white p-4 flex flex-col gap-4 w-4/6">
        <div className=" w-full text-center font-bold text-2xl ">
          <h1> SignIn</h1>
        </div>
        <form
        onSubmit={formik.handleSubmit}
        className=" flex flex-col gap-4">
          <div className=" flex flex-col">
            <label className=" font-bold font-serif" htmlFor="email">
              {" "}
              Email
            </label>

            <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              type="email"
              id="email"
              className=" outline-none border-b-2 border-green-500"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" font-bold font-serif" htmlFor="pass">
              {" "}
              Password
            </label>

            <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
              type="password"
              id="pass"
              className=" outline-none border-b-2 border-green-500"
            />
          </div>

          <div className=" w-full text-center pt-4">
            <div>
              <button
            type="submit"
                className=" bg-green-400 hover:bg-green-300 cursor-pointer px-4 py-1 rounded-lg w-1/3"
              >
                SigIn
              </button>
            </div>
            <div className=" flex w-full items-center gap-2 pt-4">
              <div className=" border-b-2 w-full border-blue-950"></div>
              <div>
                <p>Or</p>
              </div>
              <div className=" border-b-2 w-full border-blue-950"></div>
            </div>
          </div>
          <div className=" w-full text-center">
            <button
              onClick={() => {
                dispatch(setIslogin(false));
              }}
              type="button"
              className=" bg-red-600 hover:bg-red-400 cursor-pointer px-4 py-1 rounded-lg w-1/3"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
