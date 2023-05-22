NEW_DESCRIPTION = '' // include your new description. HTML supported
NEW_DESCRIPTION += '' // add new line
NEW_DESCRIPTION += '' // add new line

function updateCalendarDescriptions() {
  var cal = CalendarApp.getOwnedCalendarById("--YOUR CALENDAR ID HERE--")
  Logger.log(cal.getName())

  // Determines how many events are happening in the next six hours.
  var now = new Date();
  var twoHoursFromNow = new Date(now.getTime() + (6 * 60 * 60 * 1000));
  var events = cal.getEvents(now, twoHoursFromNow);
  Logger.log('Number of events: ' + events.length);

  for (let i = 0; i < events.length; i++) {
    Logger.log(events[i].getDescription())
    events[i].setDescription(NEW_DESCRIPTION)
    Logger.log(events[i].getDescription())
  }
}

