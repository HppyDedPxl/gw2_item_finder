import { GW2API_Call } from "./GW2API_Call";

export class GW2Item {
    ItemID : number;

    Name: string;
    IconUrl: string;

    constructor(itemID: number){
        this.ItemID = itemID;
        this.Name = "";
        this.IconUrl = "";
    }

    populateFromAPI() : Promise<GW2Item>{
        return new Promise<GW2Item>((resolve,error)=>{

            let call : GW2API_Call = new GW2API_Call("NoAuth");
            return call.GetItemData(this.ItemID).then(result=>{
                this.Name = result.Name;
                this.IconUrl = result.IconUrl;
                resolve(this);
            })
            .catch(err=>{
                error(err);
            })

        });
    };
}