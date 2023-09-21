//Callbacks (with map, filter and forEach)

//1 
const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const shortNames = names.filter(name => name.length <= 3);


//2 
const upperCaseNames = names.map(name => name.toUpperCase());

//3 

//4 
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  const newer = cars.filter(car => car.year > 1999);

  const allVolvos = cars.filter(car => car.make === "Volvo");

  const below5000 = cars.filter(car => car.price < 5000); 

  //Own functions on callback arguments 
  //a 
  function myFilter(array, callback) {
    const result = [];
    for(let item of array) {
        if(callback(item)) {
            result.push(item);
        }
    }
    return result;
  } 

  const below5000_2 = myFilter(cars, car => car.price < 5000);

  
  //b
  function myMap(array, callback) {
    const result = [];
    for(let item of array) {
        if(callback(item)) {
            result.push(callback(item));
        }
    }
    return result;
  }

  const upperCaseNames2 = myMap(names, name => name.toUpperCase());


  //names.forEach(name => console.log(name));
  //shortNames.forEach(name => console.log(name));
  //console.log(upperCaseNames);
  //upperCaseNames.forEach(name => console.log(name));
  //console.log(newer);
  //console.log(allVolvos);
  //console.log(below5000);
  //console.log(below5000_2);
  console.log(upperCaseNames2);


