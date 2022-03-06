import { GW2API_Call } from "./GW2API_Call";
import { GW2EquipmentItem } from "./GW2EquipmentItem";

export class GW2EquipmentTab{
    id : number;
    name: string;
    equipment: GW2EquipmentItem[];

    constructor(){
        this.id = -1;
        this.name = "";
        this.equipment = [];
    }

    populateFromJsonObject(jsonObject: any) : GW2EquipmentTab { 
        this.id = jsonObject.tab;
        this.name = jsonObject.name;
        this.equipment = [];

        if(jsonObject.equipment !== null && jsonObject.equipment !== undefined && Array.isArray(jsonObject.equipment)){
            for (let i = 0; i < jsonObject.equipment.length; i++) {
                const eq = jsonObject.equipment[i];
                this.equipment.push({id:eq.id,slot:eq.slot,upgrades:eq.upgrades,infusions:eq.infusions});         
            }
        }
        return this;
    }

    populateFromApi(apiKey: string, characterName: string, tabId: string) : Promise<GW2EquipmentTab> {
        return new Promise<GW2EquipmentTab>((resolve,error)=>{
            // 1. Get Equipment Tab Data from Api
            new GW2API_Call(apiKey).GetEquipmentFromTemplate(characterName,tabId)
            .then(res=>{
                // resolve with self after populating from response
                this.populateFromJsonObject(res.Equipment);
                resolve(this);
            })
            .catch(err=>{
                error(err);
            })

        });
    }
    
}