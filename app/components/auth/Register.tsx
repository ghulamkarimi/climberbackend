import { setIslogin } from "@/feature/reducers/appSlice";
import { AppDispatch, RootState } from "@/feature/store/store";
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { userRegisterApi } from "@/feature/reducers/userSlice";
import { NotificationService } from "@/service/notificationService/Notification";


const Register = () => {
    const { isLogin } = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch<AppDispatch>();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const formikSchema= Yup.object({
        firstName:Yup.string().min(3,"first name should be 3 charachter").max(30, "first name should not more then 30 charachter"),
        lastName:Yup.string().min(3,"last name should be 3 charachter").max(30, "last name should not more then 30 charachter"),
        email:Yup.string().matches(emailRegex,"invalid E-Mail format").required("E-mail is required"),
        password:Yup.string().min(6,"password shold more then 6 charachter"),
        confirmPassword:Yup.string().min(6,"password shold more then 6 charachter"),

    })
    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        },
        validationSchema:formikSchema,
        onSubmit:async (values)=>{
          try {
            const response = await dispatch(userRegisterApi(values)).unwrap()
            NotificationService.success(response.message)
          } catch (error:any) {
            NotificationService.error(error.message)
          }
        }
    })

 

    const handleSignIn = () => {
        dispatch(setIslogin(true));
        console.log("isLogin", isLogin);
    };

    return (
        <div className="relative w-full min-h-screen">
         
            <div className="absolute inset-0 bg-cover bg-[url('/registerBild.jpg')] bg-center lg:bg-black  w-full h-full filter bg-no-repeat backdrop-blur-md blur-sm"></div>
           
         
           
            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="rounded-lg bg-white p-4 flex flex-col gap-4 w-4/6 shadow-lg">
                    <div className="w-full text-center font-bold text-2xl">
                        <h1>Register</h1>
                    </div>
                    <form 
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col gap-4
                    ">
                        <div className="flex flex-col">
                            <label className="font-bold font-serif" htmlFor="firstName">
                                FirstName
                            </label>
                            <input
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                id="firstName"
                                className="outline-none border-b-2 border-green-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold font-serif" htmlFor="lastName">
                                LastName
                            </label>
                            <input
                             name="lastName"
                             value={formik.values.lastName}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                                type="text"
                                id="lastName"
                                className="outline-none border-b-2 border-green-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold font-serif" htmlFor="emailOne">
                                Email
                            </label>
                            <input
                             name="email"
                             value={formik.values.email}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                                type="email"
                                id="emailOne"
                                className="outline-none border-b-2 border-green-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold font-serif" htmlFor="pass">
                                Password
                            </label>
                            <input
                             name=" password"
                             value={formik.values.password}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                                type="password"
                                id="pass"
                                className="outline-none border-b-2 border-green-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold font-serif" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                             name="confirmPassword"
                             value={formik.values.confirmPassword}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                                type="password"
                                id="confirmPassword"
                                className="outline-none border-b-2 border-green-500"
                            />
                        </div>
                        <div className="w-full text-center pt-4">
                            <div>
                                <button
                                type="submit"
                                    onClick={()=>{
                                        dispatch(setIslogin(true))
                                        
                                    }}
                                    className="bg-green-400 hover:bg-green-300 cursor-pointer px-4 py-1 rounded-lg w-1/3"
                                >
                                    Register
                                </button>
                            </div>
                            <div className="flex w-full items-center gap-2 pt-4">
                                <div className="border-b-2 w-full border-blue-950"></div>
                                <div>
                                    <p>Or</p>
                                </div>
                                <div className="border-b-2 w-full border-blue-950"></div>
                            </div>
                        </div>
                        <div className="w-full text-center">
                            <button
                                type="button"
                                onClick={handleSignIn}
                                className="bg-red-600 hover:bg-red-400 cursor-pointer px-4 py-1 rounded-lg w-1/3"
                            >
                                SignIn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
