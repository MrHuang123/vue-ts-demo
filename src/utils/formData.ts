//  默认导出ajax请求参数 格式为form data
export default (data:any)=>{
    let arr:Array <any> = [];
    for(let name in data){
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".", ""))
    return arr.join('&');
}