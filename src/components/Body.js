import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const[listOfResturants, setListOfResturants] = useState(resList);

    return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfResturants.filter(
                            (res) => res.data.avgRating > 4
                        );
                        setListOfResturants(filteredList);
                    }}
                > 
                    Top Rated Resturant
                </button>
            </div>
            <div className='res-container'>
                 {/* //Resturant Card */}
                {/* <ResturantCard
                    resName = 'Meghana Foods'
                    cuisine = 'Biryani, North Indian, Asian'
                    rating = '4.4 stars'
                    etd = '38 Minutes'
                />
                <ResturantCard
                    resName = 'KFC'
                    cuisine = 'Burger, Fast Food, Asian'
                    rating = '4.2 stars'
                    etd = '20 Minutes'
                /> */}
                {
                   listOfResturants.map((resturant) => (
                    <ResturantCard key={resturant.data.id} resData={resturant}/>)) 
                }
            </div>
        </div>
    )
};

export default Body;