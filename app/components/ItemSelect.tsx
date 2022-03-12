import React from "react";
import { Component, ReactNode } from "react";
import { ActionMeta, components, MultiValueProps, OnChangeValue, OptionProps, SingleValueProps, StylesConfig } from "react-select";
import AsyncSelect from "react-select/async";
import SingleValue from "react-select/dist/declarations/src/components/SingleValue";
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
       
        let itemDb = Object.assign(new GW2OfflineItemCache(), this.props.ItemCache);
        let matches : GW2CacheFilterResult[] = itemDb.GetAllMatching(inputValue);
        let options : ItemOption[] = [];
        for (let i = 0; i < matches.length && i < 40; i++) {
            const element = matches[i];
            options.push({value:element.Key,label: element.Name,icon:element.IconUrl});   
        }
        resolve(options);
    });

    onInputChange =  (query:any, { action }) => {

         if(action !== "set-value"){
            this.setState({inputValue: query});
            this.setState({inputBackup:query});
            return query;
            
         }
        else{

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
        <div className="flex border-solid border-gray border-b-2 py-2 xs:py-0 h-12 sm:h-9 md:h-7">
            <components.Option {...props}>
           <div className="flex flex-row-full h-full items-center align-center pr-2">
          {props.data.icon? <img className="flex h-full w-0 rounded-md border-2 border-solid border-gray-300 invisible xs:w-auto xs:visible" src={props.data.icon}/> : null}
          <div className="flex pl-4 text-xs md:text-sm">{props.label}</div><sup>{props.data.value}</sup>      
          </div>
          </components.Option>

        </div>)

    multiValue = (props: MultiValueProps<any>) => (
        <components.MultiValue {...props}>
        <div className="flex flex-row-full items-center align-center">
      <div className="flex text-xs md:text-sm">{props.data.label}</div><sup>{props.data.value}</sup>      
      </div>
        </components.MultiValue>
    )

    
    selectBaseStyle = {
        control: (base) => ({
            ...base,
            minHeight:34,
            
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
            paddingTop: 2,
            paddingBottom: 2,
        }),
        clearIndicator: (styles) => ({
            ...styles,
            paddingTop: 2,
            paddingBottom: 2,
        }),
        option:(provided, state) =>({
            ...provided,
            padding: 0,
            paddingLeft:'4px',
            margin: 0,
        })
    }

    render(): ReactNode {
        return(<>
        <div className="flex-auto">
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
        styles={this.selectBaseStyle}
        components={{ 
            Option: this.singleOption,
            SingleValue: this.singleValue,
            MultiValue: this.multiValue
        }}
        loadOptions={this.promiseItemOptions}

      />
      </div>
        </>)
    }
}

