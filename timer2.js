function interactiveAlarm() {
  let arguments = process.argv.slice(2);
  if (arguments.length < 1) {
    console.log('no alarm number recieved');
    return;
  }

  if(arguments.includes('b')) {
    process.stdout.write('\x07');
    return;
  }
  
  let delay = Number(arguments)

  if(delay < 1 || delay > 9){
    console.log('not good');
    return; 
  }
  console.log(`setting timer for ${delay} seconds...`)
  
  delay = Number(delay + '000')
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay)

}


interactiveAlarm()