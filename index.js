// Data types
/**
 * string 
 * number
 * boolean
 */

let firstName = "Omar"
console.log(firstName)

let age = 20
console.log(age)

let accepted = true
console.log(accepted)

/**
 * Naming Conventions:-
 * Dosnot start with number
 * no special character
 * no reserved word (if..)
 * no space
 */

// case senstive
let lastName = 'osama'
console.log(lastName)

let LastName = 'zain'
console.log(LastName)

/////////////////////////////////////////////////////////////////////////////////

// const varaibles

const value = 50
// value = 60
console.log(value)

// Note JS (Interpreted) --> Execute line by line
console.log('Textttt')

///////////////////////////////////////////////////////////////////////////////

// Operators
// Arthmetic operators

let num1 =2
let num2 = 3

let result = num1 + num2
console.log(result)

result = num1 * num2
console.log(result)

result = num2 - num1
console.log(result)

result = num1 / num2
console.log(result)

result = num1 % num2
console.log(result)

result = num1 ** num2
console.log(result)

///////////////////////////////////////////////////////////////////////////////

// Assigemnt operators 
// = += -= /= *= %= 
num1+=5 // num1 = num1 + 5

///////////////////////////////////////////////////////////////////////////

// comparison operators
// == === != !== > < >= <=

num1 = 7
num2 = 9

console.log(num1 !== num2)

//////////////////////////////////////////////////////////////////////////////////

// logical operator
// && ||

// && 
/**
 *  T T --> T
 *  T F --> F
 *  F T --> F
 *  F F --> F
 */

/**
 *  ||
 *  T T --> T
 *  T F --> T
 *  F T --> T
 *  F F --> F
 */

///////////////////////////////////////////////////////////////////////////////

// POST increment-decrement / Pre Increment-decrement

// z++ --> post
// ++z --> pre

let z = 5
console.log(z++) // 1  --> 2   // 5
console.log(z)   // 6
console.log(++z) // 3   //7

////////////////////////////////////////////////////////////////////////////////

/**
 * Precdence
 * ()
 * ++ --
 * / *
 * + -
 * =
 */

/////////////////////////////////////////////////////////////////////////////////

// conditions 
/**
 * if(condition){
 * }
 * else{
 * }
 */

/**
 * if(condition1){
 * }
 * else if(condition2){
 * }
 * else{
 * }
 */

let test = 5
if(test ==0){
    console.log('Number is eqaul to zero')
}
else if(test>10){
    console.log('Number is greater than 10')
}
else{
    console.log('Number is less than 10')
}
///////////////////////////////////////////////////////////////////////////////////

// DOM elements

document.getElementById('paragraph').innerText = 'Grading system'

///////////////////////////////////////////////////////////////////////////////

// Task
// Take 2 input from user --> name / grade
// A --> 100/90
// B --> 90/ 85
// C --> 85 / 70
// D --> 70 / 60
// F otherwsie

console.log(parseInt('35abc'))
console.log(Number('35abc'))

// let studentName = prompt('Enter your name')
// let mark = parseInt(prompt('Enter mark'))

// if(mark<=100 && mark>=90){
//     document.getElementById('grading').innerText = studentName + ' Your grade is A'
// }
// else if(mark<90 && mark>=85){
//     document.getElementById('grading').innerText = studentName + ' Your grade is B'
// }

// else if(mark<85 && mark>=70){
//     document.getElementById('grading').innerText = studentName + ' Your grade is C'
// }

// else if(mark<70 && mark>=60){
//     document.getElementById('grading').innerText = studentName + ' Your grade is D'
// }
// else{
//     document.getElementById('grading').innerText = studentName + ' Your grade is F'
// }

///////////////////////////////////////////////////////////////////////////////////

// Switch

const country = 'India'
// 'Egypt'
switch(country){
    case "Egypt":
        console.log('It is 20 deg')
        break
    case "Paris":
        console.log('It is now 10 deg')
        break
    case "London":
        console.log('It is now 5 deg')
        break
    default:
        console.log('Temp is undefined')
}

///////////////////////////////////////////////////////////////////////////////

// for loop

/**
 * for(intalization;condition;increament){
 * }
 */

for(let i=0;i<=10;i++){
    if(i%2 ==0){
        console.log(i + ' is even')
    }
}

// Task while loop odd number

let i = 0
while(i<=10){
    if(i%2 ==1){
        console.log(i + ' is odd') 
    }

    i++
}

//////////////////////////////////////////////////////////////////////////////

// functions
function add(a,b){
    return a+b
}

console.log(add(3,5))

// Arrow function

let add1 = (a,b) => a+b

let add2 = (a,b)=>{
    return a+b
}

console.log(add2(5,5))

function measures(uName,h,w){
    console.log(uName)
    return h + w
}

let measures1=(uName,h,w)=>{
    console.log(uName)
    return h + w
}
console.log(measures1('ali',170,80))

///////////////////////////////////////////////////////////////////////////////////

let maxNo = (a,b)=>{
    if(a>b){
        return a + ' is greater than ' + b
    }
    console.log('Message')    
    return b + ' is greater than ' + a
}
// console.log(maxNo(5,3))
console.log(maxNo(3,5))

//////////////////////////////////////////////////////////////////////////////////

// Array 
let fruits = ['Orange','apple','grapes']
console.log(fruits[0])

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

// forEach
// el --> elements inside array (strings)
// i --> index of element
fruits.forEach((fruit,i)=>{
console.log(fruit,i)
})

////////////////////////////////////////////////////////////////////////////////

// Objects

let user = {
    name:'Omar',
    age:30,
    email:'omar@gmail.com'
}

// Dot notation
console.log(user.name)

// Bracket notation
console.log(user["name"])

let selection = 'name'
user[selection]= 'Hamza'

console.log(user)

document.getElementById('myForm').addEventListener('submit',(e)=>{
    // prevent refresh
    e.preventDefault()
    let u = document.getElementById('text1').value  // email / name
    // user['email'] = 'amr@gmail.com'
    user[u] = document.getElementById('value1').value
    // user.u
    console.log(user)
})

/////////////////////////////////////////////////////////////////////////////////


// name
// age 
// phone 
// job
// email

// user.name = new value
// user. age = new value
// user.phone = new value
// user. job = new value
// user.email = new value


// user[x] = new value

//////////////////////////////////////////////////////////////////////////////////

// shorthand property

let uName = 'Yassin'
let uAge = 30

let person ={
    // uName:uName  
    uName,
    agePerson:uAge
}

console.log(person)

///////////////////////////////////////////////////////////////////////////////

//  Array of objects

students = [
    // s--> s.age
    {
        name:'Omar',
        age:15,
        math:15,
        eng:20,
        arabic:17,
        degrees:[15,20,17]

    },
    {
        name:'Zain',
        age:17,
        math:20,
        eng:15,
        arabic:8,
        degrees:[20,15,8]

    },
    {
        name:'Maged',
        age:17,
        math:13,
        eng:16,
        arabic:17,
        degrees:[13,16,17]

    }
]

// forEach --> name / sum = 0 
// omar
// 50

/**
     {
        name:'Omar',
        age:15,
        math:15,
        eng:20,
        arabic:17,
        degrees:[15,20,17]

    },
 */
students.forEach( (el)=>{
    console.log(el.name)
    sum = 0
    el.degrees.forEach((deg)=> sum+=deg)
    console.log(sum)
} )

// find filter
// s--> object
// find --> first appearence / first occurrence 
const s = students.find( (el)=> el.age === 17 )
console.log(s)

// filter --> new array 
const u = students.filter( (s)=> s.age ===17 )
console.log(u)

//////////////////////////////////////////////////////////////////////////////////

// Adavanced Javascript
// Syncrhouns

// callback function pass parmeters of another function
// callback --> sync / async

// callback sync

// function displayResult(sum){
//     console.log('Result is ' + sum)
// }

function sumCalculaion(num1,num2,myCallback){
    let sum = num1 + num2 // 10
    myCallback(sum)
}

// sumCalculaion( 5,5,displayResult )

sumCalculaion(5,5,(sum)=>{
    console.log('Result is ' + sum)
})

// async callback

// console.log('First')

// // const message = () => console.log('This msg is shown after 3 sec')

// // setTimeout(message,1000)

// // Annonyums function
// setTimeout(
//     ()=>{console.log('This msg is shown after 3 sec')
// },2000)

// console.log('Last')

////////////////////////////////////////////////////////////////////////////

// callback hell
// Promise async
// a --> async
// b --> async
// console.log()
let myPromise = new Promise((resolve,reject)=>{
    if(3>2){
        // success
        resolve('Right')
    }
    // error
    reject('Wrong')

})

myPromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

console.log('Hello from end of file')

//////////////////////////////////////////////////////////////////////////////////

// aysnc / await 
// async --> function return promise
// await --> function wait promise finish


let hello = async() =>{
    if(5==5){
        return greeting = await Promise.resolve('Hello')
    }
    return greeting = await Promise.reject('Error')
}

hello().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

/////////////////////////////////////////////////////////////////////////////////

// fetch

let fetchUsers = async() =>{
    try{
        // json
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)

    }
    catch(e){
        alert(e)
    }
}

fetchUsers()
// console.log('laaaast')







