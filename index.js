const user = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  footSize: 45,
};

// JSON

// stringify - перетворює JS об'єкт в JSON
// parse - перетворює JSON в JS об'єкт

const jsonString = JSON.stringify(user);
JSON.parse(jsonString);
