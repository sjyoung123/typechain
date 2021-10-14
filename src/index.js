var person = {
    name: "young",
    age: 25,
    gender: "man"
};
var introME = function (person) {
    return "name:" + person.name + " age:" + person.age + " gender:" + person.gender;
};
console.log(introME(person));
console.log("hi!");
