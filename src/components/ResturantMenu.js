import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    //Cretating a custom Hook
    //we passed the resId because our custom hook function gonna
    // fetch a single resturant menu from all the restraunt menus.
    const resInfo = useRestrauntMenu(resId);

    // useEffect(()=>{
    //     fetchMenu(); 
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // }; 

    if(resInfo===null){
        return <Shimmer/>
    }

    const menuCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(menuCards)

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter( 
        (c) => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories);
    const {name, cuisines,costForTwo } = resInfo?.cards[0]?.card?.card?.info;
    

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
            {cuisines.join(",")}
            </p>
            {/*Here we need categories. Categories in a form of accordian*/}
           {categories?.map((category) =>
            <ResturantCategory data={category?.card?.card}/>
           )}
        </div>
    ); 
};

export default ResturantMenu;