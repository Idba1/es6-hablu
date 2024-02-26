class parent {
    assets1(){
        console.log("eta amar dada r assets");
    }
    assets2(){
        console.log("eta amar abba r assets");
    }
}

class Ami extends parent{
    myAssets(){
        super.assets1();
        super.assets2();
    }
}

let myAssets = new Ami();
myAssets.myAssets();
console.log(myAssets);



class vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

class Buss extends vehicle{
    constructor(name,price,seat){
        super (name,price);
        this.seat = seat;
    }
}

let Labiba = new Buss("Labiba", "240", "50");
console.log(Labiba);