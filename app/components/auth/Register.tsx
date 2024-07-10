import { setIslogin } from "@/feature/reducers/appSlice";
import { RootState } from "@/feature/store/store";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
    const {isLogin} = useSelector((state:RootState)=>state.app)
    const dispatch = useDispatch()
  return (
    <div className="bg-BACKGROUNDREGISTER w-full min-h-screen flex justify-center items-center">
      <div className="rounded-lg bg-white p-4 flex flex-col gap-4 w-4/6">
        <div className=" w-full text-center font-bold text-2xl ">
          <h1> Register</h1>
        </div>
        <form className=" flex flex-col gap-4">
          <div className=" flex flex-col">
            <label className=" font-bold font-serif" htmlFor="firstName">
              {" "}
              FirstName
            </label>

            <input
              type="text"
              id="FirstName"
              className=" outline-none border-b-2 border-green-500"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" font-bold font-serif" htmlFor="LastName">
              {" "}
              LastName
            </label>

            <input
              type="text"
              id="LastName"
              className=" outline-none border-b-2 border-green-500"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" font-bold font-serif" htmlFor="email">
              {" "}
              Email
            </label>

            <input
              type="email"
              id="email"
              className=" outline-none border-b-2 border-green-500"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" font-bold font-serif" htmlFor="password">
              {" "}
              Password
            </label>

            <input
              type="password"
              id="password"
              className=" outline-none border-b-2 border-green-500"
            />
          </div>
          <div className=" flex flex-col">
            <label className=" font-bold font-serif" htmlFor="password">
              Confirm Password
            </label>

            <input
              type="password"
              id="password"
              className=" outline-none border-b-2 border-green-500"
            />
          </div>
          <div className=" w-full text-center pt-4">
            <div>
              <button
              onClick={()=>{
                dispatch(setIslogin(isLogin))
              }}
              className=" bg-green-400 hover:bg-green-300 cursor-pointer px-4 py-1 rounded-lg w-1/3">
                Register
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
               onClick={()=>{
                dispatch(setIslogin(!isLogin))
              }}
              className=" bg-red-600 hover:bg-red-400 cursor-pointer px-4 py-1 rounded-lg w-1/3">
                SigIn
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
