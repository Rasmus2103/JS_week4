const person = {
    firstname : "Rasmus",
    lastName : "Jessen",
    city : "Herlev",
    adress : "Stationsalleen 46-5-525"
}

//setting a new city to the person object
person.city = "Taastrup"

//deleting the lastName property from the person object
delete person.lastName

for(const property in person) {
    console.log(`${property}: ${person[property]}`);
}

