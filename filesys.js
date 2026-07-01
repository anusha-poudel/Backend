//sync
import { appendFile, appendFileSync } from 'node:fs';

try {
  appendFileSync('notes.txt', 'Hi, this is the data to append');
  console.log('The "data to append" was appended to file!');
} catch (err) {
    console.log("Error:", err);
}

//async

appendFile('notes.txt', 'data to append', (err) => {
  if (err){
     throw err;
  }else{
  console.log("Data appended.");
  }
});

//using promises:(allows writing async code that reads like sync)

try{
    appendFileSync('notes.txt', 'sync promises');
    console.log("appended");
} catch(err)
{
    console.log(err);
}

appendFile('notes.txt', 'callback data to append', (err) => {
  if (err){
     throw err;
  }else{
  console.log("Data appended.");
  }
});