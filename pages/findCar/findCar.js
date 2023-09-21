import {url} from "../../settings.js"

export function initFindCar(){
  document.getElementById("btn-find").addEventListener("click", findCar)
}

  async function findCar() {
    document.getElementById("result").innerText = ""
    const id = document.getElementById("car-id").value

    try {
      const car = await fetch(url + "/" + id)
      .then(res => {
        if(!res.ok) {
          throw new Error("Car not found")
        }
        return res.json()
      })
      document.getElementById("result").innerText = JSON.stringify(car, null, 3)
    } catch(e) {
      document.getElementById("error").innerText = e.message;
    }
  }

