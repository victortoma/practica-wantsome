//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayPersonName() {
        return this.firstName + " " + this.lastName;
    }
}

const Individ = new Person("vili", "toma")

console.log(Individ.displayPersonName())


//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, weakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele weakingUp, rage, eatFood si sleep
//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 

class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    eatFood() {
        return `${this.name} is eating`;
    }

    sleep() {
        return `${this.name} is going to sleep`;
    }

    wakeUp() {
        return `${this.name} is waking up`;
    }
}

class Lion extends Animal {
    constructor(name, weight) {
        super(name, weight)
    }

    roar() {
        return `${this.name} is roaring`
    }

    toilet() {
        return `to the toilet and he is ${this.weight - 10} pounds now`
    }
    
    walking(){
        return `${ this.name } is walking`
    }

    dailyRoutine(){
        return `${this.wakeUp()} and ${this.eatFood()} ${this.walking()} ${this.toilet()}. ${this.sleep()} `
    }
}

const lion = new Lion("Simba", 350);
console.log(lion.dailyRoutine())

//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu


// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...)
// console.log(table)

class Account {
    constructor(theLocation, name) {
        this.theLocation = theLocation;
        this.name = name;
    }
}

class Transaction extends Account {
    constructor(theLocation, name, sender, bank, amount, reference) {
        // console.log(this)
        super(theLocation, name)
        this.sender = sender;
        this.bank = bank;
        this.amount = amount;
        this.reference = reference;
    }
    get finalSum() {
        return this.amount = this.amount - 10;
    }
}

class Table extends Transaction {
    constructor(theLocation, name, sender, bank, amount, reference) {
        super(theLocation, name, sender, bank, amount, reference)
        this.transactions = [];
    }

    addTransaction(...param) {

        return this.transactions.push(...param)/*.theLocation, this.name, this.sender, this.bank, this.amount, this.reference*/

    }
}

const bankAccount = new Account("iasi", "vili")
const transaction1 = new Transaction("iasi", "vili", "sender1", "banca1", 50, 1)
const transaction2 = new Transaction("iasi", "vili", "sender2", "banca2", 90, 2)

const table = new Table("iasi", "vili", "sender1", "banca1", 50, 1.1)
table.addTransaction(transaction1, transaction2)
console.log(table)
