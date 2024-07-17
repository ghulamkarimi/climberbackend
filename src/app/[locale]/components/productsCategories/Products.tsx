interface IProducts {
  id: string;
  art: string;
  categories: string;
  title: string;
  price: string;
  size: string;
  bewertung: string;
  bild: string;
}

const products: IProducts[] = [
  {
    id: "1",
    art: "herren",
    categories: "anzug",
    title: "Anzug blau und cravat",
    price: "360 eu",
    size: "48",
    bewertung: "4,1",
    bild: "https://th.bing.com/th?id=OIP.bw_TDKr4o3-tRkN2AiX--AHaKT&w=211&h=294&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
  },
  {
    id: "2",
    art: "herren",
    categories: "T-shirts",
    title: "anzug",
    price: "360 eu",
    size: "42",
    bewertung: "4,9",
    bild: "https://th.bing.com/th/id/OIP.Pep5HLS3f1jlTXIXwT9V2wHaIm?w=189&h=220&c=7&r=0&o=5&dpr=1.4&pid=1.7",
  },
  {
    id: "3",
    art: "herren",
    categories: "anzug",
    title: "Anzug",
    price: "360 eu",
    size: "52",
    bewertung: "4,1",
    bild: "https://th.bing.com/th?id=OIP.mR90_O8Pg8XuAmZYL7zr6AHaJx&w=217&h=287&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
  },
  {
    id: "4",
    art: "herren",
    categories: "",
    title: "Anzug",
    price: "360 eu",
    size: "52",
    bewertung: "4,8",
    bild: "https://th.bing.com/th?id=OIP.-2s5casUHJsTvKnj_M9BTQAAAA&w=241&h=241&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
  },
];

const Products = () => {
  return (
    <div className="bg-stone-300 py-6 px-4 mt-4 ">
      <div className="flex justify-between items-center w-full ">
        {products.map((product: IProducts) => (
          <div key={product.id}>
            <div className="overflow-hidden rounded-lg">
            <img src={product.bild} className="h-72 w-60 hover:scale-105 duration-300 hover:brightness-50 rounded-lg"></img>
            </div>
          <div className=" flex justify-between px-2 items-center gap-3">
          <p className="text-lg">{product.title}</p>
          <p className="text-xs">{product.bewertung}</p>
          </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
