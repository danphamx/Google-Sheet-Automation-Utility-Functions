function myImprovedImportRange(spreadsheetIdSource,sheetNameSource,rangeNameSource, spreadsheetIdDestination,sheetNameDestination,rangeNameDestination) {
  var ss = SpreadsheetApp.openById(spreadsheetIdSource);
  var source_sheet = ss.getSheetByName(sheetNameSource);
  var source_range = source_sheet.getRange(rangeNameSource);
  Logger.log(source_range);

  var target = SpreadsheetApp.openById(spreadsheetIdDestination);
  var target_sheet = target.getSheetByName(sheetNameDestination);
  var target_range = target_sheet.getRange(rangeNameDestination);
  Logger.log(target_range);

  var values = source_range.getValues();
  target_range.setValues(values);

}

/*

example:

function importA11Y(){
  var test = SpreadsheetApp.openById("1bBS6u9WFuL7-vEx5MFIIBbPN4vT8Ar8gSsF3dCWQ1l0");
  var testSheet = test.getSheetByName("Data Staging");
  var testRange = testSheet.getRange("A1");
  var hasData = testRange.getValues();
  Logger.log(hasData);

  if (hasData = true) {
    myImprovedImportRange("1bBS6u9WFuL7-vEx5MFIIBbPN4vT8Ar8gSsF3dCWQ1l0","Data Staging","A1:Z2500","18QJYl4mpHAEYIrFpVYl8Ng1B5f1jSEvxSoAfNiztQlU","A11Y","A1:Z2500");
  } else {
  //  block of code to be executed if the condition is false
    sendImportRangeErrorToAdmin("importA11Y")
  }
}

*/
