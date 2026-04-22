class Animal { 
    fazerSom(){
        console.log("som generico de animal...");
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("AU AU AU AU")
    }
}

class Touro extends Animal{
    fazerSom(){
        console.log("MU MU MU MU")
    }
}

class Cabra extends Animal{
    fazerSom(){
        console.log("MÉÉÉÉ  MÉÉÉÉ")
    }
}

class Gato extends Animal{
    fazerSom(){
        console.log("MIAU MIAU MIAU MIAU")
    }
}