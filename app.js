'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookiesByHour = [];
renderHeaderRow();

function CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookieArray = [];
  this.total = 0;
};


function renderHeaderRow () {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < storeHours.length; i++) {
    hourlyTableHeader = document.createElement('th');
    hourlyTableHeader.textContent = storeHours[i];
    tableRow.appendChild(hourlyTableHeader);

  }

  totalTableHeader.textContent = 'Daily Location Total';
  tableRow.appendChild(totalTableHeader);
  storeTable.appendChild(tableRow);
}





CookieStore.prototype.logStoreName = function() {
  console.log(this.storeName);
};

CookieStore.prototype.randomHourlyCustomers = function() {
  this.minHourlyCustomers = Math.ceil(this.minHourlyCustomers);
  this.maxHourlyCustomers = Math.floor(this.maxHourlyCustomers);
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

CookieStore.prototype.cookiesPurchasedHourly = function() {
  var totalHourlyCookies = Math.round(this.avgCookiesPerCustomer * this.randomHourlyCustomers());
  return totalHourlyCookies;
};

CookieStore.prototype.totalSalesPerLocation = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var randomCookies = this.cookiesPurchasedHourly();
    this.cookieArray[i] = randomCookies;
    this.total += randomCookies;
    cookiesByHour[i] += randomCookies;
  };
  return this.total;
};









CookieStore.prototype.toHtml = function (){
  this.totalSalesPerLocation();
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('td');
  var hourlyTableData;

  nameTableHeader.textContent = this.storeName;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < storeHours.length; i++) {
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = this.cookieArray[i]; // random numbers generated
    hourlyTableData.textContent = this.cookieArray[i]; //use random numbers generated
    tableRow.appendChild(hourlyTableData);
  }

  totalTableData.textContent = this.total;
  tableRow.appendChild(totalTableData);
  storeTable.appendChild(tableRow);
};

function renderFooterRow(){
  var tableFooter = document.getElementById('table_footer');
  var tableRow = document.createElement('tr');
  var totalTableFooter = document.createElement('th');
  var grandTotalTableFooter = document.createElement('th');
  var hourlyTableFooter;

  totalTableFooter.textContent = 'Sales per Hour';
  tableRow.appendChild(totalTableFooter);

  for (var i = 0; i < storeHours.length; i++) {
    hourlyTableFooter = document.createElement('td');
    hourlyTableFooter.textContent = totalSalesArray[i];
    tableRow.appendChild(hourlyTableFooter);
    hourlyTableFooter = document.createElement('td');//create element
    hourlyTableFooter.textContent = totalSalesArray[i];//update content
    tableRow.appendChild(hourlyTableFooter);//put it somewhere

  }

  grandTotalTableFooter.textContent = 'ALL TOTAL';
  tableRow.appendChild(grandTotalTableFooter);
  tableFooter.appendChild(tableRow);
}


var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
console.log(pike);

var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2);
console.log(seaTacAirport);

var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);

var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
console.log(capitolHill);

var alki = new CookieStore('Alki', 2, 16, 4.6);
console.log(alki);


pike.toHtml();
seaTacAirport.toHtml();
seattleCenter.toHtml();
capitolHill.toHtml();
alki.toHtml()

