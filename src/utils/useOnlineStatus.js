import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    const[OnLineStatus, setOnLineStatus] = useState(true);

    //check if the status of network is true
    //If it is true then we will return the cards and if it is not true then we
    // we will return a message.
    useEffect((() => {

        window.addEventListener('offline', () => {
            setOnLineStatus(false);
        })

        window.addEventListener('online', () => {
            setOnLineStatus(true);
        })
    }), [])


    return OnLineStatus;

}

export default useOnlineStatus;