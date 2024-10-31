import Feature from "../feature/Feature";


const Priceoption = ({priceOption}) => {
    const {name,price,features}=priceOption
    return (
        <div className="bg-blue-400 rounded-lg p-4">
            <h2>
                <span className="text-7xl">{price}</span><span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-3xl pb-4">{name}</h4>
            {
                features.map((details,idx)=><Feature details={details} key={idx}></Feature>)
            }
            <button className="btn bg-green-400 w-full p-2 mt-5 text-white">Buy now</button>
        </div>
    );
};

export default Priceoption;