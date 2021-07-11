class Card {
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
}}

class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.resilience=res;
}
    attack(target){target.resilience-=this.power}
}

class Effect extends Card {
    constructor(name,cost,description,stat,magnitude){
        super(name,cost);
        this.description=description;
        this.stat=stat;
        this.magnitude=magnitude;
}
    play( target ) {return target instanceof Unit ?  this.stat=="power" ? target.power+=this.magnitude :target.resilience+=this.magnitude : "Target must be a unit!"}
}

const rBN = new Unit("Red Belt Ninja",3,3,4);
console.log(rBN);
const hrdAlgo = new Effect("Hard Algorithm",2,"increase target's resilience by 3","res",3);
hrdAlgo.play(rBN);
console.log(rBN);
const bBN = new Unit("Black Belt Ninja",4,5,4);
const handledPromis = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","res",-2);
handledPromis.play(rBN);
console.log(rBN);
const pairProg = new Effect("Pair Programming",3,"increase target's power by 2","power",2);
pairProg.play(rBN);
console.log(rBN);
console.log(bBN);
rBN.attack(bBN);
console.log(rBN);
console.log(bBN);