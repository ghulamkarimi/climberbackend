import { setIslogin } from "@/feature/reducers/appSlice";
import { RootState } from "@/feature/store/store";

import { useDispatch, useSelector } from "react-redux";

const Register = () => {
    const { isLogin } = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch();

    const handleRegister = () => {
        dispatch(setIslogin(false));
    };

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
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="font-bold font-serif" htmlFor="firstName">
                                FirstName
                            </label>
                            <input
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
                                type="password"
                                id="confirmPassword"
                                className="outline-none border-b-2 border-green-500"
                            />
                        </div>
                        <div className="w-full text-center pt-4">
                            <div>
                                <button
                                    onClick={handleRegister}
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
