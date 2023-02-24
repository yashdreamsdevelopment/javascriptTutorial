function something() {
  document.write("<h3>this is about setTimeInterval</h3> <br>");
}

// setInterval("something()", 1000);

// const now = new Date(); // gives the current date and time info

// const now = new Date("October 13 2014 11:30:34");
// this will create and also the day of the provided data
// (Mon Oct 13 2014 11:30:34 GMT+0530 (India Standard Time))

// const now = new Date(2018, 11, 24, 10, 33, 30, 0);
// Mon Dec 24 2018 10:33:30 GMT+0530 (India Standard Time)

// const now = new Date(2023);
// Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)
// document.write(now);

// TASK: to create the clock
function clock() {
  const currentDateTime = new Date();

  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();
  const seconds = currentDateTime.getSeconds();

  document.write("<h1>" + hours + ":" + minutes + ":" + seconds + "</h1>");
}

setInterval(clock, 1000);
