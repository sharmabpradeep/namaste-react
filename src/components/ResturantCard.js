import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData?.data;
    console.log(resData);
    return(
        <div className='res-card'>
            <img
                className='res-logo'
                alt= 'res-logo'
                src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};

export default ResturantCard;