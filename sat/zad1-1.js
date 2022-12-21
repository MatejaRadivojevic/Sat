let TRvreme=new Date();
let godina=TRvreme.getFullYear();
let sati=TRvreme.getHours();
let minut=TRvreme.getMinutes();
let sekunde=TRvreme.getSeconds();
let p=document.getElementById('p');
if(sati<10){
    sati='0'+sati;
}
if(minut<10){
    minut='0'+minut;
}
if(sekunde<10){
    sekunde='0'+sekunde;
}
p.innerHTML='<p>'+'Sada je '+sati+':'+minut+':'+sekunde+'</p>';
p.style.color='red';
