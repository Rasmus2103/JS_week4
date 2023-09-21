var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {changeBy(1);},
      decrement: function() {changeBy(-1);},
      value: function() { return privateCounter;}
    }
  };
  var counter1 = makeCounter();
  var counter2 = makeCounter();
  //counter1.increment();
  //counter1.increment();
  //lert(counter1.value()); /* Alerts 2 */

  function createPerson() {
    var name = "John Doe";
    var age = 0;

    return {
        setName: function(newName) {
            name = newName;
        }, 
        
        setAge: function(newAge) {
            age = newAge;
        },

        getInfo: function() {
            return `${name}, ${age}`;
        }
    };
  }

  var person = createPerson();
  person.setName("Peter");
  person.setAge(45);
  console.log(person.getInfo());