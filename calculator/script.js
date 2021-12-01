let num1,num2,operator;
let flag=false;
calbutton=document.getElementsByClassName('cal-button');
display=document.getElementById('display');
let str="";
//traversing through all the buttons
for(let button of calbutton){
    //if button is clicked then it's value mentioned in html is used.
    button.addEventListener('click',(e)=>{
        // console.log(typeof(e.target.value));
        //if = is pressed then result is displayed using eval function.
        //two case 1. if user entered a special character first then we need to multiply 0
        //2. directly return the result
       if(e.target.value=='=') 
       {
        reg=/^[^\d()]/; //this regex eans that string should beign with anything but digits, (,)
            if(reg.test(str))
            {
            str1="0"; //adding 0 to str
            str1+=str; //adding str
             display.value=eval(str1);
            }
             else 
            display.value=eval(str);}
            //if c is clicked,display is cleared
       else if(e.target.value==='clear') 
        {
            str="";
            display.value="";
        }
        //keep on adding each button pressed to the str and keep on displaying it.
       else{
        str+=e.target.value;
        display.value+=e.target.value;
       }
    })
}

