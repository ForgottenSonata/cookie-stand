'use strict';

var addStoreButton = document.getElementById('add_store');

addStoreButton.addEventListener('click', handleClick);

function handleClick() {

  console.log('add your store now');
}

renderHeaderRow();

function renderHeaderRow() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');




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


function CookieStore (name, minCustomers, maxCustomers, avgCookies) {

  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.storeHours = storeHours;
}
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



CookieStore.prototype.randomCustomerhr = function(){
  console.log(this.Randomcustomerhr);
  min = Math.ceil(this.minCustomers);
  max = Math.round(this.maxCustomers);
  this.randomCustomerhr ((Math.round(Math.random() * (max - min + 1)) + min) * this.avgCookies);
};
CookieStore.prototype.hourlyCookieSale = function() {
  console.log(this.Hourlycookiesale);
  var contentArea = document.getElementById('content_area');

  for(var i = 0; i < this.storeHours.length; i++){
    li = document.createElement('li');
    li.textContent = this.storeHours[i] + this.randomCustomerhr[i];
    ul.appendChild(li);
  }
};

CookieStore.prototype.cookiesPerDay = function() {

  console.log(this.CookiesPerDay);
  var dailyCookieCount;
  for (var i = 0; i < this.storeHours.length; i++) {
    dailyCookieCount = this.cookiesPerHour();
    this.total += this.cookiesPerHour();
    this.salesPerHour.push(dailyCookieCount);
  }
};

var pike = new CookieStore('1st & Pike', 22, 65, 6.3);
var seatac = new CookieStore('Seatac Airport', 11, 38, 3.7);
var seattleCenter = new CookieStore('Seattle Center', 22, 65, 6.3);
var capitolHill = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.8);
var storeList = [pike, seatac, seattleCenter, capitolHill, alki];


function showStores(){
  for(var i = 0; i < storeList.length; i++)
    storeList[i].toHtml();
};

showStores();

var newStore = document.getElementById('new_store');
var newStoreDetails = [];

newStore.addEventListener ('submit', handleStoreSubmission);

function handleStoreSubmission() {
  event.preventDefault();

  var storeName = event.target.new_store_name.value;
  var minCustomers = event.target.new_store_min_customers.value;
  var maxCustomers = event.target.new_store_max_customers.value;
  var avgCookies = event.target.new_store_avg_cookies.value;

  var newStore = new CookieStore(storeName, minCustomers, maxCustomers, avgCookies);
  newStoreDetails.push(newStore);

  renderNewStore ();
};



function renderNewStore (){
  var storeTable = document.getElementById('form_printer');
  for (i = 0; i < newStoreDetails.length; i++){
    newStoreDetails[i].toHtml();
  }
  newStoreDetails = [];

}; //close of curly bracket to renderNewStore
