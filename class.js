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