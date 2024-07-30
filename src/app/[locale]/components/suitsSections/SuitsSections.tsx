'use client';

import { useRouter } from "next/navigation";
import Image from 'next/image';

export interface ISuitsProps {
  params: {
    locale: string;
  };
}



export const suits = [
  {
    id: "1",
    bild: "/anzug/anzugSection/bildOne.jpg",
    bildDetailsOne: "/anzug/anzugSection/bildOne.jpg",
    bildDetailsTwo: "/anzug/anzugSection/bildOne.jpg",
    bildDetailsThree: "/anzug/anzugSection/bildOne.jpg",
    bildDetailsFour: "/anzug/anzugSection/bildOne.jpg",
    title: "Havana Perennial Anzug navy Tailor",
    price: "370$",
    evaluation:2,
    sizes:["S","M","L","XL","XXL"],
    colors: [  "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33A1",
    "#33FFF7",],
    descriptions:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex quo numquam optio in qui natus dolorum minima itaque? Quia fugit modi reiciendis, cupiditate eius vitae doloremque quaerat architecto ratione. Praesentium sapiente deserunt vel maiores dicta molestias a natus, unde obcaecati molestiae aspernatur error reprehenderit consequuntur tempora. Dolorem, nihil placeat!"
  },
  {
    id: "2",
    bild: "/anzug/anzugSection/bildTwo.jpg",
    bildDetailsOne: "/anzug/anzugSection/bildTwo.jpg",
    bildDetailsTwo: "/anzug/anzugSection/bildTwo.jpg",
    bildDetailsThree: "/anzug/anzugSection/bildTwo.jpg",
    bildDetailsFour: "/anzug/anzugSection/bildTwo.jpg",
    title: "Havana Anzug grau",
    price: "400$",
    evaluation:1,
    sizes:["S","M","L","XL","XXL"],
    colors: [  "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33A1",
    "#33FFF7",],
    descriptions:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex quo numquam optio in qui natus dolorum minima itaque? Quia fugit modi reiciendis, cupiditate eius vitae doloremque quaerat architecto ratione. Praesentium sapiente deserunt vel maiores dicta molestias a natus, unde obcaecati molestiae aspernatur error reprehenderit consequuntur tempora. Dolorem, nihil placeat!"
  },
  {
    id: "3",
    bild: "/anzug/anzugSection/bildThree.jpg",
    bildDetailsOne: "/anzug/anzugSection/bildThree.jpg",
    bildDetailsTwo: "/anzug/anzugSection/bildThree.jpg",
    bildDetailsThree: "/anzug/anzugSection/bildThree.jpg",
    bildDetailsFour: "/anzug/anzugSection/bildThree.jpg",
    title: "Havana Perennial Anzug blue Tailor",
    price: "450$",
    evaluation:0,
    sizes:["S","M","L","XL","XXL"],
    colors: [  "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33A1",
    "#33FFF7",],
    descriptions:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex quo numquam optio in qui natus dolorum minima itaque? Quia fugit modi reiciendis, cupiditate eius vitae doloremque quaerat architecto ratione. Praesentium sapiente deserunt vel maiores dicta molestias a natus, unde obcaecati molestiae aspernatur error reprehenderit consequuntur tempora. Dolorem, nihil placeat!"
  },
  {
    id: "4",
    bild: "/anzug/anzugSection/bildFour.jpg",
    bildDetailsOne: "/anzug/anzugSection/bildFour.jpg",
    bildDetailsTwo: "/anzug/anzugSection/bildFour.jpg",
    bildDetailsThree: "/anzug/anzugSection/bildFour.jpg",
    bildDetailsFour: "/anzug/anzugSection/bildFour.jpg",
    title: "Havana Anzug black",
    price: "500$",
    evaluation:3,
    sizes:["S","M","L","XL","XXL"],
    colors: [  "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33A1",
    "#33FFF7",],
    descriptions:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex quo numquam optio in qui natus dolorum minima itaque? Quia fugit modi reiciendis, cupiditate eius vitae doloremque quaerat architecto ratione. Praesentium sapiente deserunt vel maiores dicta molestias a natus, unde obcaecati molestiae aspernatur error reprehenderit consequuntur tempora. Dolorem, nihil placeat!"
  },
  {
    id: "5",
    bild: "/anzug/anzugSection/bildFive.jpg",
    bildDetailsOne: "/anzug/anzugSection/bildFive.jpg",
    bildDetailsTwo: "/anzug/anzugSection/bildFive.jpg",
    bildDetailsThree: "/anzug/anzugSection/bildFive.jpg",
    bildDetailsFour: "/anzug/anzugSection/bildFive.jpg",
    title: "Havana Perennial Anzug beige Tailor",
    price: "370$",
    evaluation:0,
    sizes:["S","M","L","XL","XXL"],
    colors: [  "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33A1",
    "#33FFF7",],
    descriptions:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex quo numquam optio in qui natus dolorum minima itaque? Quia fugit modi reiciendis, cupiditate eius vitae doloremque quaerat architecto ratione. Praesentium sapiente deserunt vel maiores dicta molestias a natus, unde obcaecati molestiae aspernatur error reprehenderit consequuntur tempora. Dolorem, nihil placeat!"
  },
  {
    id: "6",
    bild: "/anzug/anzugSection/bildSix.jpg",
    bildDetailsOne: "/anzug/anzugSection/bildSix.jpg",
    bildDetailsTwo: "/anzug/anzugSection/bildSix.jpg",
    bildDetailsThree: "/anzug/anzugSection/bildSix.jpg",
    bildDetailsFour: "/anzug/anzugSection/bildSix.jpg",
    title: "Havana Anzug braun",
    price: "420$",
    evaluation:1.5,
    sizes:["S","M","L","XL","XXL"],
    colors: [  "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33A1",
    "#33FFF7",],
    descriptions:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex quo numquam optio in qui natus dolorum minima itaque? Quia fugit modi reiciendis, cupiditate eius vitae doloremque quaerat architecto ratione. Praesentium sapiente deserunt vel maiores dicta molestias a natus, unde obcaecati molestiae aspernatur error reprehenderit consequuntur tempora. Dolorem, nihil placeat!"
  },
  {
    id: "7",
    bild: "/anzug/anzugSection/bildSeven.jpg",
    bildDetailsOne: "/anzug/anzugSection/bildSeven.jpg",
    bildDetailsTwo: "/anzug/anzugSection/bildSeven.jpg",
    bildDetailsThree: "/anzug/anzugSection/bildSeven.jpg",
    bildDetailsFour: "/anzug/anzugSection/bildSeven.jpg",
    title: "Havana Perennial Anzug green Tailor",
    price: "470$",
    evaluation:0,
    sizes:["S","M","L","XL","XXL"],
    colors: [  "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33A1",
    "#33FFF7",],
    descriptions:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex quo numquam optio in qui natus dolorum minima itaque? Quia fugit modi reiciendis, cupiditate eius vitae doloremque quaerat architecto ratione. Praesentium sapiente deserunt vel maiores dicta molestias a natus, unde obcaecati molestiae aspernatur error reprehenderit consequuntur tempora. Dolorem, nihil placeat!"
  },
  {
    id: "8",
    bild: "/anzug/anzugSection/bildEight.jpg",
    bildDetailsOne: "/anzug/anzugSection/bildEight.jpg",
    bildDetailsTwo: "/anzug/anzugSection/bildEight.jpg",
    bildDetailsThree: "/anzug/anzugSection/bildEight.jpg",
    bildDetailsFour: "/anzug/anzugSection/bildEight.jpg",
    title: "Havana Anzug white",
    price: "390$",
    evaluation:0,
    sizes:["S","M","L","XL","XXL"],
    colors: [  "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33A1",
    "#33FFF7",],
    descriptions:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex quo numquam optio in qui natus dolorum minima itaque? Quia fugit modi reiciendis, cupiditate eius vitae doloremque quaerat architecto ratione. Praesentium sapiente deserunt vel maiores dicta molestias a natus, unde obcaecati molestiae aspernatur error reprehenderit consequuntur tempora. Dolorem, nihil placeat!"
  }
];

export const getSuitsById = (id: any) => {
  return suits.find((suit) => suit.id === id);
};

const SuitsSections = ({ params: { locale } }: ISuitsProps) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {suits.map((suit) => (
        <div
          onClick={() => {
            router.push(`/${locale}/men/suits/${suit.id}`);
          }}
          key={suit.id}
          className="relative bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="relative overflow-hidden group cursor-pointer" style={{ aspectRatio: '3/4' }}>
            <Image
              src={suit.bild}
              alt={suit.title}
             width={1000}
             height={600}
        
              className="transition duration-300 ease-in-out transform group-hover:scale-105"
              style={{ objectFit: 'cover',width: "auto" , height: "auto" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">Quick View</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:underline">{suit.title}</h3>
            <p className="text-gray-500">{suit.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuitsSections;