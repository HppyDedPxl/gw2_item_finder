import { QuestionMarkCircleIcon, RefreshIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  SearchResult, { ItemCard } from '~/components/ItemCard';
import { useLoaderData } from 'remix';
import { LoaderFunction, createCookie } from 'remix';
import { DeserializeGW2AccountInfo, GW2AccountInfo } from '~/GW2Api/GW2AccountInfo';
import { BarLoader, RingLoader } from 'react-spinners';
import { GW2OfflineItemCache } from '~/GW2Api/GW2OfflineItemCache';
import Async, { useAsync } from 'react-select/async';
import AsyncSelect from 'react-select/async';
import ItemSelect from '~/components/ItemSelect';

function ConvertTimespanToTimeString(span: number) {
  span = span/1000;
  var d = Math.floor(span / (3600*24));
  var h = Math.floor(span % (3600*24) / 3600);
  var m = Math.floor(span % 3600 / 60);
  var s = Math.floor(span % 60);
  s = Math.max(s,1)
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function GenerateUID() : string {
 return Math.random().toString(36).substr(2, 32);
}

export const loader: LoaderFunction = async ({params})=>{
  // load in all of the items
  let itemDB : GW2OfflineItemCache = new GW2OfflineItemCache();
  itemDB.Load();
  return {ItemDB: itemDB};
}

export default function Index() {

  const [itemCards, setItemCards] = useState<ItemCard[]>([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [input_apiKey, setinput_apiKey] = useState("")
  const [input_itemID, setinput_itemID] = useState("")
  const [input_itemSelection,setinput_itemSelection] = useState([])
  const [fetchingAccount, setFetchingAccount] = useState(false)
  const [accountInfo, setAccountInfo] = useState<GW2AccountInfo>()


  function removeCardFromCards(uid : string){
    let ic_copy = itemCards;
    // find element at index
    for (let i = 0; i < ic_copy.length; i++) {
      const element = ic_copy[i];
      if (element.uid === uid){
        ic_copy.splice(i,1);
      }
    }

    setItemCards(ic_copy);
    setItemAmount(itemCards.length);

  }


  function SetApiKey(){
    let newAccount : GW2AccountInfo = new GW2AccountInfo();  
    setFetchingAccount(true);
    newAccount.populateFromApiKey(input_apiKey)
    .then(res=>{
        setAccountInfo(res);
        localStorage.setItem("gw2AccountInfo",JSON.stringify(res));
        setFetchingAccount(false);
      
    })
    .catch(err=>{
      console.log(err);
      setFetchingAccount(false);
      // Todo: Invalid Api Key PING
    });
  }

  function RefreshAccount(){
    setFetchingAccount(true);
    if(accountInfo !== undefined && accountInfo !== null){
      let account : GW2AccountInfo = new GW2AccountInfo();

   
    account.populateFromApiKey(accountInfo.ApiKey)
    .then(res=>{
      setAccountInfo(res);
      localStorage.setItem("gw2AccountInfo", JSON.stringify(res));
      setFetchingAccount(false);
    })
    .catch(err=>{
      setFetchingAccount(false);
    });
    }
  }

  function RemoveAccount(){
    setAccountInfo(undefined);
    localStorage.setItem("gw2AccountInfo","undefined");
  }

  function HasValidAccount() : boolean {
    // lazy load from cookie
    return (!(accountInfo?.AccountName === "" || accountInfo?.AccountName === undefined || accountInfo.AccountName === null || fetchingAccount));
  }

  function FindItem(itemID: string){
    let ic_copy = itemCards;
    if(accountInfo !== undefined){
      ic_copy.unshift({uid:GenerateUID(), account: accountInfo, itemID: itemID , onRemoveClickedCallback: removeCardFromCards});
      setItemCards(ic_copy);
      setItemAmount(itemCards.length);
    }
  }

  function FindItems(){
    console.log(input_itemSelection);
    for (let i = 0; i < input_itemSelection.length; i++) {
      FindItem(input_itemSelection[i]['value']); 
    }
  }

  function OnMultiSelectChanged(selectedItems : any){
    setinput_itemSelection(selectedItems);
  }

  // Get Account from cache
  useEffect(()=>{
    let data = null;
    data = localStorage.getItem('gw2AccountInfo');
    if(data !== null && data !== undefined && data !== "undefined"){
      let account: GW2AccountInfo  = DeserializeGW2AccountInfo(data);
      // reassign prototype properties
      setAccountInfo(account);
    }
  },[]);

  console.log(itemCards);
  let loaderData = useLoaderData();
  return (
    <>
    <div className="bg-gray-800 border-solid rounded-2xl px-5 py-5 border-2 border-gray-900">
      <div>   
        {/* ACCOUNT SECTION */}
        <div className="flex flex-row place-items-center justify-items-auto w-full">
          <label className=" flex block text-sm font-medium text-white px-1 pt-1">
            Account
            </label>
            {
              HasValidAccount() ? (<div className="flex text-xs text-gray-400">Last Refreshed: {accountInfo?ConvertTimespanToTimeString(accountInfo?.getTimeSinceLastUpdated()):"invalid"} ago</div>) : (<></>)
            }        
        </div>
        <div className="flex flex-row place-items-center justify-items-auto h-7">
          {!HasValidAccount() ? 
          (
          <>
          {/* API KEY INPUT */}
            {fetchingAccount ? 
            (<>
            <div className="block w-full h-full px-1">
              <div className="inline-block text-xs text-gray-300">Brave Skritt are making a map of your account! This can take a while but will make finding shinies faster later!...</div>
              <div className="inline-block grid"><BarLoader width='100%' color='white'></BarLoader></div>
              
            </div>
            </>) 
            : 
            (
              <>
              <input type="password" name="api-key" id="api-key" className="flex focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md h-full" placeholder="API Key" onChange={e=>setinput_apiKey(e.target.value)}>
              </input>
              <button name="confirm-button" id="confirm-button" className="flex flex-row pl-2 pr-2 py-1 sm:text-sm border-gray-300 rounded-md bg-green-300 ml-2 h-full w-3/12 place-items-center justify-items-auto hover:bg-green-700 hover:text-white" onClick={SetApiKey}> <p className="text-center w-full text-xs md:text-md">Set Account</p> </button>
              </>
            )}
            {/* API KEY INPUT END */}
          </>
          ) 
          :
          (
          <>
          {/* ACCOUNT DETAILS DISPLAY */}
            <div className="flex flex-row place-items-center justify-items-auto w-full">
              <div className="flex flex-row place-items-center justify-items-auto w-full bg-white pl-2 rounded-md border-1 border-solid border-gray-900">
                <div className="flex w-full">{accountInfo?.AccountName}</div>
               
              </div>
              <button className="flex h-auto w-7 ml-1 text-white hover:text-gray-400  bg-blue-600 rounded-md border-2 border-blue-900 border-solid hover:bg-blue-800 hover:text-white" name="remove-account-button" id="remove-account-button" onClick={RefreshAccount}><RefreshIcon color='black' style={{alignSelf:'center'}}></RefreshIcon></button>
              <button className="flex h-auto w-7 ml-1 text-white hover:text-gray-400  bg-red-600 rounded-md border-2 border-red-900 border-solid hover:bg-red-800 hover:text-white" name="remove-account-button" id="remove-account-button"onClick={RemoveAccount}><XIcon color='black' style={{alignSelf:'center'}}></XIcon></button>
            </div>
          {/* ACCOUNT DETAILS DISPLAY END*/}

          </>
          )}

        </div>
        {/* ACCOUNT SECTION END */}
        <div className="py-1"></div>
        {/* ITEM INPUT */}
        {HasValidAccount() ? 
        (<>
          <div>
            <label className="block text-sm font-medium text-white px-1">
            Items
            </label>
          </div>
          <div className="pt-1"></div>
          <div className='flex flex-row lace-items-center justify-items-auto'>
          <ItemSelect ItemCache={loaderData.ItemDB} onChange={OnMultiSelectChanged}></ItemSelect>
          <div className="px-1"></div>
          <button name="confirm-button" id="confirm-button" className="flex pl-2 pr-2 rounded-md border-gray-300 bg-green-300 hover:bg-green-500 h-auto" onClick={FindItems}><div className="m-auto w-10 p-2"><SearchIcon color='black'></SearchIcon></div></button>
          </div>
        </>
        )
        :
        (<>
        </>
        )
        }

      </div>
    </div>
    <div className="resultsContainerMobile lg:resultsContainer ">
    { itemCards.map((item)=>
      <div key={item.uid} className="py-2 px-2">
         <SearchResult  onRemoveClickedCallback={removeCardFromCards} uid={item.uid} account={item.account} itemID={item.itemID}/>
      </div>
    )}
    </div>
  </>
  );
}
