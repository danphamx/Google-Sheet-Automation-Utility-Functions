/*
  Adds "days" # of days to an existing date

  Example Usage: To add 3 days to date
  var startTime = new Date();
  var date = addDays(date, 3);
  */

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


