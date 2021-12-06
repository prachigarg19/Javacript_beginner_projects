
const url='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let data=document.getElementById('text');
// fetching 
let cities;
fetch(url,{
    method:'GET',
})
.then(response=>response.json())
.then(text=>{
    cities=text.map(item=>item['city']);
    
})

let resultdisplay=document.getElementById('list');

//triggering function for whenever user enters data
let display,regex;
data.addEventListener('keyup',(e)=>{
    if(e.target.value==="") return;
 display=cities.filter(item=>{
     regex=new RegExp(e.target.value,'gi');
     return item.match(regex)
  
})


result(); //to display list
})


//displaying list of cities that matches user's input,changing user's input to the city selected by user.

function result(){
    str="";
    for(let item of display)
    {   let city=item.replace(regex,`<span style="background-color:green;">${data.value}</span>`);
        str+=`<ul><button value="${item}" class="city-list">${city}</button></ul><hr>`;  
    } 

    resultdisplay.innerHTML=str;

 //to display value of city selected by user
    try{
    let cityarr=Array.from(document.getElementsByClassName("city-list"));
    for(cityitem of cityarr){
    cityitem.addEventListener('click',(e)=>{
        data.value=e.target.value;
        resultdisplay.innerHTML="";
        //removing list after user chose city
    });}
        }catch(TypeError){
        return;
        }
    //try-catch block as if user clicks on highlighted part, due to no value given to it, undefined will be shown on text box.

    
}


