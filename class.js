class library {
    constructor(){
        this.addbook = []
    }
    addbooks(title,author,refrencenumber){
       this.addbook.push({title,author,refrencenumber})
    }
    findbook(find){
     this.addbook.find(book=>book.refrencenumber===find)
        console.log(`you find this book ${find}`) 
    }
}
let person = new library('atomic','hobb',123)
person.findbook(123)


let user ={
    name:"jawad",
    age:25,
    city:"multan",
    street:"mahrabadi ggggggg"
}
for(let users in user){
   
    console.log(users,':',user[users])
}

class Student {
    constructor() {
        this.grades = []; 
    }

    addGrades(name, studentGrade) {
        this.grades.push({ name, studentGrade }); 
    }

    countAverage() {
        if (this.grades.length === 0) {
            console.log("No students available to calculate average.");
            return;
        }

        let total = this.grades.reduce((sum, student) => sum + student.studentGrade, 0);
        let average = total / this.grades.length;

        if (average > 90) {
            console.log(`This student has A+ with an average of ${average}`);
        } else if (average > 80) {
            console.log(`This student has B+ with an average of ${average}`);
        } else if (average > 70) {
            console.log(`This student has C+ with an average of ${average}`);
        } else {
            console.log(`Student failed with an average of ${average}`);
        }
    }
}


let stud = new Student();


stud.addGrades("Ali", 100);
stud.addGrades("Wali", 60);
stud.addGrades("Jali", 80);


stud.countAverage();
class Animals{
    static create(type){
        if(type==='dog'){
            return new Dog()
        }
        if(type ==='cat'){
            return new Cat()
        }
        return Animals
    }
    speak(){
        console.log('animals make sounds')
    }
    
}
class Dog extends Animals{
    speak(){
        console.log('Dog barks')
    }
}
class Cat extends Animals{
    speak(){
        console.log('cats meawo')
    }
}
let pet = Animals.create('cat')
pet.speak()


class Shop {
    constructor(name) {
        this.name = name;
    }
    
    showShop() {
        console.log(`This shop's name is ${this.name}`);
    }
}

class Things extends Shop {
    constructor(name, things) {
        super(name);
        this.things = things;
    }
    
    shopThings() {
        console.log(`Shop has the following things: ${this.things}`);


    }
}

class ThingsName extends Things {
    constructor(name, things, sugar, rice, cotton) {
        super(name, things);
        this.sugar = sugar;
        this.rice = rice;
        this.cotton = cotton;
    }
    
    showItems() {
        console.log(`Store Name: ${this.name}`);
        console.log(`Items Available - Sugar: ${this.sugar}, Rice: ${this.rice}, Cotton: ${this.cotton}`);
    }
}


const myShop = new ThingsName("General Store", ["sugar", "rice", "cotton"], "5kg", "10kg", "20 meters");
myShop.showShop();     
myShop.shopThings();    
myShop.showItems();     

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj; 
    }

    
    let isArray = false;
    for (let key in obj) {
        if (key == "0" || key == "length") { 
            isArray = true;
            break;
        }
    }

    let copy = isArray ? [] : {};

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]); 
    }

    return copy;
}


let obj1 = { name: "Ali", details: { age: 25, city: "Lahore" }, hobbies: ["reading", "gaming"] };

let obj2 = deepCopy(obj1);

obj2.details.city = "Karachi";
obj2.hobbies.push("coding");

console.log(obj1.details.city); 
console.log(obj2.details.city); 
console.log(obj1.hobbies); 
console.log(obj2.hobbies); 



function marge(obj,obj2){
    let emptyobj={}
    for(let key in obj){
        emptyobj[key]=obj[key]
    }
    for(let key in obj2){
        emptyobj[key]=obj2[key]
    }
    return emptyobj;
}
let obj4 = {a:1,b:2}
let obj3 = {c:1,d:2}
console.log(marge(obj4,obj3))

function finds(obj){
   
    for(let key in obj){
        return false;
    }
    return true;
}
console.log(finds({a:1}))


function Library(title,author){
    this.title=title;
    this.author=author;
}
Library.prototype.removebook=function (booktitle){
    if (this.title!==booktitle){
        console.log(`Book "${booktitle}" not found.`);
    }else {
        this.title=''
        console.log(`book removed`);
    }
    
    
}
Library.prototype.findbook=function(booktitle){
   if (this.title===booktitle){
    console.log(`Book "${booktitle}"  found.`);
   }
}
let myLibrary = new Library('JavaScript Basics', 'John Doe');
myLibrary.findbook('JavaScript Basics');
myLibrary.removebook('JavaScript Basics'); 
myLibrary.findbook('JavaScript Basics'); 
// merge two object
function merge (obj,obj1){
    let empty = {}
    for (let key in obj){
        empty[key]=obj[key]
    }
    for (let key in obj1){
        empty[key]=obj1[key]
    }
return empty 

}
let a={a:1,b:2}
let b={d:4,c:3}
console.log(merge(a,b))
// Create a Person constructor function that takes name, 
// age, and an array friends.
//  Add a method addFriend() that allows adding a new 
// friend to the friends array.


function Person ( name,age ,friend){
    this.name=name;
    this.age=age;
    this.friend=friend||[];

}
Person.prototype.addfriend = function (friendname){
    this.friend.push(friendname)
}
let newfriend = new Person('waji',22,['ali','ahmed','jawad'])
console.log(newfriend.friend)
newfriend.addfriend('zain')
console.log(newfriend)  

// Create a Person constructor function that has
//  name and age properties. 
// Add a static method isAdult() that returns
//  true if the person’s age is 18 or above, and false 
// otherwise
function persons(name,age){
    this.name = name;
    this.age=age;
}
persons.prototype.properties = function (){
    if(this.age>18){
        return true
    }else{
        return false;
    }
}
let person1 = new persons('waji',17)
console.log(person1.properties())



// Create a Product constructor function that takes name,
//  price, and category as parameters. Add a method
//   applyDiscount(discount)
//  that applies a percentage discount on the product price.

function product(name,price,category){
    this.name=name;
    this.price=price;
    this.category=category;
}
product.prototype.apllydiscount=function (discount){
    if(discount<0||discount>100){
        console.log(`invalid discount percentage`)
        return;
    }
    this.price-=(this.price*discount)/100;
}
const product1 = new product("Laptop", 1000, "Electronics");
console.log(`Original Price: $${product1.price}`); 

product1.apllydiscount(10); 
console.log(`Discounted Price: $${product1.price}`); 

function sumNestedArray(arr) {
    let sum = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i]; 
        } else if (arr[i]) {
            sum += sumNestedArray(arr[i]);
        }
    }

    return sum;
}


const numbers = [1, [2, [3, 4], 5], [6, 7]];
console.log(sumNestedArray(numbers));

// methode changing
let obj= {
    title:'123',
    author:'waji',
    pages:300,
    method:function(pages){
        this.pages=pages
        return this
    },
    recallingmethode:function(){
        console.log(`${this.title},${this.author},${this.pages}`)
        return this;
    }
}
obj.method(350).recallingmethode()

// animal function nested
function animal(type,breed){
    this.type=type;
    this.breed=breed;

}
animal.prototype.showdetails=function(){
    console.log(`his type is ${this.type} and his breed is ${this.breed} `)
}
function dog(type,breed,speak){
    animal.call(this,type,breed)
    this.speak=speak;
}
dog.prototype=Object.create(animal.prototype)
dog.prototype.constructor=dog;
dog.prototype.bark=function (){
    console.log(`his type is ${this.type} and his breed is ${this.breed} and they bark ${this.speak}`)
}
let ani = new dog("dog","bully","baow baow")
ani.bark()

const team = {
    leader: "Sarah",
    members: [
      { name: "John", role: "Developer" },
      { name: "Ali", role: "Designer" },
      { name: "Emma", role: "Manager" }
    ]
  };
  const {leader,members:[{name:desName},{name:devName},{name:man}]}=team
  console.log(leader)
  console.log(desName)
  console.log(devName)
  console.log(man)

  function userss(name,age){
    this.name=name;
    this.age=age
    this.displayinfo=function(){
        console.log(`this is my ${this.name} and this is my age ${this.age} `)
    }
  }
  const users = new userss('waji',22)
  users.displayinfo()

  function BankingSystem(holdername, balance) {
    this.holdername = holdername;
    this.balance = balance;
}


BankingSystem.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    } else {
        console.log("Deposit amount must be greater than zero.");
    }
};

BankingSystem.prototype.withdraw = function(amount) {
    if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Beep Beep! You withdrew ${amount}. Remaining Balance: ${this.balance}`);
    } else if (amount <= 0) {
        console.log("Withdrawal amount must be greater than zero.");
    } else {
        console.log("Insufficient balance.");
    }
};


const account1 = new BankingSystem("Ali", 5000);
account1.deposit(1000);  
account1.withdraw(2000);  
account1.withdraw(5000);  

