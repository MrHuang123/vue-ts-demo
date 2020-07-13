var num_2:any = 3;
num_2 = '3213'


//数组表示法

//可采用数组泛型 Array <elemType>
var arrType:Array <string> = ['1','2']
var arrType_2:Array <number> = [1,2,3]
var arrType_3:Array <any> = [1,2,3,'2',true]

//可采用接口表示法

interface IArr {
    [index:number]:number
}
var arrType_4:IArr = [1,2,3]
interface Istate {
    name:string,
    age:number
}
interface IArr_1 {
    [index:number]:Istate
}
var arrType_5:IArr_1 = [{name:'121',age:31312}]

//函数类型
//函数约束 有函数约束本身

//声明式类型函数
function funcType(name:string,age:number):number{
    return age
}
//函数参数不确定
function funcType2(name:string,age:number,sex?:string):number{
    return age
}
//函数参数默认值


//表达式类型得函数

//对于联合类型得函数，r可以采用重载得方式
function getValue(value:string|number):string|number{
    return value
}


//类型断言
function getAssort(name:string|number){
    // return (<string>name).length
    return (name as string).length//在jsx种必须用这种
}
//类型别名

//枚举
//使用枚举可以定义一些有名字得数字常量
enum Days{
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
}
//类型修饰

//泛型