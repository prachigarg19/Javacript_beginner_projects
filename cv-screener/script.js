console.log('bla');
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

let index=0;
display(index);
function display(index){
    str="";
    str+=`<div class="container-items">
    <img src="${data[index].image}" alt="candidate${index}">
    <br>
    <div class="grid my-3">
        <p class="item">Name= ${data[index].name}</p>
        <p class="item">${data[index].age} years old</p>
        <p class="item">Lives in ${data[index].city}</p>
        <p class="item">Primarily works on ${data[index].language}</p>
        <p class="item">Uses ${data[index].framework} framework</p></div>
    </div><br>`;
    document.getElementById('container').innerHTML=str;
}
document.getElementById('next').addEventListener('click',()=>{
    try{
    display(++index);}catch(TypeError)
    {
        console.log('index over');
        index=0;
        display(index);
    }
})