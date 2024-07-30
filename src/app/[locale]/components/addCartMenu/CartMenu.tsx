'use client'
import { setIsAddCartMenuActive } from "@/feature/reducers/appSlice";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

const CartMenu = () => {
  const dispatch = useDispatch();

  const title = localStorage.getItem("title");
  const price = parseFloat(localStorage.getItem("price") || "0");
  const bild = localStorage.getItem("bild");
  const colors = localStorage.getItem("colors");
  const size = localStorage.getItem("size");
  console.log("title", title);
  console.log("price", typeof(price));
  console.log("bild", bild);
  console.log("colors", colors);
  console.log("size", size);

  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(price);

  useEffect(() => {
    setTotalPrice(price * quantity); 
  }, [price, quantity]);
  
  const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
  const decreaseQuantity = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  console.log("totalPrice",totalPrice)

  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-between font-light p-4 text-xl uppercase">
        <h1>Cart</h1>
        <IoClose
          onClick={() => {
            dispatch(setIsAddCartMenuActive(false));
          }}
          className="font-bold text-2xl cursor-pointer"
        />
      </div>
      <div className="border-2 mt-4 px-2" />
      <div>
        <div className="px-4 mt-4 flex items-center justify-around gap-3">
          <div>
            <img className="w-12 h-16 rounded-lg" src={bild || ""} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">{title}</p>
            <p>
              <span className="font-bold text-sm">Size:</span>{" "}
              <span className="text-red-500">{size}</span>
            </p>
            <div className="border-2 border-black w-fit flex items-center justify-around gap-3">
              <span
                onClick={decreaseQuantity}
                className="border-r-2 px-3 hover:bg-slate-800 text-white cursor-pointer"
              >
                -
              </span>
              <span className="text-black">{quantity}</span>
              <span
                onClick={increaseQuantity}
                className="px-3 border-l-2 hover:bg-slate-800 text-white cursor-pointer"
              >
                +
              </span>
            </div>
          </div>
          <div>{totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
