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


export class ItemCard {
    uid: string;
    account: GW2AccountInfo;
    itemID: string;
    itemIcon: string;
    itemName: string;
    results : number;
    onRemoveClickedCallback: ((uid :string) => void) | null;
    onNewResultLength:((newLength:number) => void);

    constructor(){
        this.uid = "";
        this.account = new GW2AccountInfo();
        this.itemID = "";
        this.itemIcon = "";
        this.itemName = "";
        this.results = 0;
        this.onRemoveClickedCallback = null;
        this.onNewResultLength = (n:number) => {
            this.results = n;
        }
    }
}

export type ItemCardProps = {
    uid: string;
    account: GW2AccountInfo,
    itemID: string,
    itemIcon: string,
    itemName: string,
    onRemoveClickedCallback: ((uid :string) => void) | null
    onNewResultLength:((newLength:number) => void);
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
    const [aggregateResults, setAggregateResult] = useState<any[]>([])
    const [expanded, setExpanded] = useState<boolean>()

    useEffect(()=>{

        let finder : GW2ItemFinder = new GW2ItemFinder(account,itemid)
        let r = finder.SearchOnAccount(itemid)
        setResult(r.hits);
        setAggregateResult(r.aggregates)
        setLoading(false);

     },[]);

    return {apiData, isLoading, result, aggregateResults, expanded, isError, Error, setExpanded}
}



function randuid() {
    return Math.random() * 9999999999;
  }

const ItemSearch = (props : ItemCardProps) => {

    

    const { apiData, isLoading,result, aggregateResults, expanded, isError, Error, setExpanded } = useAPIData(props.account, props.itemID,);

    function toggleExpand(){
        setExpanded(!expanded);
    }
    
    
    let onRemoveClicked = () => {
        if(props.onRemoveClickedCallback !== null)
            props?.onRemoveClickedCallback(props.uid)
    }

    props.onNewResultLength(result.length);

    return isError ? (
        <>
         <div className="bg-primary border-solid border-red-800 border-4 rounded-md overflow-hidden shadow-sp">
            <div className="grid flex-col">
                <div className="flex items-center justify-center text-white  pt-3">Oh no! Something went wrong!</div>
                <div className="flex items-center justify-center text-white  pt-1 pb-3">{Error}</div>
            </div>
        </div>
        </>

    ) : (
        <div className="bg-primary outline outline-6 outline-secondary pb-1 rounded-md shadow-sp">
        {isLoading ? (
             <div className="grid flex-col">
                <div className="flex items-center justify-center text-white px-20 py-16"><PacmanLoader color="white"></PacmanLoader></div>
            </div>

        ) : (
            <div>
                <div className="bg-secondary h-8 flex flex-row">
                    <img src={props.itemIcon} className="h-full rounded-md "></img>
                    <div className="flex w-full items-center justify-center text-white text-sm">{props.itemName} [{props.itemID}]</div>
                    <div className="flex w-7 h-7 my-auto items-center justify-center mr-1">
                    <button className="transition-all hover:transition-all bg-negative h-7 w-7 rounded-2xl hover:rounded-md items-center justify-center text-black p-1" onClick={onRemoveClicked}><XIcon style={{alignSelf:'center'}}></XIcon></button>

                    </div>
                </div>
                <div className="my-2 px-4">
                {result.length > 0 ? (
                    <>

                {
                    aggregateResults.map(r=>(
                        <div key={randuid()}> 
                            <div className="bg-quaternary my-1 mx-1 my-1 py-1 px-4 h-auto flex flex-row border-solid border-secondary rounded-xl text-xs">   
                                {
                                    r.Data["CharacterData"] === undefined ? (
                                        <>
                                        <div className="flex items-center justify-center text-white">
                                            {r.Name}
                                        </div>
                                        </>
                                    ) :
                                    (
                                    <>
                                    <div className="resultGridCol col-span-2 md:col-span-1">
                                        <img src={"icons/"+r.Data["CharacterData"].GetCharacterClass()+".png"} className="h-6 pr-2"></img>
                                        <div className="flex items-center justify-center text-white wrap-anywhere">{r.Data["CharacterData"].CharacterName} </div>
                                    </div>
                                    </>
                                    )
                                }
                                <>
                            <div className="resultGridCol">
                                <div className="flex items-center justify-center text-white pl-4 text-gra-300"> Amount Found: </div>
                                <div className="flex items-center justify-center text-white pl-1 text-positive">{r.Data["Amount"]} </div>
                            </div>
                        </>
                                
                            </div>
                        </div> 
                    ))
                }

                { expanded ? <>
                <button onClick={toggleExpand} className="flex w-full transition-all hover:transition-all pl-2 pr-2 rounded-2xl hover:rounded-md bg-positive h-auto content-center items-center align-center expand-button" >Hide Detailed Location Info</button>
                {
                result.map(r=>(
                <div key={r.uuid}>   
                    <div className="bg-quaternary my-1 mx-1 my-1 py-1 px-4 h-auto flex flex-row border-solid border-secondary rounded-xl text-xs">       
                        <div className="grid grid-cols-2 md:grid-cols-3 w-full">

                        {r.Character === null ? 
                        (<>
                        <div className="resultGridCol col-span-2 md:col-span-1">
                            <div className="flex items-center justify-center text-white">No Character</div>
                        </div>
                        </>) 
                        : 
                        (<>
                            <div className="resultGridCol col-span-2 md:col-span-1">
                                <img src={"icons/"+r.Character.GetCharacterClass()+".png"} className="h-6 pr-2"></img>
                                <div className="flex items-center justify-center text-white wrap-anywhere">{r.Character.CharacterName} </div>
                            </div>
                            </>
                        )}       
                        
                        {r.EquipmentTabNr !== 0 ? 
                        (<>
                            <div className="resultGridCol">
                                <div className="flex items-center justify-center text-white pl-4 text-gra-300"> Equipment Tab: </div>
                                <div className="flex items-center justify-center text-white pl-1 text-positive">{r.EquipmentTabNr} </div>
                            </div>
                        </>)
                        :
                        (<>
                            <div className="resultGridCol">
                                <div className="flex items-center justify-center text-white pl-4 text-gray-300"> {r.Location} </div>
                            </div>
                        </>)               
                        }
                            <div className="resultGridCol col-span-1">
                                <div className="flex items-center justify-center text-white pl-4">Slot: </div>
                                <div className="flex items-center justify-center text-white pl-1 text-positive wrap-anywhere">{r.Slot}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))} </>
            : <>
            <button onClick={toggleExpand} className="flex w-full transition-all hover:transition-all pl-2 pr-2 rounded-2xl hover:rounded-md bg-positive h-auto content-center items-center align-center expand-button">View Detailed Location Info</button>
            </> }
                    </>
                ) : (
                    <div className="bg-quaternary my-1 mx-1 my-1 py-1 px-4 h-auto flex flex-row border-solid border-secondary rounded-xl text-xs">            
                        <div className="flex items-center justify-center text-white text-xs mx-auto ">Item not found on this Account. Skritt are very sorry :(</div>
                    </div>
                )}


            </div>
            </div>

        )}
        
    </div>
    );
};

export default ItemSearch;