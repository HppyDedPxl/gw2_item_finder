import { ItemGroup, ItemGroupEntry } from "~/routes/ItemLists";

interface ItemListItemEntryProps{
    item : ItemGroupEntry;
    parentGroup: ItemGroup;
    onClick: (item : ItemGroupEntry, group : ItemGroup ) => void;
}

const ItemListItemEntry = (props : ItemListItemEntryProps) : JSX.Element => {
    
    function callback(){
        props.onClick(props.item,props.parentGroup)
    }

    return (<>
    <button className="flex flex-row h-full h-7 py-[2px] w-full bg-secondary hover:bg-secondaryHL outline outline-primary outline-1" onClick={callback}>
        <div className="pl-8 flex h-full flex-row items-center align-center">
            <div className="flex h-full w-auto">
                <img className="rounded-md" src={props.item.Icon !== null ? props.item.Icon : props.parentGroup.Icon}></img>
            </div>
            <div className="flex">
                {props.item.Name}
            </div>
        </div>
        
    </button>
    </>)
}
export default ItemListItemEntry;