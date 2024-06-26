/*
Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення,
що вказує, чи це день робочий чи вихідний.
*/
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Sunday"] = 0] = "Sunday";
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
})(Weekdays || (Weekdays = {}));
function isWeekend(day) {
    return day === Weekdays.Sunday || day === Weekdays.Saturday;
}
console.log(isWeekend(Weekdays.Saturday));
console.log(isWeekend(Weekdays.Sunday));
console.log(isWeekend(Weekdays.Monday));
console.log(isWeekend(Weekdays.Tuesday));
console.log(isWeekend(Weekdays.Wednesday));
console.log(isWeekend(Weekdays.Thursday));
console.log(isWeekend(Weekdays.Friday));
//# sourceMappingURL=task_7.js.map