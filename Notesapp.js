const notescontainer= document.querySelector(".note-contianer");

const createbtn= document.querySelector(".btn");

let notes=document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createbtn.addEventListener("click", ()=>{
    let note= document.createElement("div")
    let inputBox= document.createElement("div");
    let icon=document.createElement("i");

    note.className="note";
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");

    icon.className = "bi bi-archive-fill";

    note.appendChild(icon);
    note.appendChild(inputBox);
    inputBox.focus(); // cursor goes inside note


    notescontainer.appendChild(note);
    
})
notescontainer.addEventListener("click", function(e){
    if(e.target.tagName=="I"){
        e.target.parentElement.remove();
        updateStorage();
    }
})
