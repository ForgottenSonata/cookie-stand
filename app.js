'use strict';


var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 am', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var allLocations = [];

// Object Constructor
function StoreLocation(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerCust){

//Properties
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custEachHourArray = [],
  this.cookiesEachHourArray = [];
  this.totalDailyCookieSales = 0;


  this.calcCustEachHour = function(){
    for (var i = 0; i < hours.length; i++) {
      var singleHourCust = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
      this.custEachHourArray.push(singleHourCust);
    }
  };

  this.calcCookiesEachHour = function(){
    this.calcCustEachHour();
    for (var i = 0; i < hours.length; i++) {
      var singleHourCookies = Math.ceil(this.custEachHourArray[i] * this.avgCookiesPerCust);
      this.cookiesEachHourArray.push(singleHourCookies);
      this.totalDailyCookieSales += singleHourCookies;
    }
  };
  this.calcCookiesEachHour();
  allLocations.push(this);


  this.render = function(){
    var cookieTable = document.getElementById('store_table');
    
    var cookieTableRow = document.createElement('tr');
    var locationTableCell = document.createElement('td');
    locationTableCell.textContent = this.locationName;
    cookieTableRow.appendChild(locationTableCell);
    cookieTable.appendChild(cookieTableRow);
   
    for (var i = 0; i < this.cookiesEachHourArray.length; i++){
      var cookieTableCell = document.createElement('td');
      cookieTableCell.textContent = this.cookiesEachHourArray[i];
      cookieTableRow.appendChild(cookieTableCell);
      cookieTable.appendChild(cookieTableRow);
    }
    var totalCookieElement = document.createElement('td');
    totalCookieElement.textContent = this.totalDailyCookieSales;
    cookieTableRow.appendChild(totalCookieElement);
    cookieTable.appendChild(cookieTableRow);
  };
};


var firstAndPike = new StoreLocation('First and Pike',23,65,6.3);
firstAndPike.render();
var seaTacAir = new StoreLocation('SeaTac Airport',34,24,1.2);
seaTacAir.render();
var seaCenter = new StoreLocation('Seattle Center',11,38,3.7);
seaCenter.render();
var capHill = new StoreLocation('Capitol Hill',20,38,2.3);
capHill.render();
var alki = new StoreLocation('Alki',2,16,4.6);
alki.render();


function renderHeader(){
  var cookieTable = document.getElementById('store_table');
  var cookieHeader = document.createElement('thead');
  var cookieHeaderRow = document.createElement('tr');
  var headerElement = document.createElement('th');
  headerElement.textContent = 'Store Locations';
  cookieHeaderRow.appendChild(headerElement);
  for (var i = 0; i < hours.length; i++){
    var cookieHourHeader = document.createElement('th');
    cookieHourHeader.textContent = hours[i];
    cookieHeaderRow.appendChild(cookieHourHeader);
  }
  var totalHeaderElement = document.createElement('th');
  totalHeaderElement.textContent = 'Total Cookies';
  cookieHeaderRow.appendChild(totalHeaderElement);
  cookieHeader.appendChild(cookieHeaderRow);
  cookieTable.appendChild(cookieHeader);
};
renderHeader();


function renderFooter(){
  var cookieTable = document.getElementById('store_table');
  var cookieFooter = document.createElement('tr');
  var cookieFooterTitle = document.createElement('td');
  cookieFooterTitle.textContent = 'Total Cookies Per Hour';
  cookieFooter.appendChild(cookieFooterTitle);
  for (var i = 0; i < hours.length; i++){
    var cookieFooterCell = document.createElement('td');
    cookieFooterCell.textContent = 'Nope';
    cookieFooter.appendChild(cookieFooterCell);
  };
  cookieTable.appendChild(cookieFooter);
}

renderFooter();
