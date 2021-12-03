console.log('hello');

function changeHour(){
    let hour=document.getElementById('hour');
    let hangle;
    if(date.getHours()<12)
    {   
        hangle=(date.getHours()*30);
    }
    else hangle=(date.getHours()-12)*30+90;
    hour.style.transform=`rotate(${hangle}deg)`;
}
function changeMin(){
    date=new Date();
    let min=document.getElementById('min');
    let mangle=date.getMinutes()*6+90;  
    min.style.transform=`rotate(${mangle}deg)`;
}
function changeSec(){
    date=new Date();
    let sec=document.getElementById('sec');
    let sangle=date.getSeconds()*6;
    sangle+=90;   
    sec.style.transform=`rotate(${sangle}deg)`;
}

//calling function again and again after every second
setInterval(changeSec,1000);
setInterval(changeMin,1000);
setInterval(changeHour,1000);
