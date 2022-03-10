import { GW2API_Call } from "./GW2API_Call";
import { GW2Bag } from "./GW2Bag";
import { GW2EquipmentTab } from "./GW2EquipmentTab";
import { GW2Item } from "./GW2Item";

interface ESpecLookup{[key:number]: string};
const EliteSpecLookupTable : ESpecLookup = {
    // HOT
    5: "Druid",
    7: "Daredevil",
    18: "Berserker",
    27: "Dragonhunter",
    34: "Reaper",
    40: "Chronomancer",
    43: "Scrapper",
    48: "Tempest",
    52: "Herald",

    // POF
    55: "Soulbeast",
    56: "Weaver",
    57: "Holosmith",
    58: "Deadeye",
    59: "Mirage",
    60: "Scourge",
    61: "Spellbreaker",
    62: "Firebrand",
    63: "Renegade",

    // EoD
    64: "Harbinger",
    65: "Willbender",
    66: "Virtuoso",
    67: "Catalyst",
    68: "BladeSworn",
    69: "Vindicator",
    70: "Mechanist",
    71: "Specter",
    72: "Untamed"
}

// Todo: (AK) properly move to seperate file, maybe merge with GW2Item? Create GW2InventoryItem?
export interface GW2JsonItemWrapper {
    id : number;
    slot : string;
    upgrades : number[];
    infusions : number[];
    skin: number;
    stats: object;
    binding: string;
    dyes: number[];
}

export interface GW2JsonBagWrapper {
    id : number;
    inventory : GW2JsonItemWrapper[];
    size: number;
}

export class GW2Character{
    CharacterName: string;
    EquipmentTabs: GW2EquipmentTab[];

    Profession: string;
    EliteSpec: string;

    BaseEquipment : (GW2Item|null)[];
    Bags: (GW2Bag|null)[];

    constructor(){
        this.CharacterName="";
        this.EquipmentTabs=[]
        this.Profession="";
        this.EliteSpec = "No";
        this.Bags = [];
        this.BaseEquipment = [];
    }


    populateFromApi(apiKey: string, characterName: string) : Promise<GW2Character>{
        return new Promise<GW2Character>((resolve,error)=>{
            
            // 1. Get Character MetaData
            new GW2API_Call(apiKey).GetCharacterData(characterName)
            .then(res=>{
                // Set Primary Meta Data and Inventory List
                this.CharacterName = res.CharacterName;
                this.Profession = res.CharacterProfession;
                this.SetActivePvESpecializations(res.CharacterPvESpecs);

                this.Bags = [];
                for (let i = 0; i < res.CharacterBags.length; i++) {
                    if(res.CharacterBags[i] !== null){
                        let bag = new GW2Bag();
                        bag.ItemID = res.CharacterBags[i].id;

                        bag.Inventory = [];
                        for (let j = 0; j < res.CharacterBags[i].inventory.length; j++) {
                            const element = res.CharacterBags[i].inventory[j];
                            bag.Inventory.push(element == null ? null : GW2Item.fromJSON(element));              
                        }

                        bag.Size = res.CharacterBags[i].size;
                        this.Bags.push(bag);
                    }
                    else{
                        this.Bags.push(null);
                    }    
                }
                
                let parallelLookups = [];

                // 2.1. Get Default Equipment
                parallelLookups.push(new GW2API_Call(apiKey).GetDefaultEquipmentData(characterName)
                .then(res=>{
                    this.BaseEquipment = [];
                    for (let i = 0; i < res.Equipment.length; i++) {
                        this.BaseEquipment.push(res.Equipment[i] !== null ? GW2Item.fromJSON(res.Equipment[i]) : null);          
                    }
                }));

                // 2.2. Get Equipment Tab List
                parallelLookups.push(new GW2API_Call(apiKey).GetEquipmentTemplates(characterName)
                .then(res=>{
                    
                    // Create new Equipment Tabs for each tab in the list and populate it from
                    // the api
                    let equipmentTabPromises : Promise<GW2EquipmentTab>[] = [];
                    for (let i = 0; i < res.TemplateList.length; i++) {
                        const tabId = res.TemplateList[i];
                        let newEquipmentTab : GW2EquipmentTab = new GW2EquipmentTab();
                        equipmentTabPromises.push(newEquipmentTab.populateFromApi(apiKey,characterName,tabId));
                        this.EquipmentTabs.push(newEquipmentTab);         
                    }

                    // after all tabs are populated, return ourselves
                    return Promise.all(equipmentTabPromises).then(res=>{
                        // do nothing here, this just means all processes have returned the promise, resolution is once all parallel promises are done
                    })
                    .catch(err=>{
                        error(err);
                    });

                })
                .catch(err=>{
                    error(err);
                }));

                // resolve once 2.1 and 2.2 have resolved
                Promise.all(parallelLookups).then(res=>{
                    // All Promises on individual character resolved.
                    resolve(this);
                })
                .catch(err=>{
                    error(err);
                })
            })
            .catch(err=>{
                error(err);
            });
        });
    }

    // switch resolve -- no need for api calls, this list only updates once a year anyway
    ResolveSpecIdToEliteSpec(id: number) : string{
        if(EliteSpecLookupTable[id] !== undefined){
            return EliteSpecLookupTable[id];
        }
        return "No";
    }

    SetActivePvESpecializations(pveSpecs: any){

        // 3 specs are set, that means an elite spec COULD be set
        if(pveSpecs.length == 3){
            let thirdSpec = pveSpecs[2];
            this.EliteSpec = this.ResolveSpecIdToEliteSpec(thirdSpec.id);
        }
    }

    GetCharacterClass() :string {
        if(this.EliteSpec !== "No") return this.EliteSpec;
        return this.Profession;
    }

    ReassignPrototypes(){
        // 1. Reassign Prototypes for Equipment Tabs
        for (let i = 0; i < this.EquipmentTabs.length; i++) {
            this.EquipmentTabs[i] = Object.assign(new GW2EquipmentTab(),this.EquipmentTabs[i]);
            this.EquipmentTabs[i].ReassignPrototypes();
        }
        // 2. Reassign Prototypes for Bags
        for (let i = 0; i < this.Bags.length; i++) {
            if(this.Bags[i] !== null){
                this.Bags[i] = Object.assign(new GW2Bag(),this.Bags[i]);
                this.Bags[i]?.ReassignPrototypes();
            }     
        }  
        // 3. Reassign Base Equipment Prototypes
        for (let i = 0; i < this.BaseEquipment.length; i++) {
            if(this.BaseEquipment[i] !== null){
                this.BaseEquipment[i] = Object.assign(new GW2Item(),this.BaseEquipment[i]);
            }
        }  
    }

    GetDefaultEquipmentSlot(slotName : string) : GW2Item | null{
        if(this.BaseEquipment === null || this.BaseEquipment === undefined) 
            return null;
        for (let i = 0; i < this.BaseEquipment.length; i++) {
            if(this.BaseEquipment[i]?.Slot === slotName){
                return this.BaseEquipment[i];
            }     
        }
        return null;
    }
}
