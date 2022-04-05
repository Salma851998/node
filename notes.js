const fs=require('fs')

/*const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>{
        return note.title===title
    })
    if(duplicateNotes.length==0)
    {notes.push(
        {
            title,
            body
        })

    saveNotes(notes)
}
else
{
    console.log("error duplicate title is not allowed")
}
}
*/
const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.find((note)=>{
        return note.title===title
    })
    if(!duplicateNotes)
    {notes.push(
        {
            title,
            body
        })

    saveNotes(notes)
}
else
{
    console.log("error duplicate title is not allowed")
}
}
const removeNote=(title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>{
        return note.title!==title
    })
  
    saveNotes(notesToKeep)
    console.log(notesToKeep)
}
const readNote=(title)=>
{
    const notes=loadNotes()
    const returndNote=notes.find((note)=>
    {
        return note.title===title
    })
    if(returndNote)
    console.log(returndNote.body)
    else
    console.log("note is not found")
}
const listNotes=()=>
{
    const notes=loadNotes()
    notes.forEach((ele) => {
        console.log(ele.body)
    });
    
}

const loadNotes=()=>{
    try{
    const dataBuffer=fs.readFileSync('notes.json').toString()
    return JSON.parse(dataBuffer)
    }
    catch(e)
    {
        return []
    }
}
const saveNotes=(notes)=>{
    const saveData=JSON.stringify(notes)
    fs.writeFileSync("notes.json",saveData)

}

module.exports={
    addNote,
    removeNote,
    readNote,
listNotes}