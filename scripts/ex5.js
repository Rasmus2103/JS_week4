const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  document.addEventListener("DOMContentLoaded", function(event) {
    populateTable(cars);

    const buttonLess = document.getElementById('less_price');
    buttonLess.addEventListener('click', filterCarsByPrice);

    const buttonMore = document.getElementById('more_price');
    buttonMore.addEventListener('click', filterCarsByPrice);

    const buttonMake = document.getElementById('find_make');
    buttonMake.addEventListener('click', filterCarByMake);

    const buttonClear = document.getElementById('clear_filter');
    buttonClear.addEventListener('click', clearFilter);
});

function populateTable(cars) {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = carsTable(cars);
}

function carsTable(cars) {
  return cars.map(car => `
    <tr>
      <td>${car.id}</td>
      <td>${car.year}</td>
      <td>${car.make}</td>
      <td>${car.model}</td>
      <td>${car.price}</td>
    </tr>
  `).join('');
}

function filterCarsByPrice() {
    const priceInputValue = parseFloat(document.getElementById('price_input').value);

    if (isNaN(priceInputValue)) {
        alert('Please enter a valid number for price.');
        return;
    }

    const filteredCarsLess = cars.filter(car => car.price < priceInputValue);
    populateTable(filteredCarsLess);

    const filteredCarsMore = cars.filter(car => car.price > priceInputValue);
    populateTable(filteredCarsMore);
}

function clearFilter() {
    document.getElementById('price_input').value = '';
    document.getElementById('make_input').value = '';
    populateTable(cars);
}


function filterCarByMake() {
    const letterInputValue = document.getElementById('make_input').value.toLowerCase();

    const makeCars = cars.filter(car => car.make.toLowerCase().includes(letterInputValue));

    populateTable(makeCars);
}

let isPriceAscending = true;

document.getElementById('sort_price').addEventListener('click', function() {
    if (isPriceAscending) {
        cars.sort((a, b) => a.price - b.price);
    } else {
        cars.sort((a, b) => b.price - a.price);
    }
    isPriceAscending = !isPriceAscending;
    populateTable(cars);
});
