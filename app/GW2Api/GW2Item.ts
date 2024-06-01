import { GW2API_Call } from "./GW2API_Call";
import { GW2JsonItemWrapper } from "./GW2Character";

export class GW2Item {
    ItemID : number;

    Name: string;
    IconUrl: string;

    Slot : string;
    Upgrades : number[];
    Infusions : number[];
    Skin: number;
    Stats: object;
    Binding: string;
    Dyes: number[];
    Count:number;
    // todo : Properly type
    Details: any;


    constructor(){
        this.ItemID = 0;
        this.Name = "";
        this.IconUrl = "";
        this.Slot = "";
        this.Upgrades = [];
        this.Infusions = [];
        this.Skin = 0;
        this.Stats = {};
        this.Binding = "";
        this.Dyes = [];
        this.Count = 0;
    }

    static fromJSON(itemData: GW2JsonItemWrapper){
        let item = new GW2Item();
        item.ItemID = itemData.id;
        item.Slot = itemData.slot;
        item.Upgrades = itemData.upgrades;
        item.Infusions = itemData.infusions;
        item.Skin = itemData.skin;
        item.Stats = itemData.stats;   
        item.Binding = itemData.binding;
        item.Dyes = itemData.dyes;
        item.Count = itemData.count;

        return item;
    }

    hasItemIdAsUpgradeOrInfusion(id:number) : boolean {
        if(this.Infusions !== undefined){
            for (let i = 0; i < this.Infusions.length; i++) {
                if(this.Infusions[i] === id)
                return true;          
            }
        }
        if(this.Upgrades !== undefined){
            for (let i = 0; i < this.Upgrades.length; i++) {
                if(this.Upgrades[i] === id)
                return true;          
            }
        }
        return false;
    }

    populateFromAPI() : Promise<GW2Item>{
        return new Promise<GW2Item>((resolve,error)=>{

            let call : GW2API_Call = new GW2API_Call("NoAuth");
            return call.GetItemData(this.ItemID).then(result=>{
                this.Name = result.Name;
                this.IconUrl = result.IconUrl;
                this.Details = result.Details;
                console.log("Resolved")
                resolve(this);
            })
            .catch(err=>{
                error(err);
            })

        });
    };
}