
function alarm(delays) {
  if (delays.length < 1) {
    console.log('no alarm number recieved');
    return;
  }
  
  for (let num of delays) {
    const delay = Number(num + '000');
    if (!delay) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
    
  }
  
}

let arguments = process.argv.slice(2);

alarm(arguments);
