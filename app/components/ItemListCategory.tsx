import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { ItemCategory, ItemGroup, ItemGroupEntry } from "~/routes/ItemLists";
import ItemListGroup from "./ItemListGroup";
import ItemListItemEntry from "./ItemListItemEntry";


interface ItemListCategoryProps{
    category : ItemCategory;
    onClickSearchAll: (group : ItemGroup) => void;
    onClickIndividual: (item : ItemGroupEntry, group : ItemGroup ) => void;
}

const ItemListCategory = (props : ItemListCategoryProps)  => {

    const [bExpanded, setExpanded] = useState(false);

    function OnExpandClicked(){
        setExpanded(!bExpanded);
    }
    return (<>
    <div className="shadow-sp border-x-2 border-y-0 border border-tertiary rounded-t-md m-1">
    <div className="flex flex-row">
        <button className={"flex h-6 w-full bg-secondary items-center content-center hover:bg-secondaryHL transition-all hover:transition-all rounded-t-md"} onClick={OnExpandClicked}> 
            {bExpanded ? (<ChevronDownIcon className="h-full py-1 pl-2"></ChevronDownIcon>) : (<ChevronRightIcon className="h-full py-1 pl-2"></ChevronRightIcon>) }  
            <p className="px-2 font-bold text-md text-gray-300">{props.category.Name}</p>
        </button>
    </div>
    <div className="bg-secondary shadow-sp ">
        <>
        {bExpanded ? 
        (
            <>
            <div className="">
                {props.category.Groups.map(group=>
                    <ItemListGroup key={group.Name} onClickIndividual={props.onClickIndividual} onClickSearchAll={props.onClickSearchAll} itemGroup={group} ></ItemListGroup>
                )}
            </div>
            </>
        ) : 
        (<></>)}
        </>
    </div>
    </div>
        

    </>)
}

export default ItemListCategory;