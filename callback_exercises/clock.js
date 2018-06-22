
const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // this.printTime.call({hours: this.hours, minutes: this.minutes, seconds: this.seconds});
    // 4. Schedule the tick at 1 second intervals.  
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }


  _tick() {
    if (this.seconds + 1 === 60) {
      this.seconds = 0; 
      if (this.minutes + 1 === 60) {
        this.minutes = 0; 
        if (this.hours === 24) {
          this.hours = 0;
        } else {
          this.hours+=1;
        }
      } else {
        this.minutes+=1;
      }
    } else {
      this.seconds+=1;
    }
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }


}

  const clock = new Clock();

  

  
