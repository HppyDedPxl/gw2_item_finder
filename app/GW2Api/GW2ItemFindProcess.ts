import { GW2AccountInfo} from "./GW2AccountInfo";
import { CharacterEqTemplateResult, EqTemplateListResult, GW2API_Call } from "./GW2API_Call";
import { GW2Character } from "./GW2Character";
import { GW2Item } from "./GW2Item";

export type GW2AccountItemSearchResult = {
    searchItem: GW2Item,
    hits: GW2AccountSearchResult[]

}

export type GW2AccountSearchResult = {
    uuid: string;
    Character: GW2Character | null,
    EquipmentTabNr: number,
    EquipmentTabName: string,
    Slot: string,
}


export class GW2ItemFinder {

    account: GW2AccountInfo;
    itemID: string;


    constructor(account: GW2AccountInfo, itemID: string){
        this.account = account;
        this.itemID = itemID;
    }

    async SearchOnAccount(itemId: string) : Promise<GW2AccountItemSearchResult>{
        
        return new Promise<GW2AccountItemSearchResult>((resolve,error)=>{
            // 1. Prepare Search
            let resolvePromises : Promise<GW2Item>[]= [];
            let search : GW2AccountItemSearchResult;
     
            // prepare search objects
            let newSearchItem :GW2Item = new GW2Item(parseInt(itemId)); 
            // Resolve the item with the api
            resolvePromises.push(newSearchItem.populateFromAPI());
            // find all instances of item on account
            search = {searchItem: newSearchItem, hits: this.account.FindItemInAccount(parseInt(itemId))};
                   
            // 2. wait until all items have been resolved against the API and then resolve this promise
            newSearchItem.populateFromAPI().then(res=>{
                resolve(search);
            })
            .catch(err=>{
                error(err);
            })
           
        });
    }

}