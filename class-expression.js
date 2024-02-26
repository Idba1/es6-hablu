let person = class{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let newPerson = new person("Eshan", 21);
let newPerson2 = new person("Idba", 20);
console.log(newPerson, newPerson2);