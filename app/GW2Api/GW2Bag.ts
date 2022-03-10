import { GW2Item } from "./GW2Item";

export class GW2Bag {
    ItemID: number;
    Inventory: (GW2Item|null)[]
    Size: number;

    constructor(){
        this.ItemID = 0;
        this.Inventory = [];
        this.Size = 0;
    }

    ReassignPrototypes(){
        for (let i = 0; i < this.Inventory.length; i++) {
            if(this.Inventory[i] !== null)
            {
                this.Inventory[i] = Object.assign(new GW2Item(),this.Inventory[i]);
            }           
        }
    }
}