ffunction quocardCalculation(e) {
  let ss=SpreadsheetApp.getActiveSpreadsheet();
  let sheet=ss.getSheetByName("記録簿");
  let date=e.values[1];
  let inc=Number(e.values[2]);
  let dec=Number(e.values[3]);
  let rb=Number(e.values[4]);
  let last=sheet.getLastRow()+1;
  sheet.getRange(last,1).setValue(date);
  sheet.getRange(last,2).setValue(inc);
  sheet.getRange(last,3).setValue(dec);
  let previous=sheet.getRange(last-1,4).getValue();
  sheet.getRange(last,4).setValue(previous+inc-dec); 
  sheet.getRange(last,5).setValue(rb);
}
