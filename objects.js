'use strict';

function CookieStore (name, mincustomers, maxcustomers, avgcookies) {

  this.name = name;
  this.mincustomers = mincustomers;
  this.maxcustomers = maxcustomers;
  this.avgCookies = avgcookies;
  this.storeHours = storeHours;
 }
  var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

   var pikeStore = new CookieStore('Pike', '23', '65', '6.5')

CookieStore.prototype.randomCustomerhr= function(){
  console.log(this.Randomcustomerhr);
  
}
CookieStore.prototype.hourlyCookieSale= function() {
  console.log(this.Hourlycookiesale);
}
   var store= {
   randomCustomerhr: function (min, max) {
    min = Math.ceil(this.minCustomers);
    max = Math.round(this.maxCustomers);
    for(var i = 0; i < this.storeHours.length; i++){
      this.randomCustomerhr.push ((Math.round(Math.random() * (max - min + 1)) + min) * this.avgCookies);
    }
  },
  hourlyCookieSale: function (){
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul');
    var li;
    for(var i = 0; i < this.storeHours.length; i++){
      li = document.createElement('li');
      li.textContent = this.storeHours[i] + this.randomCustomerhr[i];
      ul.appendChild(li);
    };
  },
     cookiesPerDay: function() {
    var dailyCookieCount;
    for (var i = 0; i < this.storeHours.length; i++) {
      dailyCookieCount = this.cookiesPerHour();
         this.total += this.cookiesPerHour();
         this.salesPerHour.push(dailyCookieCount);
       };
     },
          toHtml: function() {
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

          return unorderedList;
    }



}
