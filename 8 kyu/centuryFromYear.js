//Introduction
//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

//Task
//Given a year, return the century it is in.

const century = (year) => (year % 100 === 0) ? (year / 100) : Math.ceil(year/100)

// function century(year){
//     if (year % 100 === 0) {
//       return year / 100
//     } else {
//       return Math.ceil(year / 100)
//     }
//   }