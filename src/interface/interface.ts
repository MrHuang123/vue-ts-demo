//接口
interface  Istate {
    name:string,
    age:number
}

interface  Istate_2 {
    name:string,
    age?:number //存疑 可有可无
}

//不确定属性个数 any必须是任意类型
interface  Istate_3 {
    name:string,
    age?:number,//存疑 可有可无
    [propName:string]:any
}

//只读属性
interface  Istate_4 {
    name:string,
    readonly age:number
}

var obj:Istate_4 = {
    name:'112',
    age:2131
}
