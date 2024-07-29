'use client';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoFilterSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/feature/store/store';
import { setInputValueSearchMenu, setIsFeaturedActive, setIsFilterToggleMenuActive } from '@/feature/reducers/appSlice';
import FilterToggleMenu from '../../../components/filterMenu/FilterToggleMenu';
import FeaturedMenu from '../../../components/featuredMenu/FeaturedMenu';
import SuitsSections, { ISuitsProps } from '../../../components/suitsSections/SuitsSections';


const Page = ({ params: { locale } }: ISuitsProps) => {
  const dispatch = useDispatch();
  const { isFilterToggleMenuActive } = useSelector(
    (state: RootState) => state.app
  );

  const { isFeaturedActive } = useSelector((state: RootState) => state.app);

  return (
    <div onClick={() => {}}>
      <div className="">
        <div className="md:grid md:grid-cols-12 p-2">
          <div className="hidden md:col-span-3"></div>
          <div className="md:hidden w-full flex justify-around items-center gap-4 mt-4">
            <button
              onClick={() => {
                dispatch(
                  setIsFilterToggleMenuActive(!isFilterToggleMenuActive)
                );
              }}
              className="flex items-center justify-between gap-2 w-1/2 px-3 py-1 bg-slate-300 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <p>
                  <IoFilterSharp />
                </p>
                <p>Filter</p>
              </div>
              <div>
                {isFilterToggleMenuActive ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowUp />
                )}
              </div>
            </button>
            <button
              className="flex items-center gap-2 w-1/2 px-3 py-1 bg-slate-300 justify-between rounded-lg"
              onClick={() => {
                dispatch(setIsFeaturedActive(!isFeaturedActive));
              }}
            >
              <div className="flex items-center gap-2">
                <p>Featured</p>
              </div>
              <div>
                {isFeaturedActive ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </div>
            </button>
          </div>
          <div className="md:col-span-9"></div>
        </div>
      </div>
      {isFilterToggleMenuActive && (
        <div className={`md:hidden opacity-100 p-4`}>
          <FilterToggleMenu />
        </div>
      )}

      {isFeaturedActive && (
        <div className={`md:hidden absolute z-50 right-0 mx-8 w-2/5`}>
          <FeaturedMenu />
        </div>
      )}
      <div
        onClick={() => {
          dispatch(setInputValueSearchMenu(''));
        }}
      >
        <SuitsSections params={{ locale }} />
      </div>
    </div>
  );
};

export default Page;
