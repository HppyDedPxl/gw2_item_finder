import { useState } from "react";
import { Link, LoaderFunction, useLoaderData } from "remix";
import ItemListCategory from "~/components/ItemListCategory";
import ItemListGroup from "~/components/ItemListGroup";
import { ItemOption } from "~/components/ItemSelect";
import { GW2OfflineItemCache } from "~/GW2Api/GW2OfflineItemCache";
import { SearchPageState } from ".";
import { useNavigate } from "remix";
import { NavigateOptions } from "react-router";



export interface ItemCategory {
  Name: string;
  Groups: ItemGroup[];
}

export interface ItemGroup {
  Name: string;
  Icon: string;
  Items: ItemGroupEntry[];
}

export interface ItemGroupEntry{
  Name : string;
  ItemID: number;
}

function EntryToItemOption(parentGroup : ItemGroup, item : ItemGroupEntry) : ItemOption {
  return {value:item.ItemID.toString(),icon:parentGroup.Icon,label:item.Name}
}

const Items : ItemCategory[] = 
[
  {
    Name: "Infusions",
    Groups: 
    [
      {
        Name:"Ghostly Infusion",
        Icon:"https://render.guildwars2.com/file/297E4B766AFB54E8FBA14A1970A495EAA558F630/1302736.png",
        Items:[
          {Name: "Ghostly Infusion (Concentration)", ItemID:85945},
          {Name: "Ghostly Infusion (Expertise)", ItemID:85644},
          {Name: "Ghostly Infusion (Toughness)", ItemID:77394},
          {Name: "Ghostly Infusion (Condition Damage)", ItemID:77366},
          {Name: "Ghostly Infusion (Precision)", ItemID:77316},
          {Name: "Ghostly Infusion (Power)", ItemID:77310},
          {Name: "Ghostly Infusion (Vitality)", ItemID:77303},
          {Name: "Ghostly Infusion (Healing Power)", ItemID:77274},
        ]
      }
    ]
  }
]




export default function ItemLists() {

  let navigate = useNavigate();

  function OnSearchAllFromGroup(group : ItemGroup){
    let items : ItemOption[] = [];
    for (let i = 0; i < group.Items.length; i++) {
      const element = group.Items[i];
      items.push({icon:group.Icon,value:element.ItemID.toString(),label:element.Name});  
    }
   
    // let navigate = useNavigate();
    navigate("/",{ replace: true,state: {bShouldFetchOnLoad: true, ItemsToFetch: items}});
  
  
  }
  
  function OnSearchIndividual(item: ItemGroupEntry, parentGroup: ItemGroup){
    let items : ItemOption[] = [];
    items.push({value:item.ItemID.toString(),label:item.Name,icon:parentGroup.Icon});
    //let navigate = useNavigate();
    navigate("/",{ replace: true,state: {bShouldFetchOnLoad: true, ItemsToFetch: items}});
  }

  return (
    <>
    <div className="bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp">
          <div className="h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"><h2 className="text-md">Quick Search</h2></div>
          <div className="p-4 text-xs text-white">

          {Items.map(Category=>
            <ItemListCategory key={Category.Name} category={Category} onClickIndividual={OnSearchIndividual} onClickSearchAll={OnSearchAllFromGroup}></ItemListCategory>
          )}
          
          </div>
      </div>
      </>
  );
}
  