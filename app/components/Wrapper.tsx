import { ReactNode } from "react";

interface IWrapper {
     children:ReactNode
    className?:String
}

const Wrapper = ({children, className}:IWrapper) => {
    return (
        <div className={`mx-auto w-full max-w-screen-3xl px-2.5 md:px-10 lg:px-24 ${className}`}>
            {children}
        </div>
    );
}

export default Wrapper;