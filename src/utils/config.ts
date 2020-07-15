const env = location.host.includes('credit100.com')?'pro':location.host.includes('localhost')?'local':'dev';
const isPro = env=== 'pro';

(window as any).config = {
    env,
    baseUrl: isPro ? 'http://edu.transn.com' : 'http://dev-college.iol8.net',
    apiUrl:  isPro ? 'http://edu.transn.com' : 'http://dev-college.iol8.net',  
}