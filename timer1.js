//grabs time arguments from command line starting at index 2 because the first two will be node timer1.js
const time = process.argv.slice(2);

//iterates over time array
for (let i = 0; i < time.length; i++) {
  //if time is more than 0 seconds, alarm will sound. (excludes - #'s or if type is not a number or if no number is enter as argument)
  if (time[i] > 0) {
    setTimeout(() => {
    //makes sound
      process.stdout.write('\x07');
      //takes the function and argument time ex: 3000ms (3s) x 1000ms (1s)
    }, time[i] * 1000);
  }
}

