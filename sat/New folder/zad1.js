let dugme=document.getElementById('dugme');
dugme.addEventListener('mouseover', function(){dugme.style.backgroundColor='red'});
dugme.addEventListener('mouseout', function(){dugme.style.backgroundColor='green'});
function idi(){
    window.location.href='zad1-1.html'
}
dugme.addEventListener('click',idi);