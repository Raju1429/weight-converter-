document.getElementById('output').style.visibility='hidden';
document.getElementById('lbsinput').addEventListener('input',function(e){
    document.getElementById('output').style.visibility='visible';
    let lbs=e.target.value;
    document.getElementById('pooutput').innerHTML=lbs*2.2046;
    document.getElementById('ozoutput').innerHTML=lbs*1000;
    document.getElementById('goutput').innerHTML=lbs*35.41;
    document.getElementById('tonne').innerHTML=lbs*0.001;

    
});


const hamburger = document.getElementById('hamburger');
const lists = document.getElementById('lists');

hamburger.addEventListener('click', function () {
    lists.classList.toggle('active');
    hamburger.classList.toggle('active');
});




 





