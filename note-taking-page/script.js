//asking user for its name and storing in local memory
askName();
displayPreviousNotes();
function askName(){
    let names=localStorage.getItem('name');
  if(names==null)  
  { namesobj=[];  //name=null means no name is saved in memory.hence we will ask the user.
    let name=prompt('Enter Your Name','user'); 
    let greet=document.getElementById('welcome');
    if(name!=null) greet.innerHTML=`Welcome ${name}!`; 
     namesobj.push(name);
     localStorage.setItem('name',JSON.stringify(namesobj));
     //adding the name to the memory to display it the next time user opens the website
}
 else{
  //displaying the stored name from the memory.
  namesobj=JSON.parse(names);
  let greet=document.getElementById('welcome');
  let name=namesobj[0];
    greet.innerHTML=`Welcome ${name}!`;
  }
  
    
}


//storing notes in local storage
let btn=document.getElementById('addbtn');
//displaying all previous notes

function displayPreviousNotes(){
  title=localStorage.getItem('titles');
  if(title==null) titleobj=[];
  else titleobj=JSON.parse(title);
   
    let notes=localStorage.getItem('notes');
    if(notes!=null)  {
    //updating notesobj to add values in it.
    notesobj=JSON.parse(notes);
    
      //here we are traversing notesobj and adding the html string to it.
      //we didn't call saved notes as it is only displaying last note in notesobj.
        notesobj.forEach(function(element,index)
           {   html="";
          
           html+=` <div class="card mx-3 my-3"  style="width:15rem;">
           <div class="card-body">
               <h5 class="New note">${titleobj[index]}</h5>
               <div class="input-group">
      
                   <textarea class="form-control" id="savedtext" aria-label="With textarea">${element}</textarea>
               </div><br>
               <button id="${index}"onclick="deleteNotesAlert(this.id)" class="btn btn-primary">Delete Note</button>
               <button id="${index}"onclick="UpdateNotes(this.id)" class="btn btn-success my-2">Update Note</button></div></div>`;;
               let div=document.getElementById('saved-notes');
        div.innerHTML+=html;  
           }
           
       
    );
    }
    else 
    document.getElementById("saved-notes").innerHTML="No notes created yet";
    
}
//storing all the notes as an array in local storage
btn.addEventListener('click',function(){
    //below case is only possible if no notes found statement has been display otherwise the childnodes will always contain div. 
    //now we have to remove this p tag to make space for displaying all notes.
    (document.getElementById("saved-notes").childNodes[0].nodeName==='p')
    document.getElementById("saved-notes").innerHTML="";
    
    text=document.getElementById('text');
    //first we have to get our notes array stored in local so that we can update its value
    let notes=localStorage.getItem('notes');
    if(notes==null)  
    { notesobj=[]; //if notes is null we create an empty array i.e. initially array had null value so our array in which value is pushed is empty as well
    }
   else{
    //updating notesobj to add values in it.
    notesobj=JSON.parse(notes);
    }
    
    //adding new note to notesobj
    notesobj.push(text.value);
    //updating local storage
    localStorage.setItem('notes',JSON.stringify(notesobj));
    text.value=""; //removing all the text from add-note card to make space for new text
    // console.log(JSON.parse(notes));
     document.getElementById('saved-notes').innerHTML="";
     //removing all notes to print all notes again again.
     //adding title
     titlename=document.getElementById('addTitle');
    //parsing titles
     let titles=localStorage.getItem('titles');
    if(titles==null)
      titleobj=[];
    else {titleobj=JSON.parse(titles);
     }
     //if nothing is entered by user then notes 2 etc. in this form value is stored
    if(titlename.value==='')
      titleobj.push(`Note ${titleobj.length+1}`);
    else 
      titleobj.push(titlename.value);
    localStorage.setItem('titles',JSON.stringify(titleobj));
    titlename.value="";
    
displayPreviousNotes();
});
//checking if note is empty.

//display saved notes to your notes section ***REPLACED BY displayPreviousNotes();***
// function savedNotes(){
  
//   //first we have to get our notes array stored in local so that we can update its value
//   let notes=localStorage.getItem('notes');
//   if(notes==null)  
//   { notesobj=[]; //if notes is null we create an empty array i.e. initially array had null value so our array in which value is pushed is empty as well
//   }
//  else{
//   //updating notesobj to add values in it.
//   notesobj=JSON.parse(notes);
//   }
//   notesobj.forEach(function(element,index){
//       html="";
//       html+=` <div class="card mx-3 my-3"  style="width:15rem;">
//       <div class="card-body">
//           <h5 class="New note">Note${index+1}</h5>
//           <div class="input-group">

//               <textarea class="form-control" id="savedtext" aria-label="With textarea">${element}</textarea>
//           </div><br>
//           <button id="${index}"onclick="deleteNotesalert(this.id)" class="btn btn-primary">Delete Note</button></div></div>`;
          
        
//   });
//   //displaying the last note.
//   let div=document.getElementById('saved-notes');
//   div.innerHTML+=html;
// }

//confirming before deleting note
function deleteNotesAlert(index){
 ans=confirm('Are you sure you want to delete this note? Press ok to continue');
 if(ans==true) deleteNotes(index);
}


//To delete notes. steps-Removing from notesobj. and calling shownotes to show new array.

function deleteNotes(index){
  
    let notes=localStorage.getItem('notes');
  if(notes==null)  
  { notesobj=[]; //if notes is null we create an empty array i.e. initially array had null value so our array in which value is pushed is empty as well
  }
 else{
  //updating notesobj to add values in it.
  notesobj=JSON.parse(notes);
  
  }
  notesobj.splice(index,1); //removing this index from storage
  localStorage.setItem('notes',JSON.stringify(notesobj));
  //updating local storage.
  
  //removing title from memory. 
  titlename=document.getElementById('addTitle');
  //parsing titles
   let titles=localStorage.getItem('titles');
  if(titles==null)
    titleobj=[];
  else {titleobj=JSON.parse(titles);
   }
   titleobj.splice(index,1); //removing title from memory
   localStorage.setItem('titles',JSON.stringify(titleobj)); //saving title
   document.getElementById(index).parentNode.parentNode.remove();
  //This is removing the to be deleted nodes parent body from display.
}

//searching
document.getElementById('search-btn').addEventListener('click',
function searchNotes(){
    let search=document.getElementById('search-txt').value;
    //this will stores string enetered by user in searchbox
    // console.log(search);
    let notes=localStorage.getItem('notes');
  if(notes==null)  
  { notesobj=[]; //if notes is null we create an empty array i.e. initially array had null value so our array in which value is pushed is empty as well
  }
 else{
  //updating notesobj to add values in it.
  notesobj=JSON.parse(notes);
  
  }
  document.getElementById("saved-notes").innerHTML="";
  //this statement will clear our saved notes html to make space for searched notes or no notes found p statement.
  notesobj.forEach(function(element,index){
    if(element.toLowerCase().includes(search.toLowerCase())==true )
     {   html="";
     html+=` <div class="card"  style="width:15rem;">
     <div class="card-body">
         <h5 class="New note">Note${index+1}</h5>
         <div class="input-group">

             <textarea class="form-control" id="savedtext" aria-label="With textarea">${element}</textarea>
         </div><br>
         <button id="${index}"onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button></div></div>`;
         let div=document.getElementById('saved-notes');
  if(notesobj.length==0||div==null) div.innerHTML='<p>No notes added.</p>';
  else
  div.innerHTML+=html;  
     }
     
  });
  if(document.getElementById("saved-notes").childElementCount==0)
     document.getElementById("saved-notes").innerHTML="<p>No notes found</p>";
     // no notes were found that is there are no children of saved notes div.
}
);
//update option. when we click update we paste the title in add note section and then call delete function to delete this note from display and memory.
//delete note then will call displayprevious note function which will again add the note in memory and display.

 function UpdateNotes(index){
  let notes=localStorage.getItem('notes');
  if(notes==null)  
  { notesobj=[]; //if notes is null we create an empty array i.e. initially array had null value so our array in which value is pushed is empty as well
  }
 else{
  //updating notesobj to add values in it.
  notesobj=JSON.parse(notes);
  }
  text=document.getElementById('text');
  text.value=notesobj[index];
  // notesobj[index]=text.value; 
  // localStorage.setItem('notes',JSON.stringify(notesobj));
  //this is commented as delete notes as add button will add these values itself. we don't need to update values
  // text.value=""; 
  console.log(JSON.parse(notes));
  //  document.getElementById('saved-notes').innerHTML="";
  //  adding title
   titlename=document.getElementById('addTitle');
  //parsing titles
   let titles=localStorage.getItem('titles');
  if(titles==null)
    titleobj=[];
  else {titleobj=JSON.parse(titles);
   }
   titlename.value=titleobj[index];
  //  titleobj[index]=titlename.value;
  
  //  localStorage.setItem('titles',JSON.stringify(titleobj));
  //  titles="";
  //this is commented as delete notes as add button will add these values itself. we don't need to update values
  deleteNotes(index);
  // document.getElementById('saved-notes').innerHTML=""; //giving error. cannot read properties of null
  // displayPreviousNotes();
  //these both are commented as add button will call displayprevious notes and calling it again here is displaying saved notes twice.
 }

// console.log("Welcome to notes app. This is app.js");
// showNotes();

// // If user adds a note, add it to the localStorage
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(e) {
//   let addTxt = document.getElementById("addTxt");
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   notesObj.push(addTxt.value);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   addTxt.value = "";
// //   console.log(notesObj);
//   showNotes();
// });

// // Function to show elements from localStorage
// function showNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let html = "";
//   notesObj.forEach(function(element, index) {
//     html += `
//             <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//                     <div class="card-body">
//                         <h5 class="card-title">Note ${index + 1}</h5>
//                         <p class="card-text"> ${element}</p>
//                         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
//                     </div>
//                 </div>`;
//   });
//   let notesElm = document.getElementById("notes");
//   if (notesObj.length != 0) {
//     notesElm.innerHTML = html;
//   } else {
//     notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//   }
// }

// // Function to delete a note
// function deleteNote(index) {
// //   console.log("I am deleting", index);

//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }

//   notesObj.splice(index, 1);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   showNotes();
// }


// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){

//     let inputVal = search.value.toLowerCase();
//     // console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//         // console.log(cardTxt);
//     })
// })

// /*
// Further Features:
// 1. Add Title
// 2. Mark a note as Important
// 3. Separate notes by user
// 4. Sync and host to web server 
// */ 
