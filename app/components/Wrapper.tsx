interface IWrapper {
    div:React.HTMLProps<HTMLDivElement>
}

const Wrapper = ({div}:IWrapper) => {
    return (
        <div className="p-2" {...div} >
            {div.children}
        </div>
    );
}

export default Wrapper;