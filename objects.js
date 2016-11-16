'use strict';
function renderHeaderRow() {
  var storeTable = document.getElementById('store_table');
  var tableRow = document.createElement('tr');
  var blankTableHeader = document.createElement('th');
  var totalTableHeader = document.createElement('th');
  blankTableHeader.innerHTML = '<th>Store Name \&dArr; || Store Hours \&rArr;</th>';

  var hourlyTableHeader;

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
