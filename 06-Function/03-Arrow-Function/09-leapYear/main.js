// Leap year === year that has 366 days

const leapYear = (year) => {
  if (year % 4 === 0 || year % 400 === 0) {
    return true;
  }
  return false;
};

leapYear(2004);

//Leap year : / 4 === 0
//Leap year : ผลคูณของ 100 && / 400 === 0
