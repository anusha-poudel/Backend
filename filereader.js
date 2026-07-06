import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const [,, filename] = process.argv;//skip 1st 2 then 3rd is the filename store it

if (!filename) {
  console.log('Filename here: node file-info.js <filename>');
  process.exit(1);
}

const fullPath = path.join(__dirname, filename);

try {
  const data = await fs.readFile(fullPath, 'utf8');

  console.log('File Info');
  console.log(`Name    : ${path.basename(fullPath)}`);
  console.log(`Ext     : ${path.extname(fullPath)}`);
  console.log(`Dir     : ${path.dirname(fullPath)}`);
  console.log(`Lines   : ${data.split('\n').length}`);

  console.log('\nSystem Info ');
  console.log(`OS      : ${os.platform()}`);
  console.log(`Host    : ${os.hostname()}`);
  console.log(`Free RAM: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);

  console.log('\nContent');
  console.log(data);

} catch (err) {
  console.log('Error reading file:', err.message);
}

