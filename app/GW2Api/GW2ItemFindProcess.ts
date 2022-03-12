import { GW2AccountInfo} from "./GW2AccountInfo";
import { CharacterEqTemplateResult, EqTemplateListResult, GW2API_Call } from "./GW2API_Call";
import { GW2Character } from "./GW2Character";
import { GW2Item } from "./GW2Item";

export type GW2AccountItemSearchResult = {
    hits: GW2AccountSearchResult[]
}

export type GW2AccountSearchResult = {
    uuid: string;
    Character: GW2Character | null,
    EquipmentTabNr: number,
    EquipmentTabName: string,
    Location: string,
    Slot: string,
}


export class GW2ItemFinder {

    account: GW2AccountInfo;
    itemID: string;


    constructor(account: GW2AccountInfo, itemID: string){
        this.account = account;
        this.itemID = itemID;
    }

    SearchOnAccount(itemId: string) : GW2AccountItemSearchResult {     
        let search : GW2AccountItemSearchResult;
        search = {hits: this.account.FindItemInAccount(parseInt(itemId))};
        return search;
    }
}