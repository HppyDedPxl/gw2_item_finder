import { useState } from "react";
import { Link, LoaderFunction, useLoaderData } from "remix";
import ItemListCategory from "~/components/ItemListCategory";
import ItemListGroup from "~/components/ItemListGroup";
import { ItemOption } from "~/components/ItemSelect";
import { GW2OfflineItemCache } from "~/GW2Api/GW2OfflineItemCache";
import { SearchPageState } from ".";
import { useNavigate } from "remix";
import { NavigateOptions } from "react-router";



export interface ItemCategory {
  Name: string;
  Groups: ItemGroup[];
}

export interface ItemGroup {
  Name: string;
  Icon: string;
  Items: ItemGroupEntry[];
}

export interface ItemGroupEntry{
  Name : string;
  ItemID: number;
  Icon: string | null;
}

function EntryToItemOption(parentGroup : ItemGroup, item : ItemGroupEntry) : ItemOption {
  return {value:item.ItemID.toString(),icon:parentGroup.Icon,label:item.Name}
}

const Items : ItemCategory[] = 
[
  {
    Name: "Raid Infusions",
    Groups: 
    [
      {
        Name:"Ghostly Infusion",
        Icon:"https://render.guildwars2.com/file/297E4B766AFB54E8FBA14A1970A495EAA558F630/1302736.png",
        Items:[
          {Name: "Ghostly Infusion (Concentration)", ItemID:85945, Icon:null},
          {Name: "Ghostly Infusion (Expertise)", ItemID:85644, Icon:null},
          {Name: "Ghostly Infusion (Toughness)", ItemID:77394, Icon:null},
          {Name: "Ghostly Infusion (Condition Damage)", ItemID:77366, Icon:null},
          {Name: "Ghostly Infusion (Precision)", ItemID:77316, Icon:null},
          {Name: "Ghostly Infusion (Power)", ItemID:77310, Icon:null},
          {Name: "Ghostly Infusion (Vitality)", ItemID:77303, Icon:null},
          {Name: "Ghostly Infusion (Healing Power)", ItemID:77274, Icon:null},
        ]
      },
      {
      "Name": "Peerless Infusion",
      "Icon": "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png",
      "Items": [
          {Name: "Peerless Infusion (Toughness)",ItemID: 91140,Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png"},
          {Name: "Peerless Infusion (ConditionDamage)",ItemID: 91152,Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png"},
          {Name: "Peerless Infusion (Vitality)",ItemID: 91154,Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png"},
          {Name: "Peerless Infusion (Precision)",ItemID: 91180,Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png"},
          {Name: "Peerless Infusion (Power)",ItemID: 91202,Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png"},
          {Name: "Peerless Infusion (Healing)",ItemID: 91210,Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png"},
          {Name: "Peerless Infusion (Concentration)",ItemID: 91221,Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png"},
          {Name: "Peerless Infusion (Expertise)",ItemID: 91236,Icon: "https://render.guildwars2.com/file/07D06928ED0B241D5111B7A8607EFF9BB0329405/2155911.png"}
      ]
      },
    ]
  },
  {
    Name:"Event Infusions",
    Groups:[
      {
        Name: "Chak Infusion",
        Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png",
        Items: [
            { Name: "Chak Infusion (Precision)", ItemID: 81616, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png" },
            { Name: "Chak Infusion (Healing)", ItemID: 81677, Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png"},
            {Name: "Chak Infusion (Condition Damage)",ItemID: 81807,Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png"},
            {Name: "Chak Infusion (Power)",ItemID: 81825,Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png"},
            {Name: "Chak Infusion (Toughness)",ItemID: 81840,Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png"},
            {Name: "Chak Infusion (Vitality)",ItemID: 82044,Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png"},
            {Name: "Chak Infusion (Expertise)",ItemID: 85668,Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png"},
            {Name: "Chak Infusion (Concentration)",ItemID: 86251,Icon: "https://render.guildwars2.com/file/FE73F012119252F1935797B2EC2C94482AB5A308/831485.png"}
        ]
        },
        { Name:"Liquid Aurillium Infusion",Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png",Items: [
          {Name: "Liquid Aurillium Infusion (Power)",ItemID: 81715,Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png"},
          {Name: "Liquid Aurillium Infusion (Precision)",ItemID: 81875,Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png"},
          {Name: "Liquid Aurillium Infusion (Healing)",ItemID: 81889,Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png"},
          {Name: "Liquid Aurillium Infusion (Toughness)",ItemID: 81918,Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png"},
          {Name: "Liquid Aurillium Infusion (Vitality)",ItemID: 81975,Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png"},
          {Name: "Liquid Aurillium Infusion (Condition Damage)",ItemID: 82006,Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png"},
          {Name: "Liquid Aurillium Infusion (Concentration)",ItemID: 86275,Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png"},
          {Name: "Liquid Aurillium Infusion (Expertise)",ItemID: 86291,Icon: "https://render.guildwars2.com/file/A66CEF1B9C032C240EDB9077FCD53493CD5AC6B9/1203050.png"}
      ]},
      {Name: "Preserved Queen Bee",Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png",Items: [
        {Name: "Queen Bee Infusion (Precision)",ItemID: 81638,Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png"},
        {Name: "Queen Bee Infusion (Power)",ItemID: 81663,Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png"},
        {Name: "Queen Bee Infusion (Healing)",ItemID: 81679,Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png"},
        {Name: "Queen Bee Infusion (Condition Damage)",ItemID: 81701,Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png"},
        {Name: "Queen Bee Infusion (Toughness)",ItemID: 81818,Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png"},
        {Name: "Queen Bee Infusion (Concentration)",ItemID: 86055,Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png"},
        {Name: "Queen Bee Infusion (Vitality)",ItemID: 81897,Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png"},
        {Name: "Queen Bee Infusion (Expertise)",ItemID: 86303,Icon: "https://render.guildwars2.com/file/01C5A7B5B0B01C3605090750B44B760F70C07A05/831489.png"}
    ]},
      {Name: "Festive Confetti Infusion",Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png",Items: [
        {Name: "Festive Confetti Infusion (Power)",ItemID: 84882,Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png"},
        {Name: "Festive Confetti Infusion (Precision)",ItemID: 84937,Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png"},
        {Name: "Festive Confetti Infusion (Toughness)",ItemID: 84959,Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png"},
        {Name: "Festive Confetti Infusion (Vitality)",ItemID: 84970,Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png"},
        {Name: "Festive Confetti Infusion (Healing)",ItemID: 85033,Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png"},
        {Name: "Festive Confetti Infusion (Concentration)",ItemID: 85996,Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png"},
        {Name: "Festive Confetti Infusion (Expertise)",ItemID: 85900,Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png"},
        {Name: "Festive Confetti Infusion (Condition Damage)",ItemID: 84871,Icon: "https://render.guildwars2.com/file/00ED7EC9BB0A01045205ED6144FB24E9189B25C2/1822094.png"}
    ]},
    {Name: "Crystal Infusion of Vitality",Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png",Items: [
        {Name: "Crystal Infusion of Vitality (Vitality)",ItemID: 88522,Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png"},
        {Name: "Crystal Infusion of Healing (Healing)",ItemID: 88603,Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png"},
        {Name: "Crystal Infusion of Toughness (Toughness)",ItemID: 88683,Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png"},
        {Name: "Crystal Infusion of Condition Damage (ConditionDamage)",ItemID: 88732,Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png"},
        {Name: "Crystal Infusion of Boon Duration (Concentration)",ItemID: 88770,Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png"},
        {Name: "Crystal Infusion of Power (Power)",ItemID: 88771,Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png"},
        {Name: "Crystal Infusion of Precision (Precision)",ItemID: 88871,Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png"},
        {Name: "Crystal Infusion of Condition Duration (Expertise)",ItemID: 88876,Icon: "https://render.guildwars2.com/file/A23305DCB835FFA4A42FB3963CE9C6D37D02419E/2038602.png"}
    ]},
    {Name: "Heart of the Khan-Ur",Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png",Items: [
        {Name: "Heart of the Khan-Ur (Vitality)",ItemID: 91897,Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png"},
        {Name: "Heart of the Khan-Ur (Precision)",ItemID: 91923,Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png"},
        {Name: "Heart of the Khan-Ur (Power)",ItemID: 91930,Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png"},
        {Name: "Heart of the Khan-Ur (Expertise)",ItemID: 91996,Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png"},
        {Name: "Heart of the Khan-Ur (Healing)",ItemID: 92018,Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png"},
        {Name: "Heart of the Khan-Ur (Toughness)",ItemID: 92023,Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png"},
        {Name: "Heart of the Khan-Ur (ConditionDamage)",ItemID: 92073,Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png"},
        {Name: "Heart of the Khan-Ur (Concentration)",ItemID: 92075,Icon: "https://render.guildwars2.com/file/02F3397EAE11AB1B48FD4A9A4ECA6B480AA1FF5B/2199305.png"}
    ]},
    {Name: "Deldrimor Stoneskin Infusion",Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png",Items: [
        {Name: "Deldrimor Stoneskin Infusion (Precision)",ItemID: 94481,Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png"},
        {Name: "Deldrimor Stoneskin Infusion (Healing)",ItemID: 94484,Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png"},
        {Name: "Deldrimor Stoneskin Infusion (Expertise)",ItemID: 94487,Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png"},
        {Name: "Deldrimor Stoneskin Infusion (Power)",ItemID: 94543,Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png"},
        {Name: "Deldrimor Stoneskin Infusion (ConditionDamage)",ItemID: 94572,Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png"},
        {Name: "Deldrimor Stoneskin Infusion (Vitality)",ItemID: 94583,Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png"},
        {Name: "Deldrimor Stoneskin Infusion (Concentration)",ItemID: 94584,Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png"},
        {Name: "Deldrimor Stoneskin Infusion (Toughness)",ItemID: 94609,Icon: "https://render.guildwars2.com/file/0817BB3CE7CA34E2C9C0A759007D57F634D30F9D/2388250.png"}
    ]}
    ]
  }, 
  {
    Name:"Achievement Infusions",
    Groups:[
      {Name: "Koda's Warmth Enrichment",Icon: "https://render.guildwars2.com/file/5D697C4321A3426930CF50192318564908A10BD6/1601467.png",Items: [
        {Name: "Koda's Warmth Enrichment",ItemID: 79926,Icon: "https://render.guildwars2.com/file/5D697C4321A3426930CF50192318564908A10BD6/1601467.png"},
      ]},
      {Name: "Otter's Blessing Enrichment",Icon: "https://render.guildwars2.com/file/919D017EA52BD7D0E6777208C2CE0EA3C19FA8CE/2314414.png",Items: [
        {Name: "Otter's Blessing Enrichment",ItemID: 93798,Icon: "https://render.guildwars2.com/file/919D017EA52BD7D0E6777208C2CE0EA3C19FA8CE/2314414.png"},
      ]},
      {Name: "Celebratory Birthday Enrichment",Icon: "https://render.guildwars2.com/file/77E54B90EFFEAD576125E8917EF8032CFC26604B/2323869.png",Items: [
        {Name: "Celebratory Birthday Enrichment",ItemID: 93953,Icon: "https://render.guildwars2.com/file/77E54B90EFFEAD576125E8917EF8032CFC26604B/2323869.png"},
      ]},
      {Name: "Frost Legion Infusion",Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png",Items: [
        {Name: "Frost Legion Infusion (ConditionDamage)",ItemID: 93720,Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png"},
        {Name: "Frost Legion Infusion (Healing)",ItemID: 93758,Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png"},
        {Name: "Frost Legion Infusion (Toughness)",ItemID: 93773,Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png"},
        {Name: "Frost Legion Infusion (Concentration)",ItemID: 93775,Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png"},
        {Name: "Frost Legion Infusion (Power)",ItemID: 93829,Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png"},
        {Name: "Frost Legion Infusion (Expertise)",ItemID: 93858,Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png"},
        {Name: "Frost Legion Infusion (Precision)",ItemID: 93906,Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png"},
        {Name: "Frost Legion Infusion (Vitality)",ItemID: 93920,Icon: "https://render.guildwars2.com/file/3A7D117EDAF805376A78340134062A7170319548/2314088.png"}
    ]},
    {Name: "Jormag Left Eye Infusion",Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png",Items: [
        {Name: "Jormag Left Eye Infusion (Power)",ItemID: 94929,Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png"},
        {Name: "Jormag Left Eye Infusion (Concentration)",ItemID: 94937,Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png"},
        {Name: "Jormag Left Eye Infusion (Vitality)",ItemID: 94944,Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png"},
        {Name: "Jormag Left Eye Infusion (Healing)",ItemID: 94949,Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png"},
        {Name: "Jormag Left Eye Infusion (ConditionDamage)",ItemID: 94954,Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png"},
        {Name: "Jormag Left Eye Infusion (Toughness)",ItemID: 94963,Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png"},
        {Name: "Jormag Left Eye Infusion (Expertise)",ItemID: 94969,Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png"},
        {Name: "Jormag Left Eye Infusion (Precision)",ItemID: 94980,Icon: "https://render.guildwars2.com/file/E6C14E380D0227433290C80B2DEA0B7F71A2B266/2433076.png"}
    ]},
    {Name: "Jormag Right Eye Infusion",Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png",Items: [
        {Name: "Jormag Right Eye Infusion (Healing)",ItemID: 94934,Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png"},
        {Name: "Jormag Right Eye Infusion (Vitality)",ItemID: 94938,Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png"},
        {Name: "Jormag Right Eye Infusion (Power)",ItemID: 94946,Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png"},
        {Name: "Jormag Right Eye Infusion (Concentration)",ItemID: 94948,Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png"},
        {Name: "Jormag Right Eye Infusion (ConditionDamage)",ItemID: 94958,Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png"},
        {Name: "Jormag Right Eye Infusion (Toughness)",ItemID: 94962,Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png"},
        {Name: "Jormag Right Eye Infusion (Expertise)",ItemID: 94972,Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png"},
        {Name: "Jormag Right Eye Infusion (Precision)",ItemID: 94979,Icon: "https://render.guildwars2.com/file/3A07E9A22A7BC340A7CD0BAB2C435EDE42F0614D/2433077.png"}
    ]},
    {Name: "Primordus Left Eye Infusion",Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png",Items: [
        {Name: "Primordus Left Eye Infusion (Precision)",ItemID: 94935,Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png"},
        {Name: "Primordus Left Eye Infusion (Healing)",ItemID: 94943,Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png"},
        {Name: "Primordus Left Eye Infusion (Expertise)",ItemID: 94951,Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png"},
        {Name: "Primordus Left Eye Infusion (Toughness)",ItemID: 94957,Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png"},
        {Name: "Primordus Left Eye Infusion (ConditionDamage)",ItemID: 94964,Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png"},
        {Name: "Primordus Left Eye Infusion (Concentration)",ItemID: 94965,Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png"},
        {Name: "Primordus Left Eye Infusion (Vitality)",ItemID: 94970,Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png"},
        {Name: "Primordus Left Eye Infusion (Power)",ItemID: 94978,Icon: "https://render.guildwars2.com/file/497107FC62B268BB1453DE39C0D9CC781CE8A80A/2433078.png"}
    ]},
    {Name: "Primordus Right Eye Infusion",Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png",Items: [
        {Name: "Primordus Right Eye Infusion (Concentration)",ItemID: 94928,Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png"},
        {Name: "Primordus Right Eye Infusion (Healing)",ItemID: 94930,Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png"},
        {Name: "Primordus Right Eye Infusion (Expertise)",ItemID: 94939,Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png"},
        {Name: "Primordus Right Eye Infusion (ConditionDamage)",ItemID: 94941,Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png"},
        {Name: "Primordus Right Eye Infusion (Vitality)",ItemID: 94952,Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png"},
        {Name: "Primordus Right Eye Infusion (Power)",ItemID: 94955,Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png"},
        {Name: "Primordus Right Eye Infusion (Precision)",ItemID: 94971,Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png"},
        {Name: "Primordus Right Eye Infusion (Toughness)",ItemID: 94977,Icon: "https://render.guildwars2.com/file/F86B9BD3A92D2D31211274F908F0CC91B0DCD055/2433079.png"}
    ]}
    ]    
  },
  {
    Name:"Fractals of the Mists Infusions",
    Groups:[
      {Name: "Celestial Infusion (Blue)",Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png",Items: [
        {Name: "Celestial Infusion (Blue) (Precision)",ItemID: 81761,Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png"},
        {Name: "Celestial Infusion (Blue) (Toughness)",ItemID: 81779,Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png"},
        {Name: "Celestial Infusion (Blue) (Healing)",ItemID: 81811,Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png"},
        {Name: "Celestial Infusion (Blue) (Vitality)",ItemID: 81878,Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png"},
        {Name: "Celestial Infusion (Blue) (Power)",ItemID: 81919,Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png"},
        {Name: "Celestial Infusion (Blue) (ConditionDamage)",ItemID: 81991,Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png"},
        {Name: "Celestial Infusion (Blue) (Expertise)",ItemID: 85989,Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png"},
        {Name: "Celestial Infusion (Blue) (Concentration)",ItemID: 86347,Icon: "https://render.guildwars2.com/file/CDC035E50BDB51A2D14B0840792160620E0FE468/1729286.png"}
    ]},
    {Name: "Celestial Infusion (Red)",Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png",Items: [
        {Name: "Celestial Infusion (Red) (Power)",ItemID: 81783,Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png"},
        {Name: "Celestial Infusion (Red) (Precision)",ItemID: 81792,Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png"},
        {Name: "Celestial Infusion (Red) (Healing)",ItemID: 81814,Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png"},
        {Name: "Celestial Infusion (Red) (ConditionDamage)",ItemID: 81927,Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png"},
        {Name: "Celestial Infusion (Red) (Vitality)",ItemID: 82062,Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png"},
        {Name: "Celestial Infusion (Red) (Toughness)",ItemID: 82070,Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png"},
        {Name: "Celestial Infusion (Red) (Expertise)",ItemID: 85646,Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png"},
        {Name: "Celestial Infusion (Red) (Concentration)",ItemID: 85833,Icon: "https://render.guildwars2.com/file/E05108050955E3D4A50E9196C8A5CDFFB4D7C891/1729287.png"}
    ]},
    {Name: "Abyssal Infusion",Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png",Items: [
        {Name: "Abyssal Infusion (Expertise)",ItemID: 94010,Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png"},
        {Name: "Abyssal Infusion (Concentration)",ItemID: 94024,Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png"},
        {Name: "Abyssal Infusion (Healing)",ItemID: 94028,Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png"},
        {Name: "Abyssal Infusion (ConditionDamage)",ItemID: 94039,Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png"},
        {Name: "Abyssal Infusion (Power)",ItemID: 94078,Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png"},
        {Name: "Abyssal Infusion (Toughness)",ItemID: 94079,Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png"},
        {Name: "Abyssal Infusion (Vitality)",ItemID: 94090,Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png"},
        {Name: "Abyssal Infusion (Precision)",ItemID: 94091,Icon: "https://render.guildwars2.com/file/F43E6BBFD2FCA496616055ECFD489B6F29F2B30A/2332364.png"}
    ]}
    ]
  },
  {
    Name:"Halloween Infusions",
    Groups:[
      {Name: "Phospholuminescent Infusion",Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png",Items: [
        {Name: "Phospholuminescent Infusion (Precision)",ItemID: 79639,Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png"},
        {Name: "Phospholuminescent Infusion (Vitality)",ItemID: 79653,Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png"},
        {Name: "Phospholuminescent Infusion (Toughness)",ItemID: 79661,Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png"},
        {Name: "Phospholuminescent Infusion (Power)",ItemID: 79665,Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png"},
        {Name: "Phospholuminescent Infusion (Healing)",ItemID: 79669,Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png"},
        {Name: "Phospholuminescent Infusion (ConditionDamage)",ItemID: 79674,Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png"},
        {Name: "Phospholuminescent Infusion (Concentration)",ItemID: 85863,Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png"},
        {Name: "Phospholuminescent Infusion (Expertise)",ItemID: 85885,Icon: "https://render.guildwars2.com/file/0461C37EFE7D1C507174A226BA34AF160BE5C693/1508108.png"}
    ]},
    {Name: "Polyluminescent Undulating Infusion (Black)",Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png",Items: [
        {Name: "Polyluminescent Undulating Infusion (Black) (Toughness)",ItemID: 81624,Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png"},
        {Name: "Polyluminescent Undulating Infusion (Black) (Precision)",ItemID: 81709,Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png"},
        {Name: "Polyluminescent Undulating Infusion (Black) (Vitality)",ItemID: 81810,Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png"},
        {Name: "Polyluminescent Undulating Infusion (Black) (ConditionDamage)",ItemID: 81877,Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png"},
        {Name: "Polyluminescent Undulating Infusion (Black) (Power)",ItemID: 82013,Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png"},
        {Name: "Polyluminescent Undulating Infusion (Black) (Healing)",ItemID: 82039,Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png"},
        {Name: "Polyluminescent Undulating Infusion (Black) (Expertise)",ItemID: 85974,Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png"},
        {Name: "Polyluminescent Undulating Infusion (Black) (Concentration)",ItemID: 86248,Icon: "https://render.guildwars2.com/file/B4C6490CAE379BBD90EF68C00A2604477321B468/888378.png"}
    ]},
    {Name: "Polyluminescent Undulating Infusion (Green)",Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png",Items: [
        {Name: "Polyluminescent Undulating Infusion (Green) (Vitality)",ItemID: 81612,Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png"},
        {Name: "Polyluminescent Undulating Infusion (Green) (Power)",ItemID: 81678,Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png"},
        {Name: "Polyluminescent Undulating Infusion (Green) (Healing)",ItemID: 81727,Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png"},
        {Name: "Polyluminescent Undulating Infusion (Green) (Precision)",ItemID: 81948,Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png"},
        {Name: "Polyluminescent Undulating Infusion (Green) (Toughness)",ItemID: 81988,Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png"},
        {Name: "Polyluminescent Undulating Infusion (Green) (ConditionDamage)",ItemID: 82055,Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png"},
        {Name: "Polyluminescent Undulating Infusion (Green) (Concentration)",ItemID: 85682,Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png"},
        {Name: "Polyluminescent Undulating Infusion (Green) (Expertise)",ItemID: 86183,Icon: "https://render.guildwars2.com/file/97EDAF65FCECF802544DD54B36DC3A09323B254A/888374.png"}
    ]},
    {Name: "Polyluminescent Undulating Infusion (Orange)",Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png",Items: [
        {Name: "Polyluminescent Undulating Infusion (Orange) (Precision)",ItemID: 81809,Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png"},
        {Name: "Polyluminescent Undulating Infusion (Orange) (ConditionDamage)",ItemID: 81847,Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png"},
        {Name: "Polyluminescent Undulating Infusion (Orange) (Power)",ItemID: 81864,Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png"},
        {Name: "Polyluminescent Undulating Infusion (Orange) (Toughness)",ItemID: 81881,Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png"},
        {Name: "Polyluminescent Undulating Infusion (Orange) (Vitality)",ItemID: 81911,Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png"},
        {Name: "Polyluminescent Undulating Infusion (Orange) (Healing)",ItemID: 81930,Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png"},
        {Name: "Polyluminescent Undulating Infusion (Orange) (Expertise)",ItemID: 85694,Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png"},
        {Name: "Polyluminescent Undulating Infusion (Orange) (Concentration)",ItemID: 86310,Icon: "https://render.guildwars2.com/file/04050CC5764DC198D8126812E66305C676954F0C/888376.png"}
    ]},
    {Name: "Polyluminescent Undulating Infusion (Teal)",Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png",Items: [
        {Name: "Polyluminescent Undulating Infusion (Teal) (Vitality)",ItemID: 81641,Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png"},
        {Name: "Polyluminescent Undulating Infusion (Teal) (Power)",ItemID: 81653,Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png"},
        {Name: "Polyluminescent Undulating Infusion (Teal) (Precision)",ItemID: 81655,Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png"},
        {Name: "Polyluminescent Undulating Infusion (Teal) (ConditionDamage)",ItemID: 81777,Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png"},
        {Name: "Polyluminescent Undulating Infusion (Teal) (Toughness)",ItemID: 81858,Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png"},
        {Name: "Polyluminescent Undulating Infusion (Teal) (Healing)",ItemID: 81959,Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png"},
        {Name: "Polyluminescent Undulating Infusion (Teal) (Concentration)",ItemID: 86068,Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png"},
        {Name: "Polyluminescent Undulating Infusion (Teal) (Expertise)",ItemID: 86312,Icon: "https://render.guildwars2.com/file/7BB3BF57E1060C0A2919290FE03E04BA6B1EE950/1729284.png"}
    ]},
    {Name: "Polysaturating Reverberating Infusion (Gray)",Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png",Items: [
        {Name: "Polysaturating Reverberating Infusion (Gray) (ConditionDamage)",ItemID: 89007,Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png"},
        {Name: "Polysaturating Reverberating Infusion (Gray) (Expertise)",ItemID: 89012,Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png"},
        {Name: "Polysaturating Reverberating Infusion (Gray) (Precision)",ItemID: 89013,Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png"},
        {Name: "Polysaturating Reverberating Infusion (Gray) (Toughness)",ItemID: 89016,Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png"},
        {Name: "Polysaturating Reverberating Infusion (Gray) (Power)",ItemID: 89020,Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png"},
        {Name: "Polysaturating Reverberating Infusion (Gray) (Vitality)",ItemID: 89054,Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png"},
        {Name: "Polysaturating Reverberating Infusion (Gray) (Healing)",ItemID: 89074,Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png"},
        {Name: "Polysaturating Reverberating Infusion (Gray) (Concentration)",ItemID: 89078,Icon: "https://render.guildwars2.com/file/7CC8F41D1F3F320FD75F04CDE12E135B9E0F0DBC/2056191.png"}
    ]},
    {Name: "Polysaturating Reverberating Infusion (Red)",Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png",Items: [
        {Name: "Polysaturating Reverberating Infusion (Red) (Healing)",ItemID: 89026,Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png"},
        {Name: "Polysaturating Reverberating Infusion (Red) (Precision)",ItemID: 89028,Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png"},
        {Name: "Polysaturating Reverberating Infusion (Red) (Concentration)",ItemID: 89032,Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png"},
        {Name: "Polysaturating Reverberating Infusion (Red) (Vitality)",ItemID: 89034,Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png"},
        {Name: "Polysaturating Reverberating Infusion (Red) (Expertise)",ItemID: 89052,Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png"},
        {Name: "Polysaturating Reverberating Infusion (Red) (Power)",ItemID: 89059,Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png"},
        {Name: "Polysaturating Reverberating Infusion (Red) (ConditionDamage)",ItemID: 89071,Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png"},
        {Name: "Polysaturating Reverberating Infusion (Red) (Toughness)",ItemID: 89075,Icon: "https://render.guildwars2.com/file/F31FD3154C9E41EDB6D124EFEFA2B3F4EA455069/2056193.png"}
    ]},
    {Name: "Polysaturating Reverberating Infusion (Purple)",Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png",Items: [
        {Name: "Polysaturating Reverberating Infusion (Purple) (Toughness)",ItemID: 89005,Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png"},
        {Name: "Polysaturating Reverberating Infusion (Purple) (Precision)",ItemID: 89017,Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png"},
        {Name: "Polysaturating Reverberating Infusion (Purple) (Vitality)",ItemID: 89037,Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png"},
        {Name: "Polysaturating Reverberating Infusion (Purple) (Healing)",ItemID: 89039,Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png"},
        {Name: "Polysaturating Reverberating Infusion (Purple) (Expertise)",ItemID: 89042,Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png"},
        {Name: "Polysaturating Reverberating Infusion (Purple) (Concentration)",ItemID: 89049,Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png"},
        {Name: "Polysaturating Reverberating Infusion (Purple) (Power)",ItemID: 89063,Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png"},
        {Name: "Polysaturating Reverberating Infusion (Purple) (ConditionDamage)",ItemID: 89070,Icon: "https://render.guildwars2.com/file/6F6759D3E6D043A3DAC3D6F13AE1DA2F7F227C1A/2056192.png"}
    ]},
    {Name: "Ember Infusion",Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png",Items: [
      {Name: "Ember Infusion (Healing)",ItemID: 89010,Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png"},
      {Name: "Ember Infusion (Vitality)",ItemID: 89015,Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png"},
      {Name: "Ember Infusion (Precision)",ItemID: 89038,Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png"},
      {Name: "Ember Infusion (Expertise)",ItemID: 89021,Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png"},
      {Name: "Ember Infusion (Concentration)",ItemID: 89040,Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png"},
      {Name: "Ember Infusion (Toughness)",ItemID: 89046,Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png"},
      {Name: "Ember Infusion (ConditionDamage)",ItemID: 89065,Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png"},
      {Name: "Ember Infusion (Power)",ItemID: 89060,Icon: "https://render.guildwars2.com/file/23E1D56F0BD61D0958DC60BA770B1DB0AC02270E/2056190.png"}
  ]}
  ]},
  {
    Name:"Super Adventure Box Infusions",
    Groups:[
      {Name: "Moto's Unstable Bauble Infusion: Blue",Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png",Items: [
        {Name: "Moto's Unstable Bauble Infusion: Blue (ConditionDamage)",ItemID: 78012,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Blue (Power)",ItemID: 78052,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Blue (Precision)",ItemID: 78054,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Blue (Healing)",ItemID: 78079,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Blue (Toughness)",ItemID: 78086,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Blue (Vitality)",ItemID: 78090,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Blue (Concentration)",ItemID: 86552,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Blue (Expertise)",ItemID: 86571,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"}
    ]},
    {Name: "Moto's Unstable Bauble Infusion: Red",Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png",Items: [
        {Name: "Moto's Unstable Bauble Infusion: Red (Healing)",ItemID: 78016,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Red (Power)",ItemID: 78028,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Red (Toughness)",ItemID: 78030,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Red (Precision)",ItemID: 78031,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Red (ConditionDamage)",ItemID: 78057,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Red (Vitality)",ItemID: 78097,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Red (Concentration)",ItemID: 86446,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"},
        {Name: "Moto's Unstable Bauble Infusion: Red (Expertise)",ItemID: 86453,Icon: "https://render.guildwars2.com/file/AE5AE77B1B291BA6A418B9F80B43CF3D437D0806/561983.png"}
    ]}
    ]
  },
  {
    Name:"Wintersday Infusions",
    Groups:[
      {Name: "Winter's Heart Infusion",Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png",Items: [
        {Name: "Winter's Heart Infusion (Vitality)",ItemID: 79943,Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png"},
        {Name: "Winter's Heart Infusion (Precision)",ItemID: 79957,Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png"},
        {Name: "Winter's Heart Infusion (Power)",ItemID: 79959,Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png"},
        {Name: "Winter's Heart Infusion (Healing)",ItemID: 79978,Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png"},
        {Name: "Winter's Heart Infusion (ConditionDamage)",ItemID: 79994,Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png"},
        {Name: "Winter's Heart Infusion (Toughness)",ItemID: 80063,Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png"},
        {Name: "Winter's Heart Infusion (Concentration)",ItemID: 85718,Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png"},
        {Name: "Winter's Heart Infusion (Expertise)",ItemID: 85734,Icon: "https://render.guildwars2.com/file/EE68160F571F59549B02CA246ED9742CEDCC9AB6/1614397.png"}
    ]},
    {Name: "Snow Diamond Infusion",Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png",Items: [
        {Name: "Snow Diamond Infusion (Power)",ItemID: 86401,Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png"},
        {Name: "Snow Diamond Infusion (Healing)",ItemID: 86405,Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png"},
        {Name: "Snow Diamond Infusion (Precision)",ItemID: 86407,Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png"},
        {Name: "Snow Diamond Infusion (ConditionDamage)",ItemID: 86537,Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png"},
        {Name: "Snow Diamond Infusion (Vitality)",ItemID: 86597,Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png"},
        {Name: "Snow Diamond Infusion (Expertise)",ItemID: 86665,Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png"},
        {Name: "Snow Diamond Infusion (Concentration)",ItemID: 86666,Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png"},
        {Name: "Snow Diamond Infusion (Toughness)",ItemID: 86704,Icon: "https://render.guildwars2.com/file/E36E4F18FBF1A3ACEC095F75FAEC1DD937DCFF03/1914822.png"}
    ]},
    {Name: "Toy-Shell Infusion",Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png",Items: [
        {Name: "Toy-Shell Infusion (Precision)",ItemID: 89382,Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png"},
        {Name: "Toy-Shell Infusion (Concentration)",ItemID: 89391,Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png"},
        {Name: "Toy-Shell Infusion (ConditionDamage)",ItemID: 89411,Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png"},
        {Name: "Toy-Shell Infusion (Power)",ItemID: 89401,Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png"},
        {Name: "Toy-Shell Infusion (Expertise)",ItemID: 89413,Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png"},
        {Name: "Toy-Shell Infusion (Vitality)",ItemID: 89415,Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png"},
        {Name: "Toy-Shell Infusion (Healing)",ItemID: 89426,Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png"},
        {Name: "Toy-Shell Infusion (Toughness)",ItemID: 89427,Icon: "https://render.guildwars2.com/file/EA2CD818C94A04C3C8E5C9979176FEF421020116/2075492.png"}
    ]}
    ]
  },
  {
    Name: "Mystic Forge Infusions",
    Groups:[
      {Name: "Mystic Infusion",Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png",Items: [
        {Name: "Mystic Infusion (Vitality)",ItemID: 90966,Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png"},
        {Name: "Mystic Infusion (Concentration)",ItemID: 90977,Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png"},
        {Name: "Mystic Infusion (ConditionDamage)",ItemID: 90982,Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png"},
        {Name: "Mystic Infusion (Precision)",ItemID: 91050,Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png"},
        {Name: "Mystic Infusion (Toughness)",ItemID: 91054,Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png"},
        {Name: "Mystic Infusion (Healing)",ItemID: 91086,Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png"},
        {Name: "Mystic Infusion (Expertise)",ItemID: 91099,Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png"},
        {Name: "Mystic Infusion (Power)",ItemID: 91111,Icon: "https://render.guildwars2.com/file/DD1E30FED53C992C0679B3A5030FC1B92FE56423/1766870.png"}
    ]}
    ]
  }
]




export default function ItemLists() {

  let navigate = useNavigate();

  function OnSearchAllFromGroup(group : ItemGroup){
    let items : ItemOption[] = [];
    for (let i = 0; i < group.Items.length; i++) {
      const element = group.Items[i];
      items.push({icon:group.Icon,value:element.ItemID.toString(),label:element.Name});  
    }
   
    // let navigate = useNavigate();
    navigate("/",{ replace: true,state: {bShouldFetchOnLoad: true, ItemsToFetch: items}});
  
  
  }
  
  function OnSearchIndividual(item: ItemGroupEntry, parentGroup: ItemGroup){
    let items : ItemOption[] = [];
    items.push({value:item.ItemID.toString(),label:item.Name,icon:parentGroup.Icon});
    //let navigate = useNavigate();
    navigate("/",{ replace: true,state: {bShouldFetchOnLoad: true, ItemsToFetch: items}});
  }

  return (
    <>
    <div className="bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp">
          <div className="h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"><h2 className="text-md">Quick Search</h2></div>
          <div className="p-4 text-xs text-white">

          {Items.map(Category=>
            <ItemListCategory key={Category.Name} category={Category} onClickIndividual={OnSearchIndividual} onClickSearchAll={OnSearchAllFromGroup}></ItemListCategory>
          )}
          
          </div>
      </div>
      </>
  );
}
  