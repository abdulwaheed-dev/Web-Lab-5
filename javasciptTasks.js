//task1
function NumDecrement(ii){
    let id = setInterval(()=>{
        console.log(ii--);
        if(ii==0){
            console.log('done!');
            clearInterval(id)
        }
    },1000)
}
//NumDecrement(5)

//task2
const isEven = ((num)=>num%2==0)
// console.log(isEven(3)) //return false
// console.log(isEven(2)) //return true

//task3
const isOdd = ((num)=> !(num%2==0))
// console.log(isOdd(3)) //return true
// console.log(isOdd(2)) //return false

//task4
const isPrime = (num) => {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return true;
}
//console.log(isPrime(7)) //return true
//console.log(isPrime(8)) //return false

//task5
function numberFact(num,func){
    return func(num)
}
//console.log(numberFact(21,isPrime)) //return false
//console.log(numberFact(4,isEven))   //return true
//console.log(numberFact(23,isOdd))   //return true

//task6
function find(arr,func){
    for(let i in arr){
        if(func(arr[i])){
            console.log(arr[i])
            break;
        }
    }
}
//find([8,11,4,27], function(val){return val >= 10}); // return 11
//find([8,11,4,27], function(val){return val === 5}); // return undefined

//task7
function findIndex(arr,func){
    for(let i in arr){
        if(func(arr[i])){
            console.log(i)
            break;
        }
    }
}
//findIndex([8,11,4,27], function(val){return val >= 10}) //return 1
//findIndex([8,11,4,27], function(val){return val === 7}); //return undefined

//task8
function specialMultiply(x,y){
    if(arguments.length == 2){
        return x*y
    }   
    else{
        return function(y){
            return x*y
        }
    }
}
//console.log(specialMultiply(2,3))
//console.log(specialMultiply(2)(3))
//console.log(specialMultiply(2))

//task10
function printFirstAndLast(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].charAt(0)+''+arr[i].charAt(arr[i].length-1))
    }
}
//printFirstAndLast(['awesome','example','of','forEach'])

//task11
function addKeyAndValue(objArr,key,value){
    objArr.forEach((element) => {
        element[key] = value      
    })
    return objArr
}
//console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}],"isInstructor", true))

//task12
function valTimesIndex(arr){
    let resArr=[]
    for(let i = 0; i < arr.length; i++){
        resArr.push(arr[i]*i)
    }
    return resArr
}
//console.log(valTimesIndex([1,2,3]))
//console.log(valTimesIndex([5,10,15]))

//task13
function extractKey(arrObj,keyName){
    let resArr=[]
    arrObj.forEach((element)=>{
        resArr.push(element[keyName])
    })
    return resArr
}
//console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"))

//task14
function filterLetters(letterArr){
    let resArr=[]
    let count=0
    for(let i = 0; i < letterArr.length; i++){
        let l = letterArr[i]
        for(let j = 0; j < letterArr.length; j++){
            if(l == letterArr[j]){
                count++
            }
        }
        resArr.push(`${l}:${count}`)
        count = 0
    }
    return [...new Set(resArr)] //remove deplicate elements from array and return it
}
//console.log(filterLetters(['a','a','b','b','c','d','c','a']))

//task15
function filterKey(arrObj,keyName){
    let resArr = []
    arrObj.forEach((element)=>{
        if(element[keyName]==true){
            resArr.push(element)
        }
    })
    return resArr
}
//console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious:false},{name: "Tim", isInstructor:true, isHilarious: true},{name:"Matt", isInstructor:true}], "isHilarious"))

//task16
//same as task11

//task17
let users = [
    {
        username: 'larry',
        email: 'larry@foo.com',
        yearsExperience: 22.1,
        favoriteLanguages: ['Perl', 'Java', 'C++'],
        favoriteEditor: 'Vim',
        hobbies: ['Fishing', 'Sailing', 'Hiking'],
        hometown: {
            city: 'San Francisco',
            state: 'CA'
        }
    },
    {
        username: 'jane',
        email: 'jane@test.com',
        yearsExperience: 33.9,
        favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
        favoriteEditor: 'Emacs',
        hobbies: ['Swimming', 'Biking', 'Hiking'],
        hometown: {
            city: 'New York',
            state: 'NY'
        }
    },
    {
        username: 'sam',
        email: 'sam@test.com',
        yearsExperience: 8.2,
        favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
        favoriteEditor: 'Atom',
        hobbies: ['Golf', 'Cooking', 'Archery'],
        hometown: {
            city: 'Fargo',
            state: 'SD'
        }
    },
    {
        username: 'anne',
        email: 'anne@test.com',
        yearsExperience: 4,
        favoriteLanguages: ['C#', 'C++', 'F#'],
        favoriteEditor: 'Visual Studio Code',
        hobbies: ['Tennis', 'Biking', 'Archery'],
        hometown: {
            city: 'Albany',
            state: 'NY'
        }
    },
    {
        username: 'david',
        email: 'david@test.com',
        yearsExperience: 12.5,
        favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
        favoriteEditor: 'VS Code',
        hobbies: ['Volunteering', 'Biking', 'Coding'],
        hometown: {
            city: 'Los Angeles',
            state: 'CA'
        }
    }
];

//a
function printEmails(){
    for(let obj of users){
        console.log(obj.email)
    }
}
//printEmails()

//b
function printHobbies(){
    for(let obj of users){
        console.log(obj.hobbies)
    }
}
//printHobbies()

//c
function findHometownByState(stateName){
    for(let obj of users){
        if(obj.hometown.state == stateName){
            return obj.username
        }
    }
}
//console.log(findHometownByState('NY'))

//d
function allLanguages(){
    let resArr=[]
    for(let obj of users){
        resArr.push(obj.favoriteLanguages)
    }
    return [...new Set(resArr.flat())] //combine nested arrays and returns unique values.
}
//console.log(allLanguages())

//e
function hasFavoriteEditor(editor){
    for(let obj of users){
        if(obj.favoriteEditor === editor){
            return true
        }
    }
    return false
}
//console.log(hasFavoriteEditor('Visual Studio Code'))

//f
function findByUsername(user){
    for(let obj of users){
        if(obj.username === user){
            return obj
        }
    }
    return 'not found'
}
//console.log(findByUsername('larry'))

//task18
function vowelCount(input){
    input = input.split('')
    let vowels=['a','e','i','o','u']
    let obj = new Object()
    for(let i in vowels){
        obj[vowels[i]] = (input.filter((x)=>x===vowels[i])).length
    }
    return obj
}
//console.log(vowelCount('aeiou'))

//task19
function removeVowels(inputStr){
    let resArr=[]
    for(let i in inputStr){
        if(!(inputStr[i] === 'a' || inputStr[i] === 'e' || inputStr[i] === 'i' || inputStr[i] == 'o' || inputStr[i] === 'u' )){
            resArr.push(inputStr[i])
        }
    }
    return resArr
}
//console.log(removeVowels('waheed'))