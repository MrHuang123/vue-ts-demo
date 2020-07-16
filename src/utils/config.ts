const env = location.host.includes('credit100.com')?'pro':location.host.includes('localhost')?'local':'dev';
const isPro = env=== 'pro';

(window as any).config = {
    env,
    baseUrl: isPro ? 'https://zuul.credit100.com/api-other' : 'http://xinhuaxinyong.iol8.com/api-other',
    apiUrl:  isPro ? 'https://zuul.credit100.com/api-uc' : 'http://xinhuaxinyong.iol8.com/api-uc',  
}