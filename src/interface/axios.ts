import {Common} from './common';

export interface Res extends Common {
  list: any[];
}

export interface Err extends Common {
  errorMsg: string;
  errorCode: number;
  result: number; 
}

export interface Any { 
  [prop: string]: any;
}

// parentDictId
// String
// 父节点ID
// dictId
// String
// 数据字典ID
// weight
// Number
// 权重
// val
// String
// 值
// children