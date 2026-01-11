const fs = require('fs');

const genders = ['F', 'M'];

const maleNames = [
  'Alex',
  'Angus',
  'Eric',
  'Marco',
  'Freddy',
  'Charles',
  'Oscar',
];
const femaleNames = [
  'Lillian',
  'Nelly',
  'Tia',
  'Christine',
  'Alice',
  'Scarlet',
  'Tara',
];
const lastNames = [
  'Berry',
  'Fernandez',
  'Thompson',
  'Davidson',
  'Ramirez',
  'Robinson',
  'Stevenson',
];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const people = [];

for (let i = 0; i < 20; i++) {
  let gender = randChoice(genders);
  let randomAge = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  let firstName =
    gender === 'F' ? randChoice(femaleNames) : randChoice(maleNames);
  let lastName = randChoice(lastNames);
  let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  let phoneNumber =
    Math.floor(Math.random() * (999999999 - 111111111 + 1)) + 111111111;

  let element = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: randomAge,
    phoneNumber: phoneNumber,
  };

  people.push(element);
}

fs.writeFile('people.json', JSON.stringify(people, null, 2), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
