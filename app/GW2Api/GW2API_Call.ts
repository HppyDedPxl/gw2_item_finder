import { resolvePath } from "react-router";
import { json } from "remix";

const GW2APIEndpoint : string = "https://api.guildwars2.com/v2/";

export type CharacterResult = {
    CharacterName: string,
    CharacterProfession: string,
    CharacterBags: any[],
    CharacterPvESpecs : object
  
}

export type DefaultEquipmentResult = {
    Equipment: any[];
}

export type DefaultSharedInventoryResult = {
    Items: any[];
}

export type EqTemplateListResult ={
    CharacterName: string,
    TemplateList: string[]
}

export type CharacterEqTemplateResult = {
    CharacterName: string,
    EqTemplateId: string,
    Equipment: object
}

export type ItemDataResult = {
    ID: number;
    Name: string;
    IconUrl: string;
    Type: string;
    Details: any;
}

export type AccountResult = {
    Name: string;
    Access: string[];
}

export type BankResult = {
    Items : any[];
}

export type MaterialStorageResult = {
    Items : any[];
}

export class GW2API_Call {

    ApiKey: string;
    URI: string;
    IsDone: boolean;
    Response: string;

    constructor(apiKey: string){
        this.ApiKey = apiKey;
        this.URI = "";
        this.Response = "test";
        this.IsDone = false;
    }

    async call() : Promise<string>{
        return new Promise((resolve,error)=>{
            let context = this;
            let endpoint = this.URI+"?access_token="+this.ApiKey;
            return fetch(endpoint, {
                method: 'GET',
                redirect: 'follow'
            }).then(response =>{
                context.IsDone = true;
                response.text().then(res=>{
                    context.Response = res;
                    resolve(res);
                });
            }).catch(err=> error("Error: " + err));
        })     
    }

    async callNoAuth() : Promise<string>{
        return new Promise((resolve,error)=>{
            let context = this;
            let endpoint = this.URI;
            return fetch(endpoint, {
                method: 'GET',
                redirect: 'follow'
            }).then(response =>{
                context.IsDone = true;
                response.text().then(res=>{
                    context.Response = res;
                    resolve(res);
                });
            }).catch(err=> error("Error: " + err));
        })
    }

    GetCharacterList() : Promise<string[]>{
        return new Promise((res,err)=>{
            this.URI = GW2APIEndpoint + "characters";
            this.call().then((resolve)=>{
                let jsonRes = JSON.parse(this.Response);
                if(jsonRes.text !== undefined && jsonRes.text === "Invalid access token"){
                    err("Invalid API Key");
                    return;
                }
                res(jsonRes);
            })
            .catch(()=>{err("Error")});
        }) 
    }

    GetEquipmentTemplates(characterName :string) : Promise<EqTemplateListResult> {
        return new Promise<EqTemplateListResult>((resolve,error)=>{
            this.URI =  GW2APIEndpoint + "characters/" + characterName + "/equipmenttabs";
            this.call().then((res)=>{
                const result : EqTemplateListResult = {CharacterName : characterName, TemplateList : JSON.parse(res)};
                resolve(result);
            }).catch(err=>error(err));
        });
    }

    GetEquipmentFromTemplate(characterName: string, templateId: string ) : Promise<CharacterEqTemplateResult>{
        return new Promise<CharacterEqTemplateResult>((resolve,error)=>{
            this.URI = GW2APIEndpoint + "characters/" + characterName + "/equipmenttabs/" + templateId;
            this.call().then((res)=>{
                const result : CharacterEqTemplateResult = {CharacterName : characterName, EqTemplateId : templateId, Equipment : JSON.parse(res)};
                resolve(result);
            }).catch(err=>error(err));
        });
    }

    GetCharacterData(characterName: string) : Promise<CharacterResult>{
        return new Promise<CharacterResult>((resolve,error)=>{
            this.URI = GW2APIEndpoint +"characters/" + characterName;
            this.call().then((res)=>{
                let jsonRes = JSON.parse(res);
                const result : CharacterResult = {CharacterName: characterName, CharacterProfession: jsonRes.profession, CharacterBags: jsonRes.bags, CharacterPvESpecs: jsonRes.specializations.pve };
                resolve(result);
            }).catch(err=>error(err));
        });
    }


    GetItemData(itemId: number) : Promise<ItemDataResult>{
        return new Promise<ItemDataResult>((resolve,error)=>{
            if(!itemId || isNaN(itemId)){
                error("Item ID does not exist!");
                return;
            }
            this.URI = GW2APIEndpoint + "items/" + itemId;
            this.callNoAuth().then((res)=>{
                let jsonRes = JSON.parse(res);
                if(jsonRes.text !== undefined && jsonRes.text === "no such id"){
                    error("Item ID does not exist!");
                    return;
                }
                const result : ItemDataResult = {ID : itemId, Name : jsonRes.name, IconUrl : jsonRes.icon, Type: jsonRes.type, Details: jsonRes.details};
                resolve(result);
            }).catch(err=>{
                error(err)});
        });
    }

    GetAccountData() : Promise<AccountResult>{
        return new Promise<AccountResult>((resolve,error)=>{
            this.URI = GW2APIEndpoint + "account";
            this.call().then(res=>{
                let jsonRes = JSON.parse(this.Response);
                if(jsonRes.text !== undefined && jsonRes.text === "Invalid access token"){
                    error("Invalid API Key");
                    return;
                }
                const result : AccountResult =  {Name: jsonRes.name, Access: jsonRes.access};
                resolve(result);
            })
            .catch(err=>{
                error(err);
            })
        }
        );
    }

    GetDefaultEquipmentData(characterName: string) : Promise<DefaultEquipmentResult>{
        return new Promise<DefaultEquipmentResult>((resolve,error)=>{
            this.URI = GW2APIEndpoint + "characters/" + characterName + "/equipment";
            this.call().then(res=>{
                    let result : DefaultEquipmentResult = {Equipment : JSON.parse(res).equipment};
                    resolve(result);
            })
            .catch(err=>{
                error(err);
            });
        });
    }

    GetSharedInventoryData() : Promise<DefaultSharedInventoryResult>{
        return new Promise<DefaultSharedInventoryResult>((resolve,error)=>{
            this.URI = GW2APIEndpoint + "account/inventory";
            this.call().then(res=>{
                let result : DefaultSharedInventoryResult = {Items: JSON.parse(res)}
                resolve(result);
            })
            .catch(err=>{
                error(err);
            })
        });
    }
    GetBankData() : Promise<BankResult>{
        
        return new Promise<BankResult>((resolve,error)=>{
            this.URI = GW2APIEndpoint + "account/bank";
            this.call().then(res=>{
                let result : BankResult = {Items: JSON.parse(res)}
                resolve(result);
            })
            .catch(err=>{
                error(err);
            })
        });
    }

    GetMaterialStorageData() : Promise<MaterialStorageResult>{
        console.log("getMatstorageData");
        return new Promise<BankResult>((resolve,error)=>{
            this.URI = GW2APIEndpoint + "account/materials";
            this.call().then(res=>{
                let result : MaterialStorageResult = {Items: JSON.parse(res)}
                resolve(result);
            })
            .catch(err=>{
                error(err);
            })
        });
    }

}