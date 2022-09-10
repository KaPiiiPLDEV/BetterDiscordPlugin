/**
 * @name first plugin
 * @version 1.2.0
 * @description My first plugin
 * @author KaPii
 * 
 * @source https://raw.githubusercontent.com/KaPiiiPLDEV/BetterDiscordPlugin/main/myfirstplugin.plugin.js
 * @updateUrl https://raw.githubusercontent.com/KaPiiiPLDEV/BetterDiscordPlugin/main/myfirstplugin.plugin.js
 */
 

 module.exports = class hello{
    unload() {BdApi.alert("bruh")};
    load() {};
    start() {
    const BdApi = window.BdApi;
    BdApi.alert("Hello! This is my first better discord plugin. its hard to make this");
    BdApi.showToast("Thanks for using my first plugin! - From KaPiii");
    

    
    };
stop(){
BdApi.alert("wy u disable my stuff", "unless ur saving some change in my coed, there shuld be no need for dat!");
};
};
