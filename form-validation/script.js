//validating name

//here we will use regex to validate name,email,phone number and then use bootstrap alert after clicking submit button to inform the user.

let uname = document.getElementById('name');
let email = document.getElementById('email');
let tel = document.getElementById('phone');
let namevalue=false;
let emailvalue=false;
let telvalue=false;
uname.addEventListener('blur', () => {
    let reg = /^[a-zA-Z]([a-zA-Z0-9]){2,8}$/;
    //^[a-zA-Z]([a-zA-Z0-9]){2,10} this will take more than 10 characters as this means it will accept any string beginning with this expression.
    //hence add $.This means that string will add with the second expression.
    let result = reg.test(uname.value);
    console.log(result,uname.value);

    if (result == true) {

        uname.classList.remove('is-invalid');
        namevalue=true;
    }
    else {
        uname.classList.add('is-invalid');
       namevalue=false;
    }

});

//email-validation
email.addEventListener('blur',()=>{
 let reg2=/^(\S){1,64}@([a-zA-Z]+)\.([a-zA-Z]+)/;
 let result = reg2.test(email.value);
    console.log(result,email.value);
    
    if (result == true) {

        email.classList.remove('is-invalid');
        emailvalue=true;
    }
    else {
        email.classList.add('is-invalid');
        emailvalue=false;
    }
});



//phone number validation
tel.addEventListener('blur',()=>{
    
  let reg=/^([0-9]){10}$/;
  let result = reg.test(tel.value);
    console.log(result,tel.value);
    
    if (result == true) {

        phone.classList.remove('is-invalid');
        telvalue=true;
    }
    else {
        phone.classList.add('is-invalid');
        telvalue=false;
    }
});
// document.getElementById('submit').addEventListener('click',(e)=>{
//     e.preventDefault();
//   if(value==true)
//   {document.getElementById('success').classList.add('show');
     
//   else  document.getElementById('failed').classList.add('show');
// });


document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
  if(namevalue==true&&emailvalue==true&&telvalue==true)
  document.getElementById('alert').innerHTML=`<div class="alert alert-success show" role="alert" id="success">
  Form has been successfully submitted.
</div>`;
  else   document.getElementById('alert').innerHTML=`<div class="alert alert-danger show" role="alert" id="success">
  Please fill the form carefully</div>`
});