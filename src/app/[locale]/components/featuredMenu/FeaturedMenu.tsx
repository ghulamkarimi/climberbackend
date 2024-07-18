const FeaturedMenu = () => {
    return (
        <div className=" flex flex-col items-start gap-2  bg-slate-200 p-4 rounded-lg ">
            <p className="p-2 cursor-pointer hover:text-blue-500">- Price , low to hight</p>
            <p className="p-2 cursor-pointer hover:text-blue-500">- Price , hight to low</p>
            <p className="p-2 cursor-pointer hover:text-blue-500">- Best selling</p>
            <p className="p-2 cursor-pointer hover:text-blue-500">- Alphabetically,A-Z</p>
        </div>
    );
}

export default FeaturedMenu;