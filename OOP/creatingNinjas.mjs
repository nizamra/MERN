class Ninja{
    constructor(x){
        this.name = x;
        this.health = 100;
        this.speed = 10;
        this.strength = 10;
    }
    sayName(){console.log(this.name)}
    showStats(){console.log(this)}
    drinkSake(){this.health+-10}
}
export default Ninja;

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
