import { CharacterEqTemplateResult, CharacterResult, GW2API_Call } from "./GW2API_Call";
import { GW2Character, GW2JsonItemWrapper } from "./GW2Character";
import { GW2EquipmentTab } from "./GW2EquipmentTab";
import { GW2Item } from "./GW2Item";
import { GW2AccountSearchResult } from "./GW2ItemFindProcess";




function GenerateUID() : string {
    return Math.random().toString(36).substr(2, 32);
   }

export class GW2AccountInfo{

    AccountName: string;
    Access: string[];
    Characters: GW2Character[];
    SharedInventory: GW2JsonItemWrapper[];
    ApiKey: string;
    LastUpdate: number;

    constructor(){
        this.AccountName = "";
        this.Access = [];
        this.Characters = [];
        this.SharedInventory = [];
        this.ApiKey = "";
        this.LastUpdate = 0;
    }

    populateFromApiKey(apiKey: string) : Promise<GW2AccountInfo> {

        this.ApiKey = apiKey;
        return new Promise<GW2AccountInfo>((resolve,error)=>{
            // 1. Get Account Info
            new GW2API_Call(apiKey).GetAccountData().then(res=>{
                this.AccountName = res.Name;
                this.Access = res.Access;

                let parallelRequests = [];

                // 2.1 Get Shared Inventory Data
                parallelRequests.push(new GW2API_Call(apiKey).GetSharedInventoryData().then((res)=>{
                    this.SharedInventory = res.Items;
                })
                .catch(err=>{
                    error(err);
                }));

                // TODO: GET BANK (game) DATA!

                // 2.2. Get Character Data
                parallelRequests.push(new GW2API_Call(apiKey).GetCharacterList().then(res=>{

                    let characterPromises : Promise<GW2Character>[] = [];

                    // Create a new Character object for each character in the list and
                    // resolve the promise as soon as the population of all of them
                    // is done
                    for (let i = 0; i < res.length; i++) {
                        const charName = res[i];
                        let newCharacter : GW2Character = new GW2Character();
                        this.Characters.push(newCharacter);
                        characterPromises.push(newCharacter.populateFromApi(apiKey,charName));          
                    }

                    // Give back this object, when all character have successfully populated this object is
                    // also fully populated with data
                    Promise.all(characterPromises).then(res=>{
                      // No need to do anything here, we just wait until all processes are done which means everything has been populated
                    })
                    .catch(err=>{
                        error(err);
                    })

                }).catch(err=>{
                    error(err);
                }));

                // return with account object once all parallel requests are done.
                Promise.all(parallelRequests).then(res=>{
                    this.LastUpdate = Date.now()
                    console.log("------ ACCOUNT SUCESSFULLY INDEXED --------")
                    console.log(this);
                    resolve(this);
                })
                .catch(err=>{
                    error(err);
                })

            }).catch(err=>{
                error(err);
            })


        });
    }

    getTimeSinceLastUpdated() : number{
        console.log(Date.now());
        console.log(this.LastUpdate);
        return Date.now() - this.LastUpdate;
    }

    populateWithData(data: CharacterEqTemplateResult[] ){
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            // check wether a character like that already exists in the character list
            if(this.Characters.some((e) => e.CharacterName === element.CharacterName)){
                // Exists, just append new equipment Template
                for (let j = 0; j < this.Characters.length; j++) {
                    if(this.Characters[j].CharacterName == element.CharacterName){
                        this.Characters[j].EquipmentTabs.push(new GW2EquipmentTab().populateFromJsonObject(element.Equipment));
                    }         
                }
            }
            else{
             
                // Does not exist, create new character
                let newChar : GW2Character = new GW2Character();
                newChar.CharacterName = element.CharacterName;
                newChar.EquipmentTabs = [];
                newChar.EquipmentTabs.push(new GW2EquipmentTab().populateFromJsonObject(element.Equipment));
                this.Characters.push(newChar);
            }    
        }
    }

    resolveCharactersFromAPI(apiKey: string) : Promise<GW2AccountInfo> {
        return new Promise((resolve, error)=>{

            let pendingRequests : Promise<CharacterResult>[] = [];
            for (let i = 0; i < this.Characters.length; i++) {
                const character = this.Characters[i];
                pendingRequests.push(new GW2API_Call(apiKey).GetCharacterData(this.Characters[i].CharacterName));
            }

            Promise.all(pendingRequests).then(results=>{
                // write back data to the proper character
                results.forEach(result => {
                    for (let i = 0; i < this.Characters.length; i++) {
                        if(this.Characters[i].CharacterName === result.CharacterName){
                            this.Characters[i].Profession = result.CharacterProfession;
                            this.Characters[i].SetActivePvESpecializations(result.CharacterPvESpecs);
                            this.Characters[i].Bags = result.CharacterBags;
                        }
                    }
                });
                resolve(this);
            })
        });
    }

    FindItemInAccount(searchId : number) : GW2AccountSearchResult[] {

        let hits : GW2AccountSearchResult[] = [];

        // 1. Check Shared Inventory Slots
        for (let i = 0; i < this.SharedInventory.length; i++) {
            if(this.SharedInventory[i] !== null){
                if(this.SharedInventory[i].id === searchId){
                    hits.push({uuid: GenerateUID(),Character: null,EquipmentTabNr: 0, EquipmentTabName:"Shared Account Inventory", Slot: "Shared Account Inventory"});

                }
            }   
        }

        // TODO: CHECK BANK 

        // 2. Iterate over all characters
        this.Characters.forEach(character => {
            // 3. Check "gathering slots"
            let slotsToCheck : string[] = ["Sickle", "Axe", "Pick"];
            for (let i = 0; i < slotsToCheck.length; i++) {
                let element : GW2JsonItemWrapper | null = character.GetDefaultEquipmentSlot(slotsToCheck[i]);
                if(element !== null && element.id === searchId) {
                    hits.push({uuid: GenerateUID(),Character: character,EquipmentTabNr: 0, EquipmentTabName:"Default Equipment", Slot: slotsToCheck[i]});
                }
            }

            // 4. Check Inventory
            for (let i = 0; i < character.Bags.length; i++) {
                const bag = character.Bags[i];
                for (let j = 0; j < bag.inventory.length; j++) {
                    const item = bag.inventory[j];
                    if(item !== null && item.id === searchId){
                        hits.push({uuid: GenerateUID(),Character: character,EquipmentTabNr: 0, EquipmentTabName:"Inventory", Slot: "Character Inventory"});
                    }
                    
                }            
            }

            // 5. Check all Equipment Tabs
            character.EquipmentTabs.forEach(equipmentTab => {
                equipmentTab.equipment.forEach(item => {                
                    // check if the item in question is the item we are looking for
                    if(item.id === searchId)
                        hits.push({uuid: GenerateUID(), Character: character,EquipmentTabNr: equipmentTab.id, EquipmentTabName: equipmentTab.name, Slot: item.slot});

                    // check if the item is one of the infusions
                    if(item.infusions !== undefined){
                        item.infusions.forEach(infusion => {
                            if(infusion === searchId){
                                hits.push({uuid: GenerateUID(),Character: character,EquipmentTabNr: equipmentTab.id, EquipmentTabName: equipmentTab.name, Slot: item.slot});
                            }
                        });
                    }

                    // check if the item is one of the upgrades
                    if(item.upgrades !== undefined){
                        item.upgrades.forEach(upgrade => {
                            if(upgrade === searchId){
                                hits.push({uuid: GenerateUID(),Character: character,EquipmentTabNr: equipmentTab.id, EquipmentTabName: equipmentTab.name, Slot: item.slot});
                            }
                        });
                    }
                });
            });
        });

        return hits;
    }

    Serialize() : string {
        return JSON.stringify(this);
    }

}
export function DeserializeGW2AccountInfo(data: string) : GW2AccountInfo {

    let dataObj : GW2AccountInfo = JSON.parse(data);
    // 1. assign prototypes to main
    dataObj = Object.assign(new GW2AccountInfo(),dataObj);
    // 2. iterate over all "character" entries and reassign prototype
    for (let i = 0; i < dataObj.Characters.length; i++) {
        dataObj.Characters[i] = Object.assign(new GW2Character(),dataObj.Characters[i]);
        // 3. tell character object to do the same for own children
        dataObj.Characters[i].ReassignPrototypes();
        
    }
    return dataObj;
    
}