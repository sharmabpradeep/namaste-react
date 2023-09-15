import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const[listOfResturants, setListOfResturants] = useState([]);
    //A copy of list of resturant is created in filteredResturant
    //Why it is necessary? Because we are filtering our existing array 
    //with some conditions then it would be not a best practice to hamper the
    //actual data which is coming from the API. In place of that create a copy of data and
    //perform the needful actions. 
    const[filteredResturant, setFilteredResturant] = useState([]);

    const[searchText, setSearchText] = useState("");
//Whenever a state variable gets update reacts triggers a reconciliation cycle(re-renders the component).
    console.log(searchText);

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

//Conditional rendering
 

    return listOfResturants.length===0 ? <Shimmer/> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    placeholder="Search Resturant" 
                    value={searchText}
                    onChange={(event) => {
                        setSearchText(event.target.value);
                    }}
                    />
                    <button onClick={() => {
                        //Filter the restaurant cards and update the UI
                        //searchText
                        const searchList =listOfResturants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText)
                        );

                        setFilteredResturant(searchList);

                    }}>Search</button>
                </div>
                <button className="filter-btn"
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
                   filteredResturant.map((resturant) => (
                    <ResturantCard key={resturant.info.id} resData={resturant}/>)) 
                }
            </div>
        </div>
    )
};

export default Body;