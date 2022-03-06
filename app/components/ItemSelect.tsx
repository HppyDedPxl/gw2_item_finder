import React from "react";
import { Component, ReactNode } from "react";
import { ActionMeta, components, OnChangeValue, OptionProps, StylesConfig } from "react-select";
import AsyncSelect from "react-select/async";
import { valueTernary } from "react-select/dist/declarations/src/utils";
import { GW2CacheFilterResult, GW2OfflineItemCache } from "~/GW2Api/GW2OfflineItemCache";

export type ItemSelectProps = {
    ItemCache : GW2OfflineItemCache
    onChange: (newValue: OnChangeValue<any, any>, actionMeta: ActionMeta<any>) => void
}

interface ItemSelectState{
    readonly inputValue: string;
    readonly inputBackup: string;
}

export type ItemOption = {
    value: string,
    label: string,
    icon: string,
}

const image = (url = "") =>({

});



function MakeImageMarkup(url : string){
    return '<div><img src="' + url + '" height="auto" width="auto"/></div>';
}


export default class ItemSelect extends Component<ItemSelectProps, ItemSelectState>{
    
    selector: any;

    constructor(props){
        super(props)
        this.selector = React.createRef();
    }

    state: ItemSelectState = { 
        inputValue: '',
        inputBackup: '',
    };



    promiseItemOptions = (inputValue: string) =>
        new Promise<ItemOption[]>(resolve=>{
        console.log(inputValue);
        let itemDb = Object.assign(new GW2OfflineItemCache(), this.props.ItemCache);
        let matches : GW2CacheFilterResult[] = itemDb.GetAllMatching(inputValue);
        let options : ItemOption[] = [];
        for (let i = 0; i < matches.length && i < 20; i++) {
            const element = matches[i];
            options.push({value:element.Key,label: element.Name + " [" + element.Key+"]",icon:element.IconUrl});   
        }
        resolve(options);
    });

    onInputChange =  (query:any, { action }) => {
        console.log(action);
         if(action !== "set-value"){
             console.log(query);
            this.setState({inputValue: query});
            this.setState({inputBackup:query});
            return query;
            
         }
        else{
            console.log(query);
            this.setState({inputValue: this.state.inputBackup});
            return this.state.inputBackup;
        }
        
    }

    onOptionSelected = (data:any, action:ActionMeta<any>) =>{
        this.props.onChange(data,action);
    }

    filterOptions (options, filter, values) {
        if (!options) options = []
        return options
      }

    singleOption = (props: OptionProps<any>) => (
        <components.Option {...props}>
           <div className="flex flex-row-full h-7">
          {props.data.icon? <img className="flex h-full w-auto rounded-md border-2 border-solid border-gray-300" src={props.data.icon}/> : null}
          <div className="flex pl-4">{props.label}</div>
          </div>
        </components.Option>)

    

    render(): ReactNode {
        return(<>
        <AsyncSelect 
        ref={this.selector}
        onChange={this.onOptionSelected}
        inputValue={this.state.inputValue}
        onInputChange={this.onInputChange}
        isMulti
        cacheOptions
        defaultOptions={false}
        closeMenuOnSelect={false}
        blurInputOnSelect={false}
        components={{ 
            Option: this.singleOption}}
        loadOptions={this.promiseItemOptions}
      />
        </>)
    }
}

