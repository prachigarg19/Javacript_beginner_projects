displayBooks();
document.getElementById('btn').addEventListener('click',function(e){
   let books=localStorage.getItem('books');
   //below statements are written to access value returned by checkbox
   let fiction=document.getElementById('fiction');
   let programming=document.getElementById('programming');
   let cooking=document.getElementById('cooking');
   let type;
   if(fiction.checked) type='Fiction';
   else if(programming.checked) type='Programming';
   else type='Cooking';
   //parsing books
   if(books==null)
   booksobj=[]; //array of object
   else booksobj=JSON.parse(books);
   //an object to store all the values entered by user 
   let newbook={
       'Name':document.getElementById('bookName').value,
       'Author':document.getElementById('author').value,
       'Type':type
   }
   //if no bookame has been added then display error message
   if(newbook.Name.length==0||newbook.Author.length==0)
   {
    displayMessage('danger','Fill details properly');
    //book has not been added in storage
   }
   else{
       //book has been added message
    displayMessage('success','Your book has been successfully added!');
    //book added to storage
   booksobj.push(newbook);
   localStorage.setItem('books',JSON.stringify(booksobj));}
   //since page is being reloaded everytime button is clicked as default behaviour. To prevent it.
   e.preventDefault();
   document.getElementById('libraryForm').reset();
   //this will clear all the entered details by user

   displayBooks();
   
});

//displaying new books
function displayBooks(){
    //parsing books
    document.getElementById('tableBody').innerHTML="";
    //first clearing to prevent repetition is display of books
    let books=localStorage.getItem('books');
   if(books==null)
   booksobj=[];
   else booksobj=JSON.parse(books);
   //for each book html is storing the object value in table format
   booksobj.forEach(function(element){
     html="";
     html+=`<tr>
            <td scope="col">${element.Name}</td>
            <td scope="col">${element.Author}</td>
            <td scope="col">${element.Type}</td>
            </tr>`;
 let tablecontent=document.getElementById('tableBody');
 tablecontent.innerHTML+=html;
 //appending each html to tableBody
   });
}
//delete books
document.getElementById('remove-btn').addEventListener('click',function(e){
    e.preventDefault();
    let books=localStorage.getItem('books');
    if(books==null)
    booksobj=[];
    else booksobj=JSON.parse(books);
    let fiction=document.getElementById('fiction');
   let programming=document.getElementById('programming');
   let cooking=document.getElementById('cooking');
   let type;
   if(fiction.checked) type='Fiction';
   else if(programming.checked) type='Programming';
   else type='Cooking';
    let newbook={
        'Name':document.getElementById('bookName').value,
        'Author':document.getElementById('author').value,
        'Type':type
    }
    //if no bookame has been added then display error message
   if(newbook.Name.length==0||newbook.Author.length==0)
   {
    displayMessage('danger','Fill details properly');
    return;
    //without return statement book is still being deleted. hence returned.
   }
    //up untill here we have just parsed the books array and then stored the details of book to be deleted in newbook object.
    //below we will use loop and compare value of the book to check if that book exists
    let result=false; //this will turn true is book is found. if not, then message is displayed
    booksobj.forEach(function(element,index){
        if(element.Name.toLowerCase===newbook['Name'].toLowerCase) //to prevent different case issues.
        {booksobj.splice(index,1); //removing book from booksobj then storing updated array in memory
        localStorage.setItem('books',JSON.stringify(booksobj));
        displayMessage('success','Book has been successfully deleted'); //displaying message
       
   displayBooks();
         result=true;}

    });
    //book is not found
    if(result==false){
        displayMessage('danger','This book does not exist');
    }
    //clearing details entered by user
   document.getElementById('libraryForm').reset();
});

//display message
function displayMessage(msgtype,msgtext){
    let message=document.getElementById('message');
    let html2="";
    html2+=`<div class="alert alert-${msgtype} alert-dismissible fade show" role="alert">
    <strong>${msgtext}</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
</div>`; message.innerHTML+=html2;
setTimeout(function(){
    message.innerHTML="";
}, 2000);

}
//searching for the books
document.getElementById('search').addEventListener('click',function(e){
   let text=document.getElementById('searchTxt');
   //storing text entered by user
   e.preventDefault();
    let books=localStorage.getItem('books');
    if(books==null)
    booksobj=[];
    else booksobj=JSON.parse(books);
    document.getElementById('tableBody').innerHTML="";
    booksobj.forEach(function(element){
        if(element.Name.toLowerCase===text.value.toLowerCase
            ||element.Author.toLowerCase===text.value.toLowerCase
            ||element.Type.toLowerCase===text.value.toLowerCase)
            {
                html="";
     html+=`<tr>
            <td scope="col">${element.Name}</td>
            <td scope="col">${element.Author}</td>
            <td scope="col">${element.Type}</td>
            </tr>`;
            let tablecontent=document.getElementById('tableBody');
            tablecontent.innerHTML+=html;
            }
    })
    if(document.getElementById('tableBody').innerHTML==="")
    document.getElementById('tableBody').innerHTML="No books found";
    document.getElementById('search-form').reset();
});