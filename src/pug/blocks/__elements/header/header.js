let burger = document.querySelectorAll('.burger');

for(i=0; i<burger.length; i++) {
    burger[i].addEventListener('click', function(e) {
        e.target.nextElementSibling.classList.toggle('show');
    })
}