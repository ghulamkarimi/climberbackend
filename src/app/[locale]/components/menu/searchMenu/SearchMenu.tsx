'use client'
import { setInputValueSearchMenu, setIsSearchMenuActive } from '@/feature/reducers/appSlice';
import { RootState } from '@/feature/store/store';
import { ReactEventHandler } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const SearchMenu = () => {

    const {inputValueSearchMenu} = useSelector((state:RootState)=>state.app)
const dispatch = useDispatch()





    return (
        <div
       
        className="w-full flex justify-center mt-4">
            <div className="w-full h-fit relative ">
                <input
                id='search'
                    className=" py-3 px-10 w-full text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent relative font-semibold"
                    type="text"
                    placeholder="Search..."
                    value={inputValueSearchMenu}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        dispatch(setInputValueSearchMenu(e.target.value))
                    }}
                  
                />
                <label id='search' className=' absolute left-0 top-4 px-4' >
                    <FaSearch className="h-5 w-5 text-blue-400 cursor-pointer" />
                </label>
                
                    <button
                    onClick={()=>{
                        dispatch(setIsSearchMenuActive(false))
                    }}
                        className=' absolute right-0 top-4 px-4'
                       
                    >
                        <FaTimes className="h-5 w-5 text-red-400 hover:text-red-300" />
                    </button>
             
            </div>
        </div>
    );
}

export default SearchMenu;
