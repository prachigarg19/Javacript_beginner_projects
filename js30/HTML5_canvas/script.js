console.log('hello');
let canvas=document.getElementById('draw');
//setup size of camvas to cover the whole screen
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

//set the type of content that will be drawn on canvas
let ctx=canvas.getContext('2d');

//setting the stroke style(color) ,lineJoin(type of shape at joint of 2 lines),lineCap(starting shape of line)

let hue=0;
ctx.strokeStyle=`black`;
ctx.lineJoin='circle';
ctx.lineCap='circle';
ctx.lineWidth=10;
//creating a flag.This will be used to not draw line when user clicks out of canvas or stops pressing mouse
let flag=false;

//calling event listeners.

//first user will click on canvas. 
canvas.addEventListener('pointdown',(e)=>{flag=true; 
    [startX,startY]=[e.offsetX,e.offsetY];
    //without this , the line will start drawing from point where user last stopped and not from the point where user has clicked recently.
    })
//mousemove will call draw function whenever mouse is moved over canvas.
canvas.addEventListener('pointmove',draw);
//if user stops pressing mouse
canvas.addEventListener('pointup',()=>flag=false);
//if user clicks anywhere other than canvas
canvas.addEventListener('pointout',()=>flag=false);



//setting the initial points from where drawing wills start
[startX,startY]=[0,0];

function draw(e){
    if(flag==false) return;//user is not drawing
    //  setting color
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    //start path
    ctx.beginPath();
    //move to the starting point
    ctx.moveTo(startX,startY);
    //draw line till the point 
    ctx.lineTo(e.offsetX,e.offsetY);
    //offset property returns the coordinate at which mouse if clicked. so it will join the line to the point where user keeps moving the mouse.
    ctx.stroke();
    //actually drawing the line between the points
     
    //setting start points to the last point at which user stopped drawing
    //without this if draw is triggered then starting point will stick to mousedown offsets only.
    // we want it to start from the point where mouse is being moved currently.
    [startX,startY]=[e.offsetX,e.offsetY];
    hue=(hue>360?0:hue+1);
}