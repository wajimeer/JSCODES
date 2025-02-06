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