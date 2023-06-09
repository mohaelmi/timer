
function alarm() {
  let arguments = process.argv.slice(2);
  if (arguments.length < 1) {
    console.log('no alarm number recieved');
    return;
  }

  for (let num of arguments) {
    const delay = Number(num + '000');
    if (!delay) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);

  }

}


alarm();
