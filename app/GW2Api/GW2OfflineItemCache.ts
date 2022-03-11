import db from "./GW2OfflineItems.json"

export type GW2CacheFilterResult= {
    Key: string;
    Name: string;
    IconUrl: string;
}

export type GW2OfflineItem = {
    Name: string;
    IconUrl: string;
}
export interface GW2OfflineItemEntry{[key:number]:GW2OfflineItem}

export class GW2OfflineItemCache{
    ItemDatabase : GW2OfflineItemEntry = {}

    constructor(){
        this.ItemDatabase = {};

    }

    Load(){
        let dbRawArray : string[] = [];
        dbRawArray = db.data.split('|');

        // create database
        let curIndex = 0;
        while(curIndex + 4 < dbRawArray.length){
            this.ItemDatabase[parseInt(dbRawArray[curIndex+1])] = {Name: dbRawArray[curIndex+2], IconUrl: dbRawArray[curIndex+3]}
            curIndex += 4;
        }
    }

    GetAllMatching(searchString : string) : GW2CacheFilterResult[] {
        let keys : string[] = Object.keys(this.ItemDatabase);
        let matches : GW2CacheFilterResult[] = [];
        for (let i = 0; i < keys.length; i++) {
            const key : number = parseInt(keys[i]);
            const value : GW2OfflineItem = this.ItemDatabase[parseInt(keys[i])];
            if(value.Name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())){
                matches.push({Key:keys[i],Name:value.Name,IconUrl:value.IconUrl})
            }
            if(keys[i].toLocaleLowerCase().includes(searchString.toLocaleLowerCase())){
                matches.push({Key:keys[i],Name:value.Name,IconUrl:value.IconUrl})
            }
        }
        return matches;
    }
}