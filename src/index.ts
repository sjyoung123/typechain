interface Human {
  name: string;
  age: number;
  gender: string;
}
const person = {
  name: "young",
  age: 25,
  gender: "man",
};

const introME = (person: Human): string => {
  return `name:${person.name} age:${person.age} gender:${person.gender}`;
};

console.log(introME(person));
console.log("hi!");
