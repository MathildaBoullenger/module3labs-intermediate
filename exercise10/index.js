
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//a.
console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed so far today')
console.log((((today.getHours()*60 + today.getMinutes()))*60) + ' seconds have passed so far today')

//c.

function calculateAge(birthDate) {
 
    const currentDate = new Date();
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();

    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.2425;
    const millisecondsPerMonth = millisecondsPerYear / 12;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
  
    const years = Math.floor(ageInMilliseconds / millisecondsPerYear);
    const months = Math.floor((ageInMilliseconds % millisecondsPerYear) / millisecondsPerMonth);
    const days = Math.floor((ageInMilliseconds % millisecondsPerMonth) / millisecondsPerDay);
  
    return `I am ${years} years, ${months} months and ${days} days old`;
  }
  
  const bday = new Date(1998, 10, 16); // November 16, 1998

  console.log(calculateAge(bday))

  //d. 

function daysInBetween(date1, date2) {
      
const diff = date2.getTime() - date1.getTime();
const diffDays = diff / (1000 * 3600 * 24);
      
return (`The total number of days between ${date1} and ${date2} is: ${diffDays} days`);
}

console.log(daysInBetween(new Date('06/30/2019'), new Date('07/30/2019')));
