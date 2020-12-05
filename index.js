const fs = require('fs');

const genders = [ 'M', 'F'];
 const maleNames = ['Jan', 'Krzysztof', 'Adam', 'Marek', 'Marcin', 'Jakub'];
 const femaleNames = ['Anna', 'Katarzyna', 'Iza', 'Marta', 'Ewa','Dorota'];
 const lastNames = ['Nowak', 'Siwek', 'Broda', 'Laskowski', 'Janowski', 'Szurkowski'];

 const people = [];

 function randChoice (arr) {
    const randNumber = Math.floor(Math.random() * arr.length)
    return arr[randNumber]
} 

for (i=1; i<=20; i++) {

    const newObject = {};

    newObject.gender = randChoice(genders);

        if (newObject.gender == 'M') {
            newObject.name = randChoice(maleNames)
        } else {
            newObject.name = randChoice(femaleNames)
        }


    newObject.lastName = randChoice(lastNames);

    newObject.age = Math.floor(Math.random() * (78-1) + 1);

    people.push(newObject);
    }

    console.log('pokaz people', people);

    var peopleJson = JSON.stringify(people);

    fs.writeFile('people.json', peopleJson, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });