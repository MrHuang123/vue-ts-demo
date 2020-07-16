import axios from './axios';
import Vue from "vue";

function myserver(){
    this.http = axios;
}
myserver.prototype.parseRouter = function(name:string,urlOb:any):void{
    var ob:any = this[name] = {};
    //var ob = {}
    //this[name] = ob
    Object.keys(urlOb).forEach((item:any)=>{
        ob[item] = this.sendMes.bind(this,name,item,urlOb[item]);
    })
}
myserver.prototype.v = function(ob){
    if(ob instanceof Vue){
        this.nowhandle = ob;
        return this
    }esel{
        console.warning();
    }
}
myserver.prototype.sendMes = function(moduleName:any,name:any,url:any,config:any){
    //健壮性
    var config = config||{};
    var type = config.type||'get';
    var data = config.data||{};
    var bindName = config.bindName||name;
    var self = this;
    //正式处理前-正式处理
    var before = function(mes:any){
        return mes;
    }
    var defaultFn = function(mes:any){
        self.nowhandle[bindName] = mes.data;
    }
    var success = config.success||defaultFn;
    var callback = function(res:any){
        success(res,defaultFn);
    }
    var state = {
        get:function(){
            var urlqs = url+'?'+qs.stringfy(data)
            axios.get(urlqs).then(before).then(callback)
        }
    }
}

export default myserver

