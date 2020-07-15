export interface Common {
    [propName:string]:any//不确定属性个数 any必须是任意类型
}

export interface Route extends Common {
    name: string;
    path: string;
}