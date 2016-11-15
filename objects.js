'use strict';

var cookieStore = {

  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],

  randomCustomerhr: [],
  randomNumber: function (min, max) {
    min = Math.ceil(this.minCustomers);
    max = Math.round(this.maxCustomers);
    for(var i = 0; i < this.storeHours.length; i++){
      this.randomCustomerhr.push ((Math.round(Math.random() * (max- min + 1)) + min) * this.avgCookies);
    }
  },
    hourlyCookieSale: function (){
    var contentArea = document.getElementById('content_area');
    var ul = document.createElement('ul');
    var li;
           for(var i = 0; i < this.storeHours.length; i++){
            li = document.createElement('li');
            li.textContent = this.storeHours[i] + this.randomCustomerhr[i]
            ul.appendChild(li);

           }
           contentArea.appendChild(ul);
}
};

console.log(cookieStore.randomCustomerhr);
cookieStore.randomNumber();
cookieStore.hourlyCookieSale();
