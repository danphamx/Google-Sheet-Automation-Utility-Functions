// This script records changes to the spreadsheet on a "Changelog" sheet.
// The changelog includes these columns:
// "Timestamp", "Sheet", "Cell", "Type", "Old Value", "New Value", "User"
// Users are logged by email address.
// Source 1: https://productforums.google.com/d/topic/docs/az365_ypIV0/discussion
// Source 2: https://productforums.google.com/forum/#!topic/docs/AI9OxbOtvWE
 
function onEdit(e) {  
  var changelogSheetName = "Changelog";
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var cell = SpreadsheetApp.getActiveRange();
  var timestamp = new Date();
  var currentSheet = ss.getActiveSheet();
  var currentSheetName = currentSheet.getName();
  var previousValue = e.oldValue;
  var newValue = cell.getValue();
  var typeChange = "Edit";
 
  
  // if it is the changelog sheet that is being edited, do not record the change to avoid recursion
  if (currentSheetName == changelogSheetName) return;
  var changelogSheet = ss.getSheetByName(changelogSheetName);
  
  if (changelogSheet == null) {
   
    // no changelog sheet found, create it as the last sheet in the spreadsheet
    changelogSheet = ss.insertSheet(changelogSheetName, ss.getNumSheets());
    
    Utilities.sleep(2000); // give time for the new sheet to render before going back
    
    ss.setActiveSheet(currentSheet);    
    changelogSheet.getRange('A1:G1').setBackground('#E0E0E0');
    changelogSheet.appendRow(["Timestamp", "Sheet", "Cell", "Type", "Old Value", "New Value", "User"]);
    changelogSheet.deleteColumns(8,19);
    changelogSheet.setFrozenRows(1);
    changelogSheet.setColumnWidth(1, 170);
    changelogSheet.setColumnWidth(7, 170); 
    changelogSheet.protect();
  }
  
 
  var user = Session.getEffectiveUser().getEmail();
  
  if (previousValue == null){
    typeChange = "Add"; 
  } else if (newValue == "") {
    typeChange = "Remove";  
  } 

  // Replace E with the "Project Name" so you know which project is being modified
  if (cell){
    var a1Notation = cell.getA1Notation()
    var row = cell.getRow();
    var projName = "E"+row.getValue();
  }
  
  changelogSheet.appendRow([timestamp, currentSheetName, a1Notation, typeChange, previousValue, newValue, user, projName]);
}
