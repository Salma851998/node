var person={
    name:"salma",
     age:25
}
var personJson=JSON.stringify(person)
console.log(personJson)

var fs=require('fs')
fs.writeFileSync('file.json',personJson)
console.log(fs.readFileSync('file.json'))

personObj=JSON.parse(personJson)
personObj.name="mohamed"
personObj.age=40
console.log(personObj)
fs.writeFileSync('file.json',JSON.stringify(personObj))
// console.log(fs.readFileSync('file.js').toString())