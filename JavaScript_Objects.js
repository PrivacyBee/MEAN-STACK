// challenge 1
//Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.


let students = [
  { name: 'Remy', cohort: 'Jan' },
  { name: 'Genevieve', cohort: 'March' },
  { name: 'Chuck', cohort: 'Jan' },
  { name: 'Osmund', cohort: 'June' },
  { name: 'Nikki', cohort: 'June' },
  { name: 'Boris', cohort: 'June' },
];



var challenge1 = function(students) {
  var str = 'STUDENTS \n';
  students.forEach(x => {
    str += 'Name: ' + x.name + ', ' + 'Corhort: ' + x.cohort + '\n';
  });
  return str;
};

var challenge_1 = challenge1(students);
console.log(challenge_1);


// Challenge 2
//Write a function that accepts an object of users divided into employees and managers, and display the number of characters per employee/manager's name, as shown below, and logs the information to the console.

let users = {
  employees: [
    { first_name: 'Miguel', last_name: 'Jones' },
    { first_name: 'Ernie', last_name: 'Bertson' },
    { first_name: 'Nora', last_name: 'Lu' },
    { first_name: 'Sally', last_name: 'Barkyoumb' },
  ],
  managers: [
    { first_name: 'Lillian', last_name: 'Chambers' },
    { first_name: 'Gordon', last_name: 'Poe' },
  ],
};

var challenge2 = function(users) {
  var str = 'EMPLOYEES \n';
  users.employees.forEach((element, index) => {
    str +=
      index + 1 + ' - ' + element.first_name + ', ' + element.last_name + '\n';
  });
  str += 'MANAGERS \n';
  users.managers.forEach((element, index) => {
    str +=
      index + 1 + ' - ' + element.first_name + ', ' + element.last_name + '\n';
  });
  return str;
};

var challenge_2 = challenge2(users);
console.log(challenge_2);