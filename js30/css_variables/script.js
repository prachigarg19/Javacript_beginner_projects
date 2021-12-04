
let input=document.getElementsByTagName('input')


for(inputloop of input){
   
    inputloop.addEventListener('click',updateValues);
    inputloop.addEventListener('mousemove',updateValues);
    //moursemove as range is not returning value during transition
}
// updating css variables
function updateValues(){
    
    let suffix=this.dataset.sizing||"";
    //setting suffix to use them after padding and blur. ||"" to prevent undefined(color case) to be appended

    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);

}