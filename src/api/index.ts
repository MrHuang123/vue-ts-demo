import request from '@/axios/axios.ts';
import myserver from '../axios/getrequest'
import { Common } from '@/interface/common';
import login from './login';
//api层封装
//接口api化
//请求自动绑定 方便+自定义空间
//防止重复提交
myserver.parseRouter('login',login)