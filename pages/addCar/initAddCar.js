import {url} from "../../settings.js"
import {makeOptions} from "../../utils.js"

export function initAddCar(){
  document.getElementById("add-car").addEventListener("click", addCar)
}

async function addCar() {
  const form = document.getElementById("carForm");
  const car = {
    brand: form.brand.value,
    model: form.model.value,
    pricePrDay: form.pricePrDay.value,
    bestDiscount: form.bestDiscount.value
  }

  const options = makeOptions("POST", car)

  const newCar = await fetch(url, options)
                .then(res => res.json())
  document.getElementById("new-carResponse").innerText = JSON.stringify(newCar, null, 2);
}