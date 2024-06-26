/*
Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, 
що вказує, чи це день робочий чи вихідний.
*/
enum Weekdays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

function isWeekend(day: Weekdays): boolean {
  return day === Weekdays.Sunday || day === Weekdays.Saturday;
}

console.log(isWeekend(Weekdays.Saturday));
console.log(isWeekend(Weekdays.Sunday));
console.log(isWeekend(Weekdays.Monday));
console.log(isWeekend(Weekdays.Tuesday));
console.log(isWeekend(Weekdays.Wednesday));
console.log(isWeekend(Weekdays.Thursday));
console.log(isWeekend(Weekdays.Friday));

