const cars = ["Ford", "VW", "Toyota", "Volvo"];

const carSelector = document.getElementById('car-selector');

cars.forEach(car => {
    const option = document.createElement('option');
    option.value = car;
    option.textContent = car;
    carSelector.appendChild(option);
});

carSelector.addEventListener('change', function() {
    const selectedCar = carSelector.value;
    document.getElementById('car-make').textContent = selectedCar;
});