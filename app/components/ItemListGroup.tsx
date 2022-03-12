import ChevronDownIcon from "@heroicons/react/outline/ChevronDownIcon";
import ChevronRightIcon from "@heroicons/react/outline/ChevronRightIcon";
import { useState } from "react";
import { ItemGroup, ItemGroupEntry } from "~/routes/ItemLists";
import ItemListItemEntry from "./ItemListItemEntry";


export interface ItemListGroupProps{
    itemGroup : ItemGroup;
    onClickSearchAll: (group : ItemGroup) => void;
    onClickIndividual: (item : ItemGroupEntry, group : ItemGroup ) => void;
}

const ItemListGroup = (props : ItemListGroupProps)  => {

    const [bExpanded, setExpanded] = useState(false);

    function clickSearchAllCallback(){
        props.onClickSearchAll(props.itemGroup)
    }

    function OnExpandClicked(){
        setExpanded(!bExpanded);
    }
    return (<>


    <div className="flex flex-row">
        <button className="flex pl-4 h-8 py-1 w-full bg-secondary items-center content-center hover:bg-secondaryHL transition-all hover:transition-all outline outline-primary outline-1" onClick={OnExpandClicked}> 
            {bExpanded ? (<ChevronDownIcon className="h-full py-1 pl-2"></ChevronDownIcon>) : (<ChevronRightIcon className="h-full py-1 pl-2"></ChevronRightIcon>) }  
            <div className="flex h-full w-auto px-2">
                <img src={props.itemGroup.Icon} className="rounded-md"></img>
            </div>
            <p className="font-bold text-md text-gray-300">{props.itemGroup.Name}</p>
        </button>
    </div>
    <div className="flex flex-column">
        <>
        {bExpanded ? 
        (
            <>
            <div className="flex flex-col w-full outline outline-primary outline-1">
                <button className="flex h-4 m-2 mx-auto px-3 rounded-2xl bg-tertiary items-center content-center hover:rounded-md hover:text-primaryHL transition-all hover:transition-all" onClick={clickSearchAllCallback}><div className="w-full text-center text-xs font-bold text-primary">Search All</div></button>
            
                {props.itemGroup.Items.map(i=>
                    <ItemListItemEntry key={i.Name} item={i} parentGroup={props.itemGroup} onClick={props.onClickIndividual} ></ItemListItemEntry>
                )}
                <div className="flex h-2"></div>
            </div>
            
            </>
        ) : 
        (<></>)}
        </>
    </div>


    </>)
}

export default ItemListGroup;