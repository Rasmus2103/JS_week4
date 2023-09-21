import {url} from "../../settings.js"
import {makeOptions} from "../../utils.js"

export function initEditCar() {
    document.getElementById("edit-car").addEventListener("click", editCar);
    document.getElementById("btn-find-to-edit").addEventListener("click", findCarToEdit);
  }
  

  async function editCar() {
    const form = document.getElementById("editCarForm");
  
    const car = {
      id: form.id.value,
      brand: form.brand.value,
      model: form.model.value,
      pricePrDay: parseFloat(form.pricePrDay.value),
      bestDiscount: parseInt(form.bestDiscount.value),
    };
  
    const options = makeOptions("PUT", car);
  
    const updatedCar = await fetch(`${url}/${car.id}`, options).then(res => res.json());
  
    document.getElementById("edit-message").innerText = `Car with ID: ${car.id} has been edited`
    document.getElementById("new-editResponse").innerText = JSON.stringify(updatedCar, null, 3);
  }
  
  

  async function findCarToEdit() {
    try {
        const id = document.getElementById("text-for-id2").value;
        const response = await fetch(`${url}/${id}`);
        
        if (!response.ok) {
            throw new Error(`Error fetching car with ID ${id}: ${response.statusText}`);
        }

        const car = await response.json();

        const form = document.getElementById("editCarForm");
        form.brand.value = car.brand;
        form.model.value = car.model;
        form.pricePrDay.value = car.pricePrDay;
        form.bestDiscount.value = car.bestDiscount;
        form.id.value = car.id;
    } catch (error) {
        console.error("Failed to fetch and populate the car details:", error);
        document.getElementById("error").innerText = "Car with that ID does not exist";
    }
}

