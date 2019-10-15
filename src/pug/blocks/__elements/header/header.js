let burger = document.querySelectorAll('.burger');

for(i=0; i<burger.length; i++) {
    burger[i].addEventListener('click', function(e) {
        let el;
        if(e.target.classList == 'burger') {
            el = e.target;
        } else {
            el = e.target.parentElement;
        }
        el.nextElementSibling.classList.toggle('show');
    })
}