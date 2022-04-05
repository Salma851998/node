const f=require('fs')

f.appendFileSync("notes.txt",'hello')

console.log(f.readFileSync("notes.txt").toString())

var sum=require('./index.js')
console.log(sum)

var validator=require("validator")
console.log(validator.isEmail("yasser@gmail.com"))
console.log(validator.isEmail("yassergmail.com"))

if(process.argv[2]==="add")
console.log("add item")
else if(process.argv[2]==="remove")
console.log("remove item")
else
console.log("error")

var yargs=require('yargs')
var notes=require('./notes')
console.log(notes)
yargs.command({
    command:'add',
    handler:(x)=>{
        notes.addNote(x.title,x.body)
    },
    builder:{
        title:{
            describe:"this is the add description",
            type:'string',
            demandOption:true
        },
        body:{
            describe:"this is the add description",
            type:'string',
            demandOption:true
        }
    }
})
yargs.command({
    command:'delete',
    handler:(x)=>{
       notes.removeNote(x.title)
    },
    builder:{
        title:{
            describe:"this is the add description",
            type:'string',
            demandOption:true
        }
    }
})
yargs.command({
    command:'read',
    handler:(x)=>{
        notes.readNote(x.title)
    },
    builder:{
        title:{
            describe:"this is the add description",
            type:'string',
            demandOption:true
        }
    }
})
yargs.command({
    command:'list',
    handler:()=>{
        notes.listNotes()
    }
})
console.log(yargs.argv)