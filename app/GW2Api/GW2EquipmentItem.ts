import { json } from "remix";




export class GW2EquipmentItem{
    id : number;
    slot: string;
    upgrades: number[];
    infusions: number[];

    constructor(){
        this.id = 0;
        this.slot = "None";
        this.upgrades = [];
        this.infusions = [];
    }
}