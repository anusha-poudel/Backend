import os from 'os';

console.log(`Platform: ${os.platform()}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Type: ${os.type()}`);
console.log(`Release: ${os.release()}`);

const totalmemgb = (os.totalmem()/ (1024* 1024* 1024)).toFixed(2);
const freememgb = (os.freemem()/ (1024* 1024* 1024)).toFixed(2);

console.log(`${freememgb}GB free out of ${totalmemgb}GB`);

const userinfo = os.userInfo();
console.log(`username: ${userinfo.username}`);
console.log(`home dir: ${os.homedir()}`);