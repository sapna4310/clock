// ! This function takes two parameter (CURRENT TIME :new Date(): can be used to provide current time, ACTION TIME from backend data when action was created) and return difference as (Just Now, $min, $hr, Yesterday, $days, $month, $year) where $ is a number on given conditions

//! Proper conditions are given in the code below

const calcTimeDifference = (curTimestamp, actionTimestamp) => {
  // making current timestamp and action time date objects
  const curTime = new Date(curTimestamp);
  const actionTime = new Date(actionTimestamp);

  // Current Time expanded
  const curYear = curTime.getFullYear();
  const curMonth = curTime.getMonth();
  const curDate = curTime.getDate();
  const curHrs = curTime.getHours();
  const curMin = curTime.getMinutes();

  // Action Time expanded
  const actionYear = actionTime.getFullYear();
  const actionMonth = actionTime.getMonth();
  const actionDate = actionTime.getDate();
  const actionHrs = actionTime.getHours();
  const actionMin = actionTime.getMinutes();

  // Difference is more than 1 year
  if (curYear - actionYear !== 0) {
    return `${curYear - actionYear}y`;

    // Difference is more than 1 month and below 1year
  } else if (curMonth - actionMonth !== 0) {
    return `${curMonth - actionMonth}mo`;

    // Difference is more than 2days and below 1month
  } else if (curDate - actionDate > 1) {
    return `${curDate - actionDate}d`;

    // Condition for Yesterday (difference for more than 1day and below 2days)
  } else if (curDate - actionDate === 1) {
    return `Yesterday`;

    // Differnce is more than 1hr and below 24hr
  } else if (curHrs - actionHrs > 0) {
    return `${curHrs - actionHrs}hr`;

    // Difference is more than 1min and below 1hr
  } else if (curMin - actionMin >= 1) {
    return `${curMin - actionMin}min`;

    // Difference is less than 1min
  } else if (curMin - actionMin < 1) {
    console.log(curMin, actionMin);
    return 'Just Now';

    // Default return
  } else {
    return 'No match';
  }
};

export default calcTimeDifference;
