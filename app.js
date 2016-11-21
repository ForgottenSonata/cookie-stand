'use strict';
<<<<<<< HEAD

var store_hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function CookieStore(storeName, minCustPerHr, maxCustPerHr, avgCookiesPerSale) {
  this.storeName = storeName;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesPerHrObjectArray = [];
};

//generate a random number of customers per hour
CookieStore.prototype.calcCustPerHr = function() {
  var returnCustPerHr = Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
  console.log('returnCustPerHr: ', returnCustPerHr);
  return returnCustPerHr;
};

// Calculate and store the amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
CookieStore.prototype.CookiesPerHr = function() {
  // Create a cookies per hour array
  var cookiesPerHrArray = [];
  var totalCookies = 0;
  // Loop through the array to assign a value for cookies per hour for each hour
  for (var i = 0; i < store_hours.length; i++) {
    cookiesPerHrArray[i] = Math.round(this.avgCookiesPerSale * this.custPerHr());
    this.cookiesPerHrObjectArray[i] = cookiesPerHrArray[i];
    totalCookies += this.cookiesPerHrObjectArray[i]; // Add the cookies from that hour to the daily total of cookiessold
  }

  // Push the total to the end of the array with cookies per hour
  this.cookiesPerHrObjectArray.push(totalCookies);
  // Return the array
  return cookiesPerHrArray;
};

CookieStore.prototype.renderTableRow = function() {
  var cookieStoreTable = document.getElementById('table_body'); // Locate
  var tableRow = document.createElement('tr');
  var storeNameTableHeader = document.createElement('th');
  var storeTotalTableData = document.createElement('td');
  var hourlyTableData;

  storeNameTableHeader.textContent = this.storeName;
  tableRow.appendChild(storeNameTableHeader);

  for (var i = 0; i < this.cookiesPerHrObjectArray.length; i++) {
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = this.cookiesPerHrObjectArray[i];
    tableRow.appendChild(hourlyTableData);
  }

  storeTotalTableData.textContent = this.cookiesPerHrObjectArray[this.cookiesPerHrObjectArray.length]; // Update content
  tableRow.appendChild(storeTotalTableData);

  cookieStoreTable.appendChild(tableRow);
};

// Use a separate function to render the table header
function renderHeaderRow() {
  var storeHeaderRow = document.getElementById('table_header'); // Locate
  var tableHeaderRow = document.createElement('tr'); // Create
  var blankTableHeader = document.createElement('th'); // Create
  var totalTableHeader = document.createElement('th'); // Create
  var hourlyTableHeader;

  blankTableHeader.textContent = '';
  tableHeaderRow.appendChild(blankTableHeader);
  for (var i = 0; i < store_hours.length; i++) {
    hourlyTableHeader = document.createElement('th'); // Create
    hourlyTableHeader.textContent = store_hours[i]; // Update content
    tableHeaderRow.appendChild(hourlyTableHeader);  // Append after the blank header
  }

  totalTableHeader.textContent = 'Daily Location Total';
  tableHeaderRow.appendChild(totalTableHeader); // Append after hourly table headers
  storeHeaderRow.appendChild(tableHeaderRow); // Append the header row to the table
};

// Use a separate function to render the table footer
function renderFooterRow() {
  var storeFooterRow = document.getElementById('table_footer'); // Locate
  var tableFooterRow = document.createElement('tr');
  var totalTableFooter = document.createElement('td');
  var hourlyTotals;

  labelTableFooter.textContent = 'Totals';
  tableFooterRow.appendChild(labelTableFooter);

  for (var i = 0; i < store_hours.length; i++) {
    hourlyTotals = document.createElement('td');
    hourlyTotals.textContent = 'calculate hourly totals';
    tableFooterRow.appendChild(hourlyTotals);  // Append after the footer
  }

  totalTableFooter.textContent = 'Calculate daily total'; // Update content
  tableFooterRow.appendChild(totalTableFooter); // Append after hourly table headers
  storeFooterRow.appendChild(tableFooterRow); // Append the header row to the table
};


// Make the table on html

renderHeaderRow();
// Add the table content rows
var pike = new CookieStore('Pike', 23, 65, 6.3); // Create the cookie store
pike.cookiesPerHr(); // Call this to fill array that will be used to render the table row
pike.renderTableRow(); // Make the row
var seaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
seaTac.cookiesPerHr(); // the calcCookiesPerHr function can be in the definition of the renderTableRow function so you only call renderTableRow()
seaTac.renderTableRow();
var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
seattleCenter.cookiesPerHr();
seattleCenter.renderTableRow();
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
capitolHill.cookiesPerHr();
capitolHill.renderTableRow();
var alki = new CookieStore('Alki', 2, 16, 4.6);
alki.cookiesPerHr();
alki.renderTableRow();
// Make the table footer row
renderFooterRow();
=======
function renderHeaderRow() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');


  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < hours.length; i++) {
    hourlyTableHeader = document.createElement('th');
    hourlyTableHeader.textContent = hours[i];
    tableRow.appendChild(hourlyTableHeader);
  }

  totalTableHeader.textContent = 'Total';
  tableRow.appendChild(totalTableHeader);
  storeTable.appendChild(tableRow);

//end of renderHeaderRow
};


function CookieStore (name, mincustomers, maxcustomers, avgcookies) {

  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.storeHours = storeHours;
 }
  var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

   var pikeStore = new CookieStore('Pike', '23', '65', '6.5')

CookieStore.prototype.randomCustomerhr= function(){
  console.log(this.Randomcustomerhr);
  min = Math.ceil(this.minCustomers);
  max = Math.round(this.maxCustomers);
    this.randomCustomerhr.push ((Math.round(Math.random() * (max - min + 1)) + min) * this.avgCookies);
  };
  CookieStore.prototype.hourlyCookieSale= function() {
  console.log(this.Hourlycookiesale);
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul');
    var li;
    for(var i = 0; i < this.storeHours.length; i++){
      li = document.createElement('li');
      li.textContent = this.storeHours[i] + this.randomCustomerhr[i];
      ul.appendChild(li);
    };
  };
     CookieStore.prototype.cookiesPerDay= function() {
    console.log(this.CookiesPerDay);
    var dailyCookieCount;
    for (var i = 0; i < this.storeHours.length; i++) {
      dailyCookieCount = this.cookiesPerHour();
         this.total += this.cookiesPerHour();
         this.salesPerHour.push(dailyCookieCount);
       };
     }
          //tohtmlfunction() {
          this. cookiesPerDay();

          var unorderedList = document.createElement('ul');
          var storeNameListItem = document.createElement('li');
          var totalListItem = document.createElement('li');
          var hourlyListItem;
          var hourMessage;


          storeNameListItem.textContent = this.name;
          unorderedList.appendChild(storeNameListItem);
          //create a node, update node, put it where it needs to go

          //separate list item for eac
          for (var i =0; i < this.hours.length; i++) {
           hourMessage = this.hours[i] + ': ' + this.salesPerHour[i];
           hourlyListItem += document.createElement('li');
           hourlyListItem.textContent = hourMessage;
           unorderedList.appendChild(hourlyListItem);
           }
          totalListItem.textContent = 'Total: ' + this.total;
          unorderedList.appendChild(totalListItem);
>>>>>>> 3008615ae10097876abb2ba3557fe9bf4e833eaa
