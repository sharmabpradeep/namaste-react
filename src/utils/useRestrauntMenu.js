import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestrauntMenu = (resId) => {

    const[resInfo, setResInfo] = useState(null);
    //Fetch data from api to list the menu
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data)
    }
    
    //ResInfo is a local state variable of this function which is gonna
    //be used as va;ue return by the function.
    return resInfo;
};

export default useRestrauntMenu;