//! super = keyword is used in classes to call the constructor or
//!         access the properties and methods of a parent (superclass)
//?         this = this object
//?         super = the parent

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("BugsBunny", 10, 25);
const fish = new Fish("Nemo", 8, 12);
const hawk = new Hawk("HawkEye", 15, 50);

// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);

hawk.fly();