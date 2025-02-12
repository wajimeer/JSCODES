// class library {
//     constructor(){
//         this.addbook = []
//     }
//     addbooks(title,author,refrencenumber){
//        this.addbook.push({title,author,refrencenumber})
//     }
//     findbook(find){
//      this.addbook.find(book=>book.refrencenumber===find)
//         console.log(`you find this book ${find}`) 
//     }
// }
// let person = new library('atomic','hobb',123)
// person.findbook(123)


// let user ={
//     name:"jawad",
//     age:25,
//     city:"multan",
//     street:"mahrabadi ggggggg"
// }
// for(let users in user){
   
//     console.log(users,':',user[users])
// }

// class Student {
//     constructor() {
//         this.grades = []; 
//     }

//     addGrades(name, studentGrade) {
//         this.grades.push({ name, studentGrade }); 
//     }

//     countAverage() {
//         if (this.grades.length === 0) {
//             console.log("No students available to calculate average.");
//             return;
//         }

//         let total = this.grades.reduce((sum, student) => sum + student.studentGrade, 0);
//         let average = total / this.grades.length;

//         if (average > 90) {
//             console.log(`This student has A+ with an average of ${average}`);
//         } else if (average > 80) {
//             console.log(`This student has B+ with an average of ${average}`);
//         } else if (average > 70) {
//             console.log(`This student has C+ with an average of ${average}`);
//         } else {
//             console.log(`Student failed with an average of ${average}`);
//         }
//     }
// }


// let stud = new Student();


// stud.addGrades("Ali", 100);
// stud.addGrades("Wali", 60);
// stud.addGrades("Jali", 80);


// stud.countAverage();
// class Animals{
//     static create(type){
//         if(type==='dog'){
//             return new Dog()
//         }
//         if(type ==='cat'){
//             return new Cat()
//         }
//         return Animals
//     }
//     speak(){
//         console.log('animals make sounds')
//     }
    
// }
// class Dog extends Animals{
//     speak(){
//         console.log('Dog barks')
//     }
// }
// class Cat extends Animals{
//     speak(){
//         console.log('cats meawo')
//     }
// }
// let pet = Animals.create('cat')
// pet.speak()


// class Shop {
//     constructor(name) {
//         this.name = name;
//     }
    
//     showShop() {
//         console.log(`This shop's name is ${this.name}`);
//     }
// }

// class Things extends Shop {
//     constructor(name, things) {
//         super(name);
//         this.things = things;
//     }
    
//     shopThings() {
//         console.log(`Shop has the following things: ${this.things}`);


//     }
// }

// class ThingsName extends Things {
//     constructor(name, things, sugar, rice, cotton) {
//         super(name, things);
//         this.sugar = sugar;
//         this.rice = rice;
//         this.cotton = cotton;
//     }
    
//     showItems() {
//         console.log(`Store Name: ${this.name}`);
//         console.log(`Items Available - Sugar: ${this.sugar}, Rice: ${this.rice}, Cotton: ${this.cotton}`);
//     }
// }


// const myShop = new ThingsName("General Store", ["sugar", "rice", "cotton"], "5kg", "10kg", "20 meters");
// myShop.showShop();     
// myShop.shopThings();    
// myShop.showItems();     

// function deepCopy(obj) {
//     if (obj === null || typeof obj !== "object") {
//         return obj; 
//     }

    
//     let isArray = false;
//     for (let key in obj) {
//         if (key == "0" || key == "length") { 
//             isArray = true;
//             break;
//         }
//     }

//     let copy = isArray ? [] : {};

//     for (let key in obj) {
//         copy[key] = deepCopy(obj[key]); 
//     }

//     return copy;
// }


// let obj1 = { name: "Ali", details: { age: 25, city: "Lahore" }, hobbies: ["reading", "gaming"] };

// let obj2 = deepCopy(obj1);

// obj2.details.city = "Karachi";
// obj2.hobbies.push("coding");

// console.log(obj1.details.city); 
// console.log(obj2.details.city); 
// console.log(obj1.hobbies); 
// console.log(obj2.hobbies); 

// function deepCopy(obj){
//     let newobj ={}
//     for(let key of obj){
//         if (typeof obj[key]==='object'&&obj[key]!==null){
//             newobj[key]=deepCopy(obj[key])
//         }else{
//             newobj[key]=obj[key]
//         }
        
//     }
//     return newobj
// }
// let orignal={
//     name:'waji',
//     address:{
//         city:"newyork"
//     }
// }
// let cloned =deepCopy(orignal)

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
let obj1 = {a:1,b:2}
let obj3 = {c:1,d:2}
console.log(marge(obj1,obj3))

function finds(obj){
   
    for(let key in obj){
        return false;
    }
    return true;
}
console.log(finds({a:1}))
