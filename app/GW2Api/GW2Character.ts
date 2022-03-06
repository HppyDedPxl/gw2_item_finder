import { GW2API_Call } from "./GW2API_Call";
import { GW2EquipmentTab } from "./GW2EquipmentTab";

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

export class GW2Character{
    CharacterName: string;
    EquipmentTabs: GW2EquipmentTab[];

    Profession: string;
    EliteSpec: string;

    Bags: object | null;

    constructor(){
        this.CharacterName="";
        this.EquipmentTabs=[]
        this.Profession="";
        this.EliteSpec = "No";
        this.Bags = null;
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
                this.Bags = res.CharacterBags;

                // 2. Get Equipment Tab List
                new GW2API_Call(apiKey).GetEquipmentTemplates(characterName)
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
                    Promise.all(equipmentTabPromises).then(res=>{
                        resolve(this);
                    })
                    .catch(err=>{
                        error(err);
                    })

                })
                .catch(err=>{
                    error(err);
                });
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
        for (let i = 0; i < this.EquipmentTabs.length; i++) {
            this.EquipmentTabs[i] = Object.assign(new GW2EquipmentTab(),this.EquipmentTabs[i]);          
        }
    }
}
