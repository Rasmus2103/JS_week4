const url = "http://localhost:8080/api/cars";

document.getElementById("btn-get-all").addEventListener("click", getAllCars)
document.getElementById("btn-find-car").addEventListener("click", getCar)
document.getElementById("add-car").addEventListener("click", addCar)
document.getElementById("edit-car").addEventListener("click", updateCar);
document.getElementById("btn-find-to-edit").addEventListener("click", populateFormData);


function getAllCars() {
    fetch(url)
    .then(res => res.json())
    .then(cars => {
        console.log(cars)
        const tableRows = cars.map(car => `
            <tr>
                <td>${car.id}</td>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.pricePrDay}</td>
                <td>${car.bestDiscount}</td>
            </tr>
        `)
        const rowsAsStr = tableRows.join("")
        document.getElementById("tbody").innerHTML = rowsAsStr; //Remember XSS
    })
}

function getCar() {
    const id = document.getElementById("text-for-id").value
    fetch(url + "/" + id)
    .then(res => {
        if(!res.ok) {
            return alert("Car Not Found")
        }
        return res.json()
    })
    .then(car => {
        document.getElementById("found-car").innerText = JSON.stringify(car, null, 2)
    })
}


function addCar(event) {
    event.preventDefault()
    const form = document.getElementById('carForm');
    const newCar = {
        brand: form.brand.value,
        model: form.model.value,
        pricePrDay: parseFloat(form.pricePrDay.value),
        bestDiscount: parseInt(form.bestDiscount.value),
  };
  const options = {
    method: "POST",
    headers: {"Content-type":"application/json"},
    body: JSON.stringify(newCar)
  }
  fetch(url, options)
    .then(res => res.json())
    .then(carResponse => {
        document.getElementById("new-carResponse").innerText = JSON.stringify(carResponse, null, 3)
    })

  console.log(newCar);
}


function updateCar(event) {
    event.preventDefault();
    const form = document.getElementById("editCarForm");

    const updatedCar = {
        id: form.id.value,
        brand: form.brand.value,
        model: form.model.value,
        pricePrDay: parseFloat(form.pricePrDay.value),
        bestDiscount: parseInt(form.bestDiscount.value),
    };

    const options = {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(updatedCar)
    }

    fetch(url + "/" + updatedCar.id, options)
        .then(res => res.json())
        .then(carResponse => {
            document.getElementById("new-editResponse").innerText = JSON.stringify(carResponse, null, 3)
        })

        console.log(updatedCar);
}

function populateFormData() {
    const id = document.getElementById("text-for-id2").value;
    fetch(url + "/" + id)
    .then(res => {
        if(!res.ok) {
            return alert("Car Not Found");
        }
        return res.json();
    })
    .then(car => {
        const form = document.getElementById('editCarForm');
        form.id.value = car.id;
        form.brand.value = car.brand;
        form.model.value = car.model;
        form.pricePrDay.value = car.pricePrDay;
        form.bestDiscount.value = car.bestDiscount;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}