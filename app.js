'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = [];
var totalSalesArray = [];

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
  var randomCookies;
  for (var i = 0; i < storeHours.length; i++) {
    randomCookies = this.cookiesPurchasedHourly();
    this.cookieArray[i] = randomCookies;
    this.total += randomCookies;
  }
  return this.total;
};

function totalSalesPerHour() {
  var total;
  for (var i = 0; i < storeHours.length; i++) {
    total = 0;
    console.log('1st: ' + total + ' store hour: ' + storeHours[i]);
    for(var y = 0; y < stores.length; y++) {
      console.log(stores[y].cookieArray[i]);
      console.log(stores[y]);
      total += stores[y].cookieArray[i];
    }
    totalSalesArray.push(total);
  }
  console.log(total);
}

var storeForm = document.getElementById('store_form');

storeForm.addEventListener('submit', handleSubmit);
<<<<<<< HEAD

=======
//DOM node.method('event name', higher order function)
>>>>>>> Thursday-addingCSS

function handleSubmit(event) {
  event.preventDefault();
  var storeName = event.target.store_name.value;
<<<<<<< HEAD
=======
  //event.target = node that fired off this event
  //by naming input
>>>>>>> Thursday-addingCSS
  var minHourlyCustomers = parseInt(event.target.min_cust.value);
  var maxHourlyCustomers = parseInt(event.target.max_cust.value);
  var avgCookiesPerCustomer = parseInt(event.target.avg_cookies.value);

  var newStore = new CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer);
  stores.push(newStore);
  console.log('MIN: ' + typeof minHourlyCustomers);
  newStore.toHtml();

  event.target.store_name.value = '';
  event.target.min_cust.value = '';
  event.target.max_cust.value = '';
  event.target.avg_cookies.value = '';

}

function renderHeaderRow () {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  var hourlyTableHeader;

  tableRow.appendChild(blankTableHeader);

  for (var i = 0; i < storeHours.length; i++) {
<<<<<<< HEAD
    hourlyTableHeader = document.createElement('th');
    hourlyTableHeader.textContent = storeHours[i];
    tableRow.appendChild(hourlyTableHeader);
=======
    hourlyTableHeader = document.createElement('th');//create element
    hourlyTableHeader.textContent = storeHours[i];//update content
    tableRow.appendChild(hourlyTableHeader);//put it somewhere
>>>>>>> Thursday-addingCSS
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
<<<<<<< HEAD
    hourlyTableData.textContent = this.cookieArray[i]; // random numbers generated
=======
    hourlyTableData.textContent = this.cookieArray[i]; //use random numbers generated
>>>>>>> Thursday-addingCSS
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
<<<<<<< HEAD
    hourlyTableFooter = document.createElement('td');
    hourlyTableFooter.textContent = totalSalesArray[i];
    tableRow.appendChild(hourlyTableFooter);
=======
    hourlyTableFooter = document.createElement('td');//create element
    hourlyTableFooter.textContent = totalSalesArray[i];//update content
    tableRow.appendChild(hourlyTableFooter);//put it somewhere
>>>>>>> Thursday-addingCSS
  }

  grandTotalTableFooter.textContent = 'ALL TOTAL';
  tableRow.appendChild(grandTotalTableFooter);

  tableFooter.appendChild(tableRow);
}

var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
console.log(pike);
stores.push(pike);

var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2);
console.log(seaTacAirport);
stores.push(seaTacAirport);

var seattleCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);
stores.push(seattleCenter);

var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
console.log(capitolHill);
stores.push(capitolHill);

var alki = new CookieStore('Alki', 2, 16, 4.6);
console.log(alki);
<<<<<<< HEAD
stores.push(alki);


pike.toHtml();
=======

pike.toHtml();
stores.push(alki);
>>>>>>> Thursday-addingCSS
seaTacAirport.toHtml();
seattleCenter.toHtml();
capitolHill.toHtml();
alki.toHtml();
<<<<<<< HEAD


=======
>>>>>>> Thursday-addingCSS
totalSalesPerHour();

renderFooterRow();
console.dir('stores: ' + stores);
<<<<<<< HEAD
=======
console.log(pike);
>>>>>>> Thursday-addingCSS
