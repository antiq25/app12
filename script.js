var spreadsheetData = []; // Array to store spreadsheet data
var headerRow = document.getElementById("header-row");
var spreadsheetBody = document.getElementById("spreadsheet-body");

function saveSpreadsheet() {
    // Get the input values
    var unitNumber = document.getElementById("unit-number").value;
    var modelNumber = document.getElementById("model-number").value;
    var serialNumber = document.getElementById("serial-number").value;
    var filterChanged = document.getElementById("filter-changed").value;
    var filterSize = document.getElementById("filterSize").value;
    var heatingTemp = document.getElementById("heating-temp").value;
    var coolingTemp = document.getElementById("cooling-temp").value;
    var inspectHoses = document.getElementById("inspect-hoses").value;
    var panVacuumed = document.getElementById("pan-vacuumed").value;
    var refrigerantChecked = document.getElementById("refrigerant-checked").value;
    var serviceabilityAccess = document.getElementById("serviceability-access").value;
    var notes = document.getElementById("notes").value;
  
    // Create a new row
    var newRow = [unitNumber, modelNumber, serialNumber, filterChanged, heatingTemp, coolingTemp, inspectHoses, panVacuumed, refrigerantChecked, serviceabilityAccess, notes];

    // Add the row to the spreadsheet data
    spreadsheetData.push(newRow);
  
    // Clear the input values
    document.getElementById("unit-number").value = "";
    document.getElementById("model-number").value = "";
    document.getElementById("serial-number").value = "";
    document.getElementById("filter-changed").value = "";
    document.getElementById("filterSize").value = "";
    document.getElementById("heating-temp").value = "";
    document.getElementById("cooling-temp").value = "";
    document.getElementById("inspect-hoses").value = "";
    document.getElementById("pan-vacuumed").value = "";
    document.getElementById("refrigerant-checked").value = "";
    document.getElementById("serviceability-access").value = "";
    document.getElementById("notes").value = "";
}

function displaySpreadsheet() {
    // Clear the previous contents of the table
    headerRow.innerHTML = "";
    spreadsheetBody.innerHTML = "";
  
    // Create the header row
    var headers = ['Unit #', 'Model #', 'Serial #', 'Filter Changed',"Filter Size", 'Heating Temp', 'Cooling Temp', 'Inspect hoses', 'Pan Vacuumed?', 'Refrigerant Checked?', 'Serviceability Access to Heat Pump?', 'Notes',];
    for (var i = 0; i < headers.length; i++) {
      var th = document.createElement("th");
      th.textContent = headers[i];
      headerRow.appendChild(th);
    }
  
    // Create the rows and cells for the spreadsheet data
    for (var rowIndex = 0; rowIndex < spreadsheetData.length; rowIndex++) {
      var tr = document.createElement("tr");
      for (var colIndex = 0; colIndex < spreadsheetData[rowIndex].length; colIndex++) {
        var td = document.createElement("td");
        td.textContent = spreadsheetData[rowIndex][colIndex] || "";
        tr.appendChild(td);
      }
      spreadsheetBody.appendChild(tr);
    }
}

function downloadCSV() {
  // Create CSV content
  var csvContent = "data:text/csv;charset=utf-8,";

  // Add the header
  var headers = ['Unit #', 'Model #', 'Serial #', 'Filter Changed', 'Filter Size', 'Heating Temp', 'Cooling Temp', 'Inspect hoses', 'Pan Vacuumed?', 'Refrigerant Checked?', 'Serviceability Access to Heat Pump?', 'Notes'];
  csvContent += headers.join(",") + "\n";

  // Add the data
  spreadsheetData.forEach(function(rowArray) {
      csvContent += rowArray.join(",") + "\n";
  });

  // Create a download link and click it
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "spreadsheet.csv");
  document.body.appendChild(link); // Required for Firefox
  link.click(); // This will download the data file named "spreadsheet.csv"
}

