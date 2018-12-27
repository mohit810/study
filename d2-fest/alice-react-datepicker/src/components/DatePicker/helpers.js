export const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export function getMonthName(index) {
    return months[index]
}

export function contains(arr, element) {
    if (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].toDateString() === element.toDateString()) {
              return true;
            }
        }
    }
    return false;
    
}

export function removeByID(arr, element) {
    let ary = arr;
    let id = ary.map(Number).indexOf(+element);

    ary.splice(id, 1);
    return ary;
}

export const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export function abbreviationFromWeekday(weekday) {
    return weekday.substring(0, 3);
}

export const WEEK_LENGTH = 7;

export function getWeeksForMonth(month, year) {
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstOfMonth.getDay();
    const weeks = [[]];

    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;

    for (let i = 0; i < firstDayOfWeek; i++) {
        currentWeek.push(null);
    }

    while (currentDate.getMonth() === month) {
        if (currentWeek.length === WEEK_LENGTH) {
            currentWeek = [];
            weeks.push(currentWeek);
        }

        currentWeek.push(currentDate);
        currentDate = new Date(year, month, currentDate.getDate() + 1);
    }

    while (currentWeek.length < 7) {
        currentWeek.push(null);
    }

    return weeks;
}
