const getProperty = <T, U extends keyof T>(person: T, property: U) => {
  return person;
};

const person = { name: "Alice", age: 30 };
const person2 = { nam: "Alice", ag: 30, email: "emni" };
console.log(getProperty(person, "name"));
