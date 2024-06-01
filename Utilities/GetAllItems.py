import requests
import sqlite3
import os
import time
import threading

class ItemGetter():
    dbCon = None
    dbCursor = None

    def __init__(self):

        if os.path.isfile("./items.db"):
            os.remove("./items.db")
        self.dbCon = sqlite3.connect("./items.db")
        self.dbCursor = self.dbCon.cursor()

        self.dbCursor.execute("CREATE TABLE items(id,name,icon)")


        
    def get_available_items(self):  
        url = "https://api.guildwars2.com/v2/items/"
        payload={}
        headers = {}
        response = requests.request("GET", url, headers=headers, data=payload)
        if(response.status_code != 200):
            print("HTTP Error in get_available_items:")
            print(response.reason)
            raise ValueError("HTTP Error")
        else:
            data = response.json()
            return data

    def get_items_from_idarray(self,ids):
        
        idString = ""
        for id in ids:
            idString += str(id) + ","
        url = "https://api.guildwars2.com/v2/items?ids="+idString
        payload={}
        headers = {}
        response = requests.request("GET", url, headers=headers, data=payload)
        if(response.status_code != 200 and response.status_code != 206):
            print("HTTP Error in get_items_from_id_array:")
            print(response.reason)
            raise ValueError("HTTP Error")
        else:
            data = response.json()
            return data

    def paste_items_to_db(self,item_data_arr):
        #itemsString=""
        data = []
        for item in item_data_arr:
            if "icon" in item:
                data.append((item["id"],item["name"],item["icon"]))
            #itemstring = "({0},'{1}','{2}'),".format(item["id"],item["name"],item["icon"])
            #itemsString += itemstring

        #itemsString = itemsString[0:-1] # cut off last
        #print(itemsString)
        #dbCursor.execute("""INSERT INTO items VALUES """ + itemsString)
        #print(data)
        self.dbCursor.executemany("INSERT INTO items VALUES(?,?,?)", data)
        self.dbCon.commit()


    def Close(self):
        self.dbCon.close()


getter = ItemGetter()

all_item_ids = getter.get_available_items()
x = 0
len_ids = len(all_item_ids)
sleeptime = 5
while x < len_ids:
    try:
        print("Processing items {0} of {1}".format(x,len_ids))
        step = 199
        if x + step > len_ids:
            step = len_ids-x
        items = getter.get_items_from_idarray(all_item_ids[x:x+step])
        getter.paste_items_to_db(items)
        sleeptime = 5
        x+=step    
    except:
        print("Step {0} to {1} failed... retrying in {2} seconds...".format(x,x+step,sleeptime))
        time.sleep(sleeptime)
        sleeptime = min(sleeptime*2,600)

getter.Close()


#startIndex = 28766
#with open('./itemData.txt',"a") as f:
#    for i in range(startIndex,len(itemslist)):
#        url = "https://api.guildwars2.com/v2/items/" + str(itemslist[i])
#        payload={}
#        headers = {}
#        response = requests.request("GET", url, headers=headers, data=payload)
#        data = response.json()
#        if("icon" in data):
#            line = str(i) + "|" + str(itemslist[i]) + "|" + data["name"] +"|"+data["icon"] + "\n"
#            print(line)
#            f.write(line)
#            f.flush()




