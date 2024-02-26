/* class Book{
    fun(){
        console.log("Hello");
    }
}
let newObj = new Book()
newObj.fun() */


class Book{
    static fun(){
        console.log("Hello, this is static mathod");
    }
}
Book.fun()