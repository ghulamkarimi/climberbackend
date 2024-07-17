import Products from "../../components/productsCategories/Products";

const categories = () => {
    return (
        <div>
            <h1 className=" flex justify-center font-FONT_VIGA text-3xl font-bold mt-2 uppercase py-4">Our Collections</h1>
            <h2 className=" mt-4 font-FONT_ROBOTO font-bold text-3xl">Categories</h2>
            <Products />
        </div>
    );
}

export default categories;