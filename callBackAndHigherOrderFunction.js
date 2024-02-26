let display = (something) =>{
    console.log(something);
}

let higherOrderFunction = (name, age, callBackFunction)=>{
    const details = `my name is ${name}. i'm ${age} years old.`;
    callBackFunction(details);
}

higherOrderFunction("Eshan", 20, display)