var  myObject = {
    id: "93j2l9d",
    firstName: "Rob",
    lastName: "Smith",
    address: "123 Main St.",
    age: 45,
    title: "Engineer"
};

var myArray = ["Rob", "Smith", "123 Main St.", 45, "Engineer"];

var months = {
    firstMonth: "January",
    secondMonth: "February"
}

myArray.length;
myArray[0];
console.log(myObject.address);

var myEmployees = [];

myEmployees.push(myObject);

mySecondEmployee = {
    firstName: "Dan",
    lastName: "Lincoln",
    address: "124 Main St.",
    age: 32,
    title: "CEO"
};

myThirdEmployee = {
    firstName: "Mary",
    lastName: "Doe",
    address: "345 USA St.",
    age: 40,
    title: "Scientist"
}

myEmployees.push(mySecondEmployee);
myEmployees.push(myThirdEmployee);

console.log(myEmployees);

var totalAges = 0;

for (var i = 0; i < myEmployees.length; i = i + 1) {
    totalAges = totalAges + myEmployees[i].age;
}

var averageAge = totalAges / myEmployees.length;

console.log(averageAge);

