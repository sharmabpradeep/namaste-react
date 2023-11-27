import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData?.info;

    return(
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200 hover:scale-125 transition-all duration-500 cursor-pointer'>
            <img
                className=" rounded-lg"
                alt= 'res-logo'
                src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};

//Higher Order Component
//Which will take the resturant card is an input and return the enhanced resturant card as output.
// Input -> Restaurant Card -> RestaurantCardPromoted

export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <ResturantCard {...props}/>
            </div>
        );
    };
};

export default ResturantCard;