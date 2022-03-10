import { render } from "@headlessui/react/dist/utils/render";
import React, { Component } from "react";
import { GW2API_Call } from "~/GW2Api/GW2API_Call";
import { LoaderFunction, useLoaderData } from 'remix'
import { useEffect, useState } from "react";
import { GW2AccountSearchResult, GW2ItemFinder as GW2ItemFinder } from "~/GW2Api/GW2ItemFindProcess";
import { GW2AccountInfo } from "~/GW2Api/GW2AccountInfo";
import { GW2Item } from "~/GW2Api/GW2Item";
import PacmanLoader from "react-spinners/PacmanLoader";
import { XIcon } from "@heroicons/react/outline";


export type ItemCard = {
    uid: string;
    account: GW2AccountInfo,
    itemID: string,
    onRemoveClickedCallback: ((uid :string) => void) | null
}

export type SearchItemProps = {
    uid: string;
    account: GW2AccountInfo,
    itemID: string,
}

const useAPIData = (account: GW2AccountInfo, itemid: string) => {
    const [apiData, setApiData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [Error, setError] = useState("")
    const [result, setResult] = useState<GW2AccountSearchResult[]>([])
    const [searchItem, setSearchItem] = useState<GW2Item>()

    useEffect(()=>{
        setLoading(true);


        let finder : GW2ItemFinder = new GW2ItemFinder(account,itemid)

        finder.SearchOnAccount(itemid).then(res=>{
            setLoading(false);
            setResult(res.hits)
            setSearchItem(res.searchItem);
        })
        .catch(err=>{
            console.log(err);
            if(err === "Item ID does not exist!"){
                setLoading(false);
                setIsError(true);
                setError("The item that is being searched does not exist!");
            }
        }) 
     },[]);

    return {apiData, isLoading, result, searchItem, isError, Error}
}



const ItemSearch = (props : ItemCard) => {


    const { apiData, isLoading,result, searchItem, isError, Error } = useAPIData(props.account, props.itemID);

    
    let onRemoveClicked = () => {
        if(props.onRemoveClickedCallback !== null)
            props?.onRemoveClickedCallback(props.uid)
    }

    return isError ? (
        <>
         <div className="bg-gray-800 border-solid border-red-800 border-4 rounded-2xl overflow-hidden">
            <div className="grid flex-col">
                <div className="flex items-center justify-center text-white  pt-3">Oh no! Something went wrong!</div>
                <div className="flex items-center justify-center text-white  pt-1 pb-3">{Error}</div>
            </div>
        </div>
        </>

    ) : (
        <div className="bg-gray-800 border-solid border-solid border-2 border-gray-900 rounded-2xl overflow-hidden">
        {isLoading ? (
             <div className="grid flex-col">
                <div className="flex items-center justify-center text-white px-20 py-16"><PacmanLoader color="white"></PacmanLoader></div>
            </div>

        ) : (
            <div>
                <div className="bg-gray-700 rounded-t-2xl h-8 flex flex-row">
                    <img src={searchItem?.IconUrl} className="h-full pr-2"></img>
                    <div className="flex w-full items-center justify-center text-white">{searchItem?.Name} [{searchItem?.ItemID}]</div>
                    <button className="flex bg-red-600 hover:bg-red-400 w-8 items-center justify-center text-white hover:text-black" onClick={onRemoveClicked}><XIcon></XIcon></button>
                </div>
                <div className="my-2 px-4">
                {result.length > 0 ? (
                    <>
                {result.map(r=>(
                <div key={r.uuid}>
          
                    <div className="bg-gray-900 my-1 mx-1 my-1 py-1 px-4 h-8 flex flex-row border-solid border-gray-900 rounded-xl">       
                    {r.Character === null ? 
                    (<>
                      <div className="flex items-center justify-center text-white">No Character</div>
                    </>) 
                    : 
                    (<>
                        <img src={"icons/"+r.Character.GetCharacterClass()+".png"} className="h-full pr-2"></img>
                        <div className="flex items-center justify-center text-white">{r.Character.CharacterName} </div>
                        </>
                    )}       
                    
                    {r.EquipmentTabNr !== 0 ? 
                    (<>
                      <div className="flex items-center justify-center text-white pl-4 text-gray-300"> Equipment Tab: </div>
                        <div className="flex items-center justify-center text-white pl-1">{r.EquipmentTabNr} </div>
                    </>)
                    :
                    (<></>)               
                    }
                    <div className="flex items-center justify-center text-white pl-4">Slot: </div>
                    <div className="flex items-center justify-center text-white pl-1 text-yellow-500">{r.Slot}</div>

                    </div>


                </div>
            ))}
                    </>
                ) : (
                    <div className="grid flex-col">
                        
                        <div className="flex items-center justify-center text-white  pt-3">Item not found on any Character.</div>
                        <div className="flex items-center justify-center text-white  pt-1 pb-3">Skritt is very sad. :(</div>
                    </div>
                )}


            </div>
            </div>

        )}
    </div>
    );
};

export default ItemSearch;