console.log('hello');


//reating all audio variables
let clap= new Audio('sounds/clap.wav');
let boom= new Audio('sounds/boom.wav');
let hihat= new Audio('sounds/hihat.wav');
let kick= new Audio('sounds/kick.wav');
let openhat= new Audio('sounds/openhat.wav');
let ride= new Audio('sounds/ride.wav');
let snare= new Audio('sounds/snare.wav');
let tink= new Audio('sounds/tink.wav');
let tom= new Audio('sounds/tom.wav');

//This will take all the button elements
let keys=document.getElementsByClassName('drum-key');

for(let key of keys){
   //This will play sound when any key is pressed
    key.addEventListener('keydown',(e)=>{
        
        // console.log(document.querySelector(`button[value="${e.keyCode}"]`));

             //******adding bright class*****

        //will call button having keycode as value.
         let keyboardvalue=document.querySelector(`button[value="${e.keyCode}"]`);

         //if any non displayed key is pressed.
         if(keyboardvalue)
        keyboardvalue.classList.add('bright');
        playSound(e.keyCode);
        
        //since transitioning is already a time bound property, using another time bound function is not recommended
            //    setTimeout(()=>
            //     {keyboardvalue.classList.remove('bright');
            //     },500);
            
       
    })
                //*******to remove bright class*******
    // we will use property transitionend.
        key.addEventListener('transitionend',(e1)=>{
        //since transitionend triggers every time transition is made i.e. for change in borders etc. as well , we are returning if transitionend is not triggered for property transform.

        if(e1.propertyName!='transform') return;
        e1.target.classList.remove('bright');
       })
     
            //******when button is clicked****
    key.addEventListener('click',(e2)=>{
        console.log(e2.target.value);
        if(e2.target.value)
        {playSound(parseInt(e2.target.value));
        e2.target.classList.add('bright');}
    })
}

        //*******Plays sound ***/
function playSound(ch){
    switch(ch)
        { 
            case 65: {clap.currentTime=0; //if one audio is playing then same audio will not play again as function is already running. to prevet this we et currenttime=0.          
                     clap.play();}
                     break;
            case 83: hihat.currentTime=0;
                      hihat.play();
                     break;
            case 68: kick.currentTime=0;
                      kick.play();
                    break;
            case 70: openhat.currentTime=0;
                      openhat.play();
                    break;
            case 71: boom.currentTime=0;
                      boom.play();
                    break;
            case 72: ride.currentTime=0;
                      ride.play();
                    break;
            case 74: snare.currentTime=0;
                      snare.play();
                    break;
            case 75: tom.currentTime=0;
                      tom.play();
                    break;
            case 76: tink.currentTime=0;
                      tink.play();
                    break;
        }
}
