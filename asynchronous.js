let fun1 = () =>{
    console.log("fun1");
}


let loadingTime = () =>{
    console.log("fun2");
}
let fun2 = () =>{
    setTimeout(loadingTime,2000);
}

let fun3 = () =>{
    console.log("fun3");
}

fun1()
fun2()
fun3()