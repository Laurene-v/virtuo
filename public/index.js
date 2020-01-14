'use strict';

//list of cars
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const cars = [{
  'id': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'name': 'fiat-500-x',
  'pricePerDay': 36,
  'pricePerKm': 0.10
}, {
  'id': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'name': 'mercedes-class-a',
  'pricePerDay': 44,
  'pricePerKm': 0.30
}, {
  'id': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'name': 'bmw-x1',
  'pricePerDay': 52,
  'pricePerKm': 0.45
}];

//list of current rentals
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful for step 4
const rentals = [{
  'id': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'driver': {
    'firstName': 'Roman',
    'lastName': 'Frayssinet'
  },
  'carId': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'pickupDate': '2020-01-02',
  'returnDate': '2020-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  /*test: function(property) {
    console.log(this[property])
    return this.property;
  },*/
  'price': 0 //SelectWhere( this, 'id',0)+rentalPrice(this.returnDate-this.pickupDate+1, this.distance, SelectWhereCarId(cars, this.carId).pricePerDay+SelectWhere(cars, cars.id, this.carId).pricePerDay, rentalId.cars.pricePerKm)
  ,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'driver': {
    'firstName': 'Redouane',
    'lastName': 'Bougheraba'
  },
  'carId': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'pickupDate': '2020-01-05',
  'returnDate': '2020-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'driver': {
    'firstName': 'Fadily',
    'lastName': 'Camara'
  },
  'carId': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'pickupDate': '2019-12-01',
  'returnDate': '2019-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}];

//list of actors for payment
//useful from step 5
const actors = [{
  'rentalId': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
   }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]

}, {
  'rentalId': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}];

function rentalPrice(Number_Days, Distance, priceDay, priceKm)
{
  var rentalprice= priceKm * Distance + priceDay * Number_Days
  return (rentalprice)
}

function test1(property){
  console.log("test")
  console.log(property)
  
  return 1
}

/*function SelectWhere(data, property, i) {
  console.log(data)
  console.log(data[i][property])
  
  if (data[i][property] !== null) return data[i];
  return null;
}*/

function SelectWhereCarId(data, IDwewant) {
  /*console.log(data[1])
  console.log(data[1].id)
  console.log(IDwewant)*/
  for (var i = 0; i < data.length; i++) {
      if (data[i].id == IDwewant) return data[i];
  }
  console.log("null returned")
  return null;
}




function rentalPrice2(rentalID, carID)
{
  Distance=this.returnDate-this.pickupDate+1
  id=this.rentalId
  Number_Days=
  rentalprice=priceKm*Distance +priceDay*Number_Days
  return (rentalprice)
}



rentals.forEach(item=> {
  var d = Date.parse(item.returnDate) - Date.parse(item.pickupDate); //time difference in milliseconds
  var days = Math.floor(d/86400000)+1; //converting in the number of days 

  item.price=rentalPrice(days, item.distance, SelectWhereCarId(cars, item.carId).pricePerDay, SelectWhereCarId(cars, item.carId).pricePerKm)
  console.log("price : ")
  console.log(item.price);
});

/*for (actor of actors){
  const nbDays = rental.return - rental.pickup;
}*/

// printing the log to test if it works : 
//console.log(actors.price)
//rentals.foreach.rentalId


/*
console.log("-------------------- Final logs : --------------------")
console.log(cars);
console.log(rentals);
console.log(actors);

*/