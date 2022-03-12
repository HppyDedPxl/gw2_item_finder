import { ItemOption } from "~/components/ItemSelect";
import { ItemGroup } from "~/routes/ItemLists";
import { GW2AccountInfo} from "./GW2AccountInfo";
import { CharacterEqTemplateResult, EqTemplateListResult, GW2API_Call } from "./GW2API_Call";
import { GW2Character } from "./GW2Character";
import { GW2Item } from "./GW2Item";

export type GW2AccountItemSearchResult = {
    hits: GW2AccountSearchResult[]
}

export type GW2AccountSearchResult = {
    uuid: string;
    Character: GW2Character | null,
    EquipmentTabNr: number,
    EquipmentTabName: string,
    Location: string,
    Slot: string,
}


export class GW2ItemFinder {

    account: GW2AccountInfo;
    itemID: string;


    constructor(account: GW2AccountInfo, itemID: string){
        this.account = account;
        this.itemID = itemID;
    }

    SearchOnAccount(itemId: string) : GW2AccountItemSearchResult {     
        let search : GW2AccountItemSearchResult;
        search = {hits: this.account.FindItemInAccount(parseInt(itemId))};
        return search;
    }

    
}

export function ResolveBuffToStat(buff: string) : string {
    if(buff === "BoonDuration")
        return "Concentration"
    else if(buff==="ConditionDuration")
        return "Expertise";
    return buff;
}

export function GenerateGatheringToolFromOptions(options: ItemOption[]){
    let items : GW2Item[] = [];
    let promises = [];
    for (let i = 0; i < options.length; i++) {
        let newItem = new GW2Item();
        newItem.ItemID = parseInt(options[i].value);
        promises.push(newItem.populateFromAPI());        
    }

    
    Promise.all(promises).then(res=>{
        let obj : ItemGroup= {
            Name: res[0].Name,
            Icon: res[0].IconUrl,
            Items: []
        }
        for (let i = 0; i < res.length; i++) {
            const element = res[i];
            let nameStr = element.Name;
            obj.Items.push({Name: nameStr, ItemID:element.ItemID,Icon:element.IconUrl});
            
        }
        console.log(obj);
    });
}

export function GenerateInfusionStringFromOptions(options: ItemOption[]){

    let items : GW2Item[] = [];
    let promises = [];
    for (let i = 0; i < options.length; i++) {
        let newItem = new GW2Item();
        newItem.ItemID = parseInt(options[i].value);
        promises.push(newItem.populateFromAPI());        
    }

    
    Promise.all(promises).then(res=>{
        let obj : ItemGroup= {
            Name: res[0].Name,
            Icon: res[0].IconUrl,
            Items: []
        }
        for (let i = 0; i < res.length; i++) {
            const element = res[i];
            let nameStr = element.Name;
            nameStr += " (" + ResolveBuffToStat(element.Details.infix_upgrade.attributes[0].attribute) + ")"

            obj.Items.push({Name: nameStr, ItemID:element.ItemID,Icon:element.IconUrl});
            
        }
        console.log(obj);
        // REGEX TO CONVERT THIS OBJECT JSON TO USABLE ARRAY ITEMLISTS.TSX : / \s+(?=")\"(?=Name|Icon|Items|ItemID)|\"(?=\:)|\s(?<=,)|\s+(?=}) /gm
    });
}