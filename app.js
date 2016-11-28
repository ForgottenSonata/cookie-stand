'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookiesByHour = [];


function CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.storeName = storeName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookieArray = [];
  this.total = 0;
};

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




function renderHeaderRow () {
  var storeTable = document.getElementById('table_header');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < storeHours.length; i++) {
    hourlyTableHeader = document.createElement('th');//create element
    hourlyTableHeader.textContent = storeHours[i];//update content
    tableRow.appendChild(hourlyTableHeader);//put it somewhere
  }

  totalTableHeader.textContent = 'Daily Location Total';
  tableRow.appendChild(totalTableHeader);

  storeTable.appendChild(tableRow);
}

renderHeaderRow();

CookieStore.prototype.toHtml = function (){
  this.totalSalesPerLocation();
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var nameTableHeader = document.createElement('th');
  var totalTableData = document.createElement('td');
  totalTableData.setAttribute('class', 'totalCell');
  var hourlyTableData;

  nameTableHeader.textContent = this.storeName;
  tableRow.appendChild(nameTableHeader);

  for (var i = 0; i < storeHours.length; i++) {
    hourlyTableData = document.createElement('td');
    hourlyTableData.textContent = this.cookieArray[i]; //use random numbers generated
    tableRow.appendChild(hourlyTableData);
  }

  totalTableData.textContent = this.total;
  tableRow.appendChild(totalTableData);

  storeTable.appendChild(tableRow);
};



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

console.log('randomHourlyCustomers: ' + pike.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + pike.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + pike.totalSalesPerLocation());
console.log('cookieArray: ' + pike.cookieArray);
//console.log('cookieArray: ' + pike.cookieArray[]);

seaTacAirport.toHtml();

console.log('randomHourlyCustomers: ' + seaTacAirport.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + seaTacAirport.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + seaTacAirport.totalSalesPerLocation());
console.log('cookieArray: ' + seaTacAirport.cookieArray);

seattleCenter.toHtml();

console.log('randomHourlyCustomers: ' + seattleCenter.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + seattleCenter.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + seattleCenter.totalSalesPerLocation());
console.log('cookieArray: ' + seattleCenter.cookieArray);

capitolHill.toHtml();

console.log('randomHourlyCustomers: ' + capitolHill.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + capitolHill.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + capitolHill.totalSalesPerLocation());
console.log('cookieArray: ' + capitolHill.cookieArray);

alki.toHtml();

console.log('randomHourlyCustomers: ' + alki.randomHourlyCustomers());
console.log('cookiesPurchasedHourly: ' + alki.cookiesPurchasedHourly());
console.log('totalSalesPerLocation: ' + alki.totalSalesPerLocation());
console.log('cookieArray: ' + alki.cookieArray);
