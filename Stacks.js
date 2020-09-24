// Stack is A linear data structure which follows A particular order in which the operations are performed. 
// The order may be LIFO(Last In First Out) or FILO(FIRST IN LAST OUT)

var letters = []
var word = "freeCodeCamp"
var rword = ""

for (var i = 0; i < word.length; i++){
    letters.push(word[i])
}

for (var i = 0; i < word.length; i++){
    rword += letters.pop()
}
if(rword === word){
    console.log(word + " is a palindrome")
}
else{
    console.log(word + " is not a palindrome")
}

var Stack = function(){
    this.count = 0;
    this.storage = {};
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++
    }
    this.pop = function(){
        if(this.count === 0){
            return undefined
        }
        this.count--
        var result = this.storage[this.count];
        delete
        this.storage[this.count]
        return result
    }
    this.size = function(){
        return this.count
    }
    this.peek = function(){
        return this.storage[this.count - 1]
    }
}

var myStack = new Stack()
myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
myStack.push("freeCodeCamp")

console.log(myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())