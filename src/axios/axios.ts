import Vue from 'vue';
import axios from 'axios';
import transformRequest from '@/utils/formData';
import { Res, Err} from '@/interface/axios';
import { Common } from '@/interface/common';
import '@/utils/config';

const http:any = axios.create({
    method:'post',
    url:(window as any).config.baseUrl,
    transformRequest,
})
http.interceptors.request.use(
    (config:Common)=>{
        config.method = config.url.includes('type=get') ? 'get' : 'post';
        config.url.includes('json=1') && (config.transformRequest=(data: Common)=>JSON.stringify(data),config.headers={"Content-Type": 'application/json'});
        config.url.includes('responseType=arraybuffer') && (config.responseType = 'arraybuffer' )
        !config.url.includes('timeout=no') && (config.timeout=10000);

        return config;
    },
    (error:Common)=>{
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    (res:Common)=>{
        if(res.status === 200&&Number(res.data.code) === 200){
            return Promise.resolve(res.data.data);
        }else if(res.status === 200 && Number(res.data.result) !== 0 && res.config.url.includes('responseType=arraybuffer')){//下载流文件
            const fileName = decodeURI(res.headers['content-disposition'].split('filename=')[1]);
            const link = document.createElement('a')
            let blob = new Blob([res.data], {type: "application/vnd.ms-excel"})
            let objectUrl = URL.createObjectURL(blob) // 创建URL
            link.href = objectUrl;
            link.download = fileName; // 自定义文件名
            link.click(); // 下载文件
            URL.revokeObjectURL(objectUrl); // 释放内存
        }else{
            
        }
    },
    (err:Common)=>{
        return Promise.reject(err)
    }
)

export default http ;