import { ItemOption } from "~/components/ItemSelect";
import { ItemGroup } from "~/routes/ItemLists";
import { GW2AccountInfo} from "./GW2AccountInfo";
import { CharacterEqTemplateResult, EqTemplateListResult, GW2API_Call } from "./GW2API_Call";
import { GW2Character } from "./GW2Character";
import { GW2Item } from "./GW2Item";

export type GW2AccountItemSearchResult = {
    aggregates:[]
    hits: GW2AccountSearchResult[]
}

export type GW2AccountSearchResult = {
    uuid: string;
    Character: GW2Character | null,
    EquipmentTabNr: number,
    EquipmentTabName: string,
    Location: string,
    Slot: string,
    Count: Number
}


export class GW2ItemFinder {

    account: GW2AccountInfo;
    itemID: string;


    constructor(account: GW2AccountInfo, itemID: string){
        this.account = account;
        this.itemID = itemID;
    }


    ConsolidateSearch(hits:GW2AccountSearchResult[]) : any {
        let totalFound = 0;

        let Counters = []

        hits.forEach(hit => {
            if(hit != null){

                let FindLocation = ""
                if(hit.Character != null)
                    FindLocation = hit.Character.CharacterName
                else
                    FindLocation = "___"+hit.Location
                if(Counters[FindLocation] !== undefined){
                    if(Counters[FindLocation][hit.EquipmentTabNr] !== undefined){
                        Counters[FindLocation][hit.EquipmentTabNr] = Counters[FindLocation][hit.EquipmentTabNr] + hit.Count
                    }
                    else{
                        Counters[FindLocation][hit.EquipmentTabNr] = hit.Count
                    }
                }
                else{
                    let arr = []
                    arr[hit.EquipmentTabNr] = hit.Count
                    Counters[FindLocation] = arr;
                    Counters[FindLocation]["CharacterData"] = hit.Character
                }
            }
            
        });

   
        let Aggregates = []
        
        let iterator = Object.keys(Counters)
  
        iterator.forEach(loc => {

            if(loc.startsWith("___")){
                Aggregates[loc.slice(3)] = []
                Aggregates[loc.slice(3)]["Amount"] = Counters[loc][0]
                totalFound = totalFound + Counters[loc][0]
            }
            else{

                const subIterator = Object.keys(Counters[loc])
    

                let maxArr = []
                let foundOnLocation = 0;
                subIterator.forEach(tab=>{
                    if(tab === "CharacterData")
                        return;
                    if(tab == 0){
                        console.log("Found this here")
                        totalFound += Counters[loc][tab]
                        foundOnLocation += Counters[loc][tab]
                    }else{
                        maxArr.push(Counters[loc][tab])
                    }
                })
                if(maxArr.length > 0){
                    let max =  Math.max(...maxArr)
                    totalFound += max
                    foundOnLocation += max
                }
             

                Aggregates[loc] = []
                Aggregates[loc]["Amount"] = foundOnLocation
                Aggregates[loc]["CharacterData"] = Counters[loc]["CharacterData"]

            }
        });

        let finalAggregates = []
        finalAggregates.push({"Name" : "Full Account", "Data":{"Amount":totalFound}})
        let finalIterator = Object.keys(Aggregates)
        finalIterator.forEach(it => {
            finalAggregates.push({"Name":it,"Data":Aggregates[it]});
        });
        



        return finalAggregates;
    }

    SearchOnAccount(itemId: string) : GW2AccountItemSearchResult {     
        let search : GW2AccountItemSearchResult;
        let results = this.account.FindItemInAccount(parseInt(itemId))
        let aggregated_results = this.ConsolidateSearch(results);
        search = {aggregates:aggregated_results, hits: results};
        console.log(search)
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