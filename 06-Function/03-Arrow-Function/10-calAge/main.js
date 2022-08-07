const leapYear1 = (year) => {

    if (year % 100 === 0) {
        return year % 400 === 0 
    }
}

let calAge = birthYear => {
    let day = 0;

    for (let i = birthYear; i <= 2020; i++) {
        if (leapYear1(i)) {
            day += 366
        } else {
            day += 365;
        }
    }

    return day;
}

calAge(2001)