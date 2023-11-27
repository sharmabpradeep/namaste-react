import ResturantCard, {withPromotedLabel} from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const[listOfResturants, setListOfResturants] = useState([]);
    console.log("Body Rendered", listOfResturants)
    //A copy of list of resturant is created in filteredResturant
    //Why it is necessary? Because we are filtering our existing array 
    //with some conditions then it would be not a best practice to hamper the
    //actual data which is coming from the API. In place of that create a copy of data and
    //perform the needful actions.  
    const[filteredResturant, setFilteredResturant] = useState([]);

    const[searchText, setSearchText] = useState("");
//Whenever a state variable gets update reacts triggers a reconciliation cycle(re-renders the component).
    console.log(searchText);

    const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

    useEffect( () => {
        console.log("UseEffect callback function")
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=23.1886311&lng=77.41640629999999');
        const json = await data.json();
        console.log(json);
        setListOfResturants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResturant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    };

    const onLineStatus = useOnlineStatus();

    if(onLineStatus === false) 
        return <h1>Check your internet connection! Looks like you are offline</h1>

//Conditional rendering
 

    return listOfResturants.length===0 ? <Shimmer/> : (
        <div className='body'>
            <div className='filter'>
                <div className="search m-4 p-4">
                    <input 
                    type="text" 
                    className="border border-solid border-black" 
                    placeholder="Search Resturant" 
                    value={searchText}
                    onChange={(event) => {
                        setSearchText(event.target.value);
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                    onClick={() => {
                        //Filter the restaurant cards and update the UI
                        //searchText
                        const searchList =listOfResturants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText)
                        );

                        setFilteredResturant(searchList);

                    }}>Search</button>
                </div>
                <div className="search m-4 p-4">
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfResturants.filter(
                                (res) => res.data.avgRating > 4
                            );
                            setFilteredResturant(filteredList);
                        }}
                    > 
                        Top Rated Resturant
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
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
                   filteredResturant.map((resturant) => (
                    <Link 
                    key={resturant.info.id}  
                    to={"/restaurants/" + resturant.info.id}
                    >
                    {/* If the restaurant is promoted then add a promoted label 
                    to it.*/
                    resturant.info.promoted ? 
                    (<RestaurantCardPromoted resData={resturant}/>)
                    : (<ResturantCard resData={resturant}/>
                     )}
                    </Link>
                    )) 
                }
            </div>
        </div>
    )
};

export default Body;