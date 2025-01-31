const Pdp = ({ name, img }) => {  
    return (  
        <div className="p-2 rounded-lg flex flex-col gap-2">  
            <button>  
                <img src={img} alt={name} className="bg-slate-500  h-10 flex items-center justify-center w-[35px] rounded-full mr-[20px] " />  
            </button>  
        </div>  
    );  
};

export default Pdp