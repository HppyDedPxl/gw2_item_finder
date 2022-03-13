import { useState } from "react";
import { Link, LoaderFunction, useLoaderData } from "remix";
import ItemListCategory from "~/components/ItemListCategory";
import ItemListGroup from "~/components/ItemListGroup";
import { ItemOption } from "~/components/ItemSelect";
import { GW2OfflineItemCache } from "~/GW2Api/GW2OfflineItemCache";
import { SearchPageState } from ".";
import { useNavigate } from "remix";
import { NavigateOptions } from "react-router";
import { IL_Infusions } from "~/utility/ItemList_Infusions";
import { IL_GatheringTools } from "~/utility/ItemList_GatheringTools";


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
  Icon: string | null;
}

function EntryToItemOption(parentGroup : ItemGroup, item : ItemGroupEntry) : ItemOption {
  return {value:item.ItemID.toString(),icon:parentGroup.Icon,label:item.Name}
}


export default function ItemLists() {

  let navigate = useNavigate();


  function OnSearchAllFromCategory(category: ItemCategory){
    let items : ItemOption[] = [];
    for (let i = 0; i < category.Groups.length; i++) {
      const group = category.Groups[i];
      for (let j = 0; j < group.Items.length; j++) {
        const item = group.Items[j];
        items.push({icon: item.Icon !== null ? item.Icon : group.Icon,value:item.ItemID.toString(),label:item.Name});  
      }    
    }
    navigate("/",{ replace: true,state: {bShouldFetchOnLoad: true, ItemsToFetch: items}});
  }

  function OnSearchAllFromGroup(group : ItemGroup){
    let items : ItemOption[] = [];
    for (let i = 0; i < group.Items.length; i++) {
      const item = group.Items[i];
      items.push({icon: item.Icon !== null ? item.Icon : group.Icon,value:item.ItemID.toString(),label:item.Name});  
    }
    navigate("/",{ replace: true,state: {bShouldFetchOnLoad: true, ItemsToFetch: items}});
  
  }
  
  function OnSearchIndividual(item: ItemGroupEntry, parentGroup: ItemGroup){
    let items : ItemOption[] = [];
    items.push({value:item.ItemID.toString(),label:item.Name,icon: item.Icon !== null ? item.Icon : parentGroup.Icon});
    navigate("/",{ replace: true,state: {bShouldFetchOnLoad: true, ItemsToFetch: items}});
  }

  return (
    <>
    <div className="bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp">
          <div className="h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"><h2 className="text-md">Quick Search</h2></div>
          <div className="p-4 text-xs text-white">
          <p className="text-lg font-bold pb-2">Usage Note</p>
          <p className="italic pl-4"> The following drop down menues provide a quick way to batch search for specific items that I found could get lost easily across Alt-Characters. Simply click on any of the items to search for it on your account.</p>
          <p className="font-bold pl-4 pb-2">Before using this section please set your account on the home page!</p>
          <p className="text-lg font-bold pt-2">Infusions</p>
          {IL_Infusions.map(Category=>
            <ItemListCategory key={Category.Name} category={Category} onClickIndividual={OnSearchIndividual} onClickSearchAll={OnSearchAllFromGroup} onClickSearchCategory={OnSearchAllFromCategory}></ItemListCategory>
          )}
          <p className="text-lg font-bold pt-2">Infinite Gathering Tools</p>
          {IL_GatheringTools.map(Category=>
            <ItemListCategory key={Category.Name} category={Category} onClickIndividual={OnSearchIndividual} onClickSearchAll={OnSearchAllFromGroup} onClickSearchCategory={OnSearchAllFromCategory}></ItemListCategory>
          )}
          
          </div>
      </div>
      </>
  );
}
  