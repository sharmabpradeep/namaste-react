import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
    return <div>
        {/* Accordian Header Section*/}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between">
            <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span>
            <span>^</span>
        </div>
            {/* Accordian Body Section*/}
            <ItemList items={data.itemCards}/>
        </div>
    </div>
}

export default ResturantCategory;