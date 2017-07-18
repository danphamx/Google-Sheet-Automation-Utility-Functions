function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


/*
Example Usage: Add 3 days to date
var startTime = new Date();
var date = addDays(date, 3);
  */
