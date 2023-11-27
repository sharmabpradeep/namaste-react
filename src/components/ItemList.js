import {CDN_URL} from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items);
    return(
        <div>
            {items?.map((item) => (
                <div key={item.card.info.id} 
                    className="p-2 m-2 border bottom border-b-2 text-left">
                    <div className="w-40 p-4" >
                        <img src={CDN_URL+ item.card.info.imageId}/>
                    </div>
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> ₹ - {item.card.info.price 
                            ? item.card.info.price / 100 
                            : item.card.info.defaultPrice / 100}
                         </span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
            ))}
        </div>
    );

};

export default ItemList;