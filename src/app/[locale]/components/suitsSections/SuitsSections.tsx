'use client'

import Image from 'next/image';

const SuitsSections = () => {
  const suits = [
    {
      id: "1",
      bild: "/anzug/anzugSection/bildOne.jpg",
      title: "Havana Perennial Anzug navy Tailor",
      price: "370$"
    },
    {
      id: "2",
      bild: "/anzug/anzugSection/bildTwo.jpg",
      title: "Havana Anzug grau",
      price: "400$"
    },
    {
      id: "3",
      bild: "/anzug/anzugSection/bildThree.jpg",
      title: "Havana Perennial Anzug blau Tailor",
      price: "450$"
    },
    {
      id: "4",
      bild: "/anzug/anzugSection/bildFour.jpg",
      title: "Havana Anzug schwarz",
      price: "500$"
    },
    {
      id: "5",
      bild: "/anzug/anzugSection/bildFive.jpg",
      title: "Havana Perennial Anzug beige Tailor",
      price: "370$"
    },
    {
      id: "6",
      bild: "/anzug/anzugSection/bildSix.jpg",
      title: "Havana Anzug braun",
      price: "420$"
    },
    {
      id: "7",
      bild: "/anzug/anzugSection/bildSeven.jpg",
      title: "Havana Perennial Anzug grün Tailor",
      price: "470$"
    },
    {
      id: "8",
      bild: "/anzug/anzugSection/bildEight.jpg",
      title: "Havana Anzug weiß",
      price: "390$"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {suits.map(suit => (
        <div key={suit.id} className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative overflow-hidden group">
            <Image
              src={suit.bild}
              alt={suit.title}
              layout="responsive"
              width={300}
              height={400}
              className="transition duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 ease-in-out flex items-center justify-center">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">Quick View</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{suit.title}</h3>
            <p className="text-gray-500">{suit.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuitsSections;
